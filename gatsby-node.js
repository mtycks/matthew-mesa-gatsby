const { v4: uuidv4 } = require('uuid');
const { slugify } = require('./util/utilityFunctions')
const path = require('path')
const _ = require('lodash') 

exports.onCreateNode = ({ node, actions }) => {

    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){

        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })

        //Add a unique identifier 
        createNodeField({
            node,
            name: 'uuid',
            value: uuidv4()
        })

    }

}

exports.createPages = ({ actions, graphql}) => {

    const { createPage } = actions;

    const templates = {
        portfolioPost: path.resolve('src/templates/portfolio-item.js'),
        blogPost: path.resolve('src/templates/single-post.js'),
        tagsPage: path.resolve('src/templates/tags-page.js'),
        tagPosts: path.resolve('src/templates/tag-posts.js')
    }

    return graphql(`
    
        {
            blogPosts: allMarkdownRemark( filter: {fileAbsolutePath: {regex: "/(blog)/"  }} ){
                edges{
                    node{
                        frontmatter{
                            author
                            tags
                        }
                        fields{
                            slug
                            uuid
                        }
                    }
                }
            }
            portfolioItems: allMarkdownRemark( filter: {fileAbsolutePath: {regex: "/(portfolio-items)/"  }} ){
                edges{
                    node{
                        frontmatter{
                            author
                            tags
                        }
                        fields{
                            slug
                            uuid
                        }
                    }
                }
            }
        }
    
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)

        //Create the individual portfolio pages
        const portfolioItems = res.data.portfolioItems.edges
        portfolioItems.forEach(({node}) => {

            createPage({
                path: `/portfolio/${node.fields.slug}`,
                component: templates.portfolioPost,
                context: {
                    //Passing slug for template to use to get post
                    slug: node.fields.slug,
                    uuid: node.fields.uuid
                }
            })

        })

        //Create the blog post pages
        const blogPosts = res.data.blogPosts.edges
        blogPosts.forEach(({node}) => {

            createPage({
                path: `/blog/${node.fields.slug}`,
                component: templates.blogPost,
                context: {
                    //Passing slug for template to use to get post
                    slug: node.fields.slug,
                    uuid: node.fields.uuid
                }
            })

        })

        // Get all tags
        // the underscore is a lodash function
        let tags = []
        _.each(portfolioItems, edge =>{
            if(_.get(edge, 'node.frontmatter.tags')){
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })

        let tagPostCounts = {}
        tags.forEach(tag =>{
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
        })

        tags = _.uniq(tags)

        //Create tags page
        createPage({
            path: `/tags`,
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts
            }
        })

        //Create tag posts pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag
                }
            })
        })

    })

}