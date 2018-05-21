const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b022885c75a2d07b0dd7aa2';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos' , todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo' , todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

var userId = '5b020157e69f77038bc5c1cc';

if(!ObjectID.isValid(userId)) {
    console.log('User ID not valid');
}

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }

    console.log('User', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));