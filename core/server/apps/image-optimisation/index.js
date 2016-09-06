var config     = require('../../config'),
    errors     = require('../../errors'),
    Promise         = require('bluebird'),
    generatePath = require('./lib/generatePath.js'),
    registerHelpers     = require('./lib/helpers');






module.exports = {
    activate: function(ghost) {
        registerHelpers(ghost);
    },

    contentFilter: function(post) {
        return replaceImagesInPost(post);
    }


};


function replaceImagesInPost(post) {
    post.html = post.html.replace(g,
        function(match, tagOpen, imagePath, imageStringCLose, tagClose) {

            var imageURL = config.url + "/" + imagePath;

            var defaultImage = generatePath(config.imageCDN, config.imageCDN.sizes[0], imageURL);
            var srcSet       = generateSrcset(config, imageURL);
            return tagOpen + defaultImage + imageStringCLose + srcSet + " style='border:3px solid red;'" + tagClose;
        });
    return post;
}

function generateSrcset(config, url) {
    var srcSet = config.imageCDN.sizes.map(function(size) {
        console.log( size);
        return generatePath(config.imageCDN, size, url) + " " + size + "w";
    });

    return ' srcset="' + srcSet.join(', ') + '"';

}
