var config      = require('../../../../config'),
generatePath    = require('../generatePath.js');

registerHelpers = function (ghost) {
    ghost.helpers.register('sized_image', generateResizedImageURL);

};


function generateResizedImageURL(args) {
    //if the URL doesn't belong to this blog then we don't import it into
    //the image CDN and just return it unchanged.


    var url = args.hash.url;
    if(!isThisBlogsURL(url)) {
        return args.hash.url;
    }
    if(url[0]==="/") url = config.url+"/"+url;
    return generatePath(config.imageCDN, args.hash.width, url);
}

//checks to see if the URL of the image belongs to this blog or is absolute.
//TODO make it work with relative URLs
function isThisBlogsURL(url) {
    return url.substr(0, config.url.length) === config.url || url[0] === "/";
}




module.exports = registerHelpers;

