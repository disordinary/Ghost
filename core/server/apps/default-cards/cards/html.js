var card = {
 name: 'html-card',
 type: 'dom',
 render(opts) {
console.log(opts);
   var div = opts.env.dom.createElement('div');
   div.innerHTML = opts.payload.html;
   return div;
 }
};

module.exports = card;