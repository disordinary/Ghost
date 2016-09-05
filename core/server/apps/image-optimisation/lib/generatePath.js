var Imgix = require('imgix-core-js');



function generatePath(config, width, url) {
    switch(config.provider) {
        case 'imgix':
            return generateImgixURL(config, width, url);
            break;
        case 'cloudimage':
            return generateCloudImageURL(config, width, url);
        break;
    }
}

// generate and sign URL for imgix
function generateImgixURL(config, width, url) {
    var imgix = new Imgix({
        host: config.domain,
        secureURLToken: config.token
    });

    return imgix.buildURL(url, {
       w: width
    });

}

function generateCloudImageURL(config, width, url) {

}


module.exports = generatePath;
