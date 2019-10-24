/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// gatsby-browser.js
// Import the component at the top of the file

exports.onClientEntry = () => {
    window.onload = () => {

        var main_menu = document.getElementById("main_menu");
        console.log(main_menu);
        if( main_menu ){
            console.log(document.getElementById("main_menu").className);
            document.getElementById("main_menu").className.replace('closed','');
        }        

    }
  }
