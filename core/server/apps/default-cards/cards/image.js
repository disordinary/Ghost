var card = {
 name: 'image-card',
 type: 'dom',
 render(opts) {
   var img = opts.env.dom.createElement('img');
   img.src = opts.payload.img
   return img;
 }
};

module.exports = card;