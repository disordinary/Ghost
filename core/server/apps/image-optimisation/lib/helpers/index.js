var config      = require('../../../../config'),
generatePath    = require('../generatePath.js');

registerHelpers = function (ghost) {
    ghost.helpers.register('sized_image', imageTest);

};


function imageTest(args) {
    //TODO check to make sure the image is actually hosted by this blog,
    // i.e. a relative URL or a URL which is from this domkain.

    return generatePath(config.imageCDN, args.hash.width, args.hash.url);
}

module.exports = registerHelpers;
