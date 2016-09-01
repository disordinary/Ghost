var config     = require('../../config'),
    errors     = require('../../errors'),
    i18n       = require('../../i18n');





module.exports = {
    activate: function activate(app) {
        if(!(config.hasOwnProperty('imageOptimisation')
            && config.imageOptimisation.hasOwnProperty('url'))) {
            return;
        }

        app.filters.register("prePostsRender" , function( post) {
            post.html = post.html.replace(/(<img.*src=["|'])(\/content\/images\/)([^"&^']*["|'])/g,
                "$1" + config.imageOptimisation.url + "$3");
            return post;
        });
    }
};
