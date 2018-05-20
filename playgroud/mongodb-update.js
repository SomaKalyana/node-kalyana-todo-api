
const {MongoClient, ObjectID} = require('mongodb');

var objID = new ObjectID();
console.log(objID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connect to mongodb server');
    
    const db = client.db('TodoApp');

    // //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     text: 'Eat Lunch'
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log('Updated...');
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aefc056ce544a024c05ab3e')
    }, {
        $set: {
            name: 'Kalyana'
        },
        $inc: {
            age: +1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log('Updated....');
        console.log(JSON.stringify(result, undefined, 2));
    })
    
});


