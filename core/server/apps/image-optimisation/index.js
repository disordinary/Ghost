var config     = require('../../config'),
    errors     = require('../../errors'),
    Promise         = require('bluebird'),
    generatePath = require('./lib/generatePath.js');


var WIDTH = 800; //the image width, it's a constant right now but will change TODO




module.exports = {
    activate: function(app) {
    },

    contentFilter: function(post) {
        return replaceImagesInPost(post);
    }


};


function replaceImagesInPost(post) {
    post.html = post.html.replace(/(<img.*src=["|'])(\/content\/images\/[^"&^']*)(["|'])([^>]*>)/g,
        function(match, tagOpen, imagePath, imageStringCLose, tagClose) {


            generateSrcset(config.imageCDN, config.url + '/' + imagePath)
                .then(function(srcSet) {
                    console.log(results)
                });

            var defaultImage = generatePath(config.imageCDN, config.imageCDN.sizes[0], config.url + "/" + imagePath);
            return tagOpen + imagePathToCDN + imageStringCLose + " style='border:10px solid pink;'" + tagClose;

        });


    return post;
}

function generateSrcset(config, url) {
    return new Promise(function (resolve, reject) {
        Promise.map(config.sizes, function(size) {
            return generatePath(config, size, url) + " " + size + "w";
        }).then( function(results) {
            resolve(srcset='"' + results.join() + '"');
        });
    });

}
