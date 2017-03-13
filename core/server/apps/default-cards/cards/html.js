var SimpleDom   = require('simple-dom');
var tokenizer   = require('simple-html-tokenizer').tokenize;

var card = {
    name: 'html-card',
    type: 'dom',
    render(opts) {
        var parser = new SimpleDom.HTMLParser(tokenizer, opts.env.dom, SimpleDom.voidMap);
        return parser.parse('<div>' + opts.payload.markdown + '</div>');
    }
};

module.exports = card;