const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token +'123', '123abc');

console.log(decoded);

// var message = 'I am user 3'
// var hash = SHA256(message);

// console.log(`message : ${message}`);
// console.log(`hash : ${hash.toString()}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id =5;
// // token.data.token = SHA256(JSON.stringify(data)).toString()

// var result = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (result === token.hash) {
//     console.log('Data was not changed')
// } else {
//     console.log('Data was changed donot trust')
// }