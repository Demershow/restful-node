let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
        users: [{
            name: 'Demerson',
            email: 'sim',
            id: 'oi',

        }]
    });

});

routes.get('/admin', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
        users: [{
        }]
    });

})

module.exports = routes; 