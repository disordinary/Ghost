function generatePath(provider, width, url) {
    switch(provider) {
        case "cloudimg":
            return "demo.cloudimg.io/s/resize/" + width +"/" + url;
            break;
    }
}
