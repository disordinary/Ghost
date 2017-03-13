var should  = require('should'),
    card    = require('../cards/hr');

describe.only('HR should render', function () {
    it('hrs', function () {
        card.render().should.match('<hr>');
        rendered.should.match(/<script async custom-element="amp-anim" src="https:\/\/cdn.ampproject.org\/v0\/amp-anim-0.1.js"><\/script>/);
    });
});
