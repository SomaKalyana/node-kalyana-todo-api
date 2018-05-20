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

    // // db.collection('TodoApp').find({
    // //     _id : new ObjectID('5aefc056ce544a024c05ab3d')
    // // }).toArray().then((docs) => {
    // //     console.log('Todos');
    // //     console.log(JSON.stringify(docs, undefined, 2));
    // // }, (err) => {
    // //     console.log('Unable to fetch todos', err);
    // // });

    // db.collection('TodoApp').find().count().then((count) => {
    //     console.log('Todos count : ', count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name : 'Kalyana'
    }).toArray().then((docs) => {
        console.log('Users: ');
        console.log(JSON.stringify(docs,undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });
});


