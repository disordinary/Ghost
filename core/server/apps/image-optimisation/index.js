var config     = require('../../config'),
    errors     = require('../../errors'),
    generatePath = require('./lib/generatePath.js');


var WIDTH = 800; //the image width, it's a constant right now but will change TODO




module.exports = {
    activate: function(app) {

        if(!(config.hasOwnProperty('imageOptimisation')
            && config.imageOptimisation.hasOwnProperty('domain'))) {
            //image optimisation isn't in the configuration file.
            return;
        }

        app.filters.register("prePostsRender" , function( post) {
            if( post instanceof Array ) {
                //there is no images in the short form.
                return post;
            }


            post.html = post.html.replace(/(<img.*src=["|'])(\/content\/images\/[^"&^']*)(["|'])/g,
                function(match, p1, p2, p3, offset, string) {
                    //console.log(match, p1, p2, p3, offset, string);
                    return generatePath(config, WIDTH, match);
                });
            return post;
        });
    },

    setupFilters: function(post) {
        console.log("FILTER SETUP");
    }


};
