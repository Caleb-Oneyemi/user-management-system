const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('https://usermanagementsystemapp.herokuapp.com/api/users').then((response) => {
        res.render('index', {
            users: response.data
        });
    }).catch(err => {
        res.send(err.message);
    })
    
}

exports.addUser = (req, res) => {
    res.render('add_user');
}

exports.updateUser = (req, res) => {
    axios.get(`https://usermanagementsystemapp.herokuapp.com/api/users/${req.query.id}`)
        .then((userdata) => {
            res.render('update_user', {
                user: userdata.data
            });
        }).catch(err => {
            res.send(err.message);
        })
}