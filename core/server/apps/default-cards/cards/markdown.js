var SimpleDom   = require('simple-dom');
var tokenizer   = require('simple-html-tokenizer').tokenize;
var Showdown    = require('showdown-ghost');
var converter   = new Showdown.converter({extensions: ['ghostgfm', 'footnotes', 'highlight']});
var card = {
    name: 'markdown-card',
    type: 'dom',
    render(opts) {
        var parser = new SimpleDom.HTMLParser(tokenizer, opts.env.dom, SimpleDom.voidMap);
        return parser.parse('<div>' + converter.makeHtml(opts.payload.markdown || "") + '</div>');
    }
};

module.exports = card;