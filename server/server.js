var env = process.env.NODE_ENV || 'development';

console.log('env*****', env);

if(env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://192.168.1.118:27017/TodoApp';
} else if (env === 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://192.168.1.118:27017/TodoAppTest';
}

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

const port = process.env.PORT;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
        // console.log(JSON.stringify(doc, undefined, 2));
    }, (e) => {
        res.status(400).send({e});
        // console.log('Unable to save todo ', e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // res.send({id});
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }, (e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    // res.send({id});
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }, (e) => {
        res.status(404).send();
    }) 
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id ;
    var body = _.pick(req.body, ['text', 'completed'])

    console.log(body);
    
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }

        res.status(200).send({todo});

    }).catch((err) => { 
        res.status(400).send(err);
    });
})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = {app};