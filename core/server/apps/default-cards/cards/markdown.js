var card = {
 name: 'markdown-card',
 type: 'dom',
 render(opts) {
   var div = opts.env.dom.createElement('div');
   div.innerHTML = opts.payload.markdown;
   return div;
 }
};

module.exports = card;