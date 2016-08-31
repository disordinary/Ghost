var config     = require('../../config'),
    errors     = require('../../errors'),
    i18n       = require('../../i18n');





module.exports = {
    activate: function activate(app) {
        app.filters.register("prePostsRender" , function( post) {

            post.html = post.html.replace(/(<img.*src=["|'])(\/content\/images\/)([^"&^']*["|'])/g,
                "$1http://ghost.org/$3");

            return post;
        });
    }
};
