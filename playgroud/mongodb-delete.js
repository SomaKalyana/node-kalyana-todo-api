
const {MongoClient, ObjectID} = require('mongodb');

var objID = new ObjectID();
console.log(objID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connect to mongodb server');
    
    const db = client.db('TodoApp');

    //deleteMany
    db.collection('Users').deleteMany({
        name: 'Kalyana'
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b01c56e8be8c99a3341aa1a')
    }).then((result) => {
        console.log(result);
    });

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat Lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });
});


