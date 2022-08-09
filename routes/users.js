module.exports = function (app) {

    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({
            users: [{
                name: 'Demerson',
                email: 'demersontorres520@gmail.com',
                id: 'oi',

            }]
        });

    });

    app.get('/users/admin', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({
            users: [{}]
        });

    })
}



