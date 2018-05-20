// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var objID = new ObjectID();
console.log(objID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connect to mongodb server');

    const db = client.db('TodoApp');

    db.collection('TodoApp').count().then((count) => {
        console.log(`Todos count ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('TodoApp').find({
        _id: new ObjectID("5aefc2547867ea696bc5c218")
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.collection('TodoApp').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Tripura',
    //     age: 38,
    //     location: 'Suwanee'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    // client.close();
});


