const User = require('../models/model');

exports.create = (req, res) => {
    
    const { name, email, gender, status } = req.body;

    if (!name) {
        res.status(400).send({ message: 'User\'s name must be provided' });
        return;
    }

    if (!email) {
        res.status(400).send({ message: 'User\'s email must be provided' });
        return;
    }

    if (!gender) {
        res.status(400).send({ message: 'User\'s gender must be provided' });
        return;
    }

    const user = new User({
        name,
        email,
        gender,
        status
    });

    user.save(user).then(data => {
        //res.send(data)
        res.redirect('/add-user');
    }).catch(err => {
        console.log(err.message);
        res.status(500).send({
            message: 'error on creating a new user'
        });
    });
}

exports.find = (req, res) => {
    User.find({}).then(user => {
        res.send(user);
    }).catch(err => {
        console.log(err.message);
        res.status(500).send({
            message: 'error on fetching all users'
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findById(id).then(user => {
        res.send(user);
    }).catch(err => {
        console.log(err.message);
        res.status(500).send({
            message: `user with id ${id} not found`
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id;
    
    User.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false
    }).then(data => {
        if (!data) {
            res.status(400).send({ message: `user with id ${id} not found` })
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.send(500).send({
            message: 'Error on updating user'
        })
    })    
}

exports.delete = (req, res) => {
    const id = req.params.id;
    
    User.findByIdAndDelete(id).then(data => {
        if (!data) {
            res.status(400).send({ message: `user with id ${id} not found` })
        } else {
            res.send({ message: 'user deleted successfully' });
        }
    }).catch(err => {
        res.send(500).send({
            message: 'Error on deleting user'
        })
    })
}