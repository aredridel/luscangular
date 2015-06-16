'use strict';


var PhonesModel = require('../../models/phones');


module.exports = function(router) {

    var model = new PhonesModel();


    router.get('/', function(req, res) {
        res.send([
            {
                'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.'
            },
            {
                'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.'
            },
            {
                'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.'
            }
        ]);
    });

};
