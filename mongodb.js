// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('CONNECTION FAILED...');
    }

    //console.log('CONNECTION SUCCESSFUL!');

    const db = client.db(databaseName);


    // db.collection('users').insertOne({
    //     name: 'Shehzad',
    //     age: 25
    // }, (error, result) => {
    //     if (error){
    //         return console.log('not working...');
    //     }

    //     console.log(result.ops);


    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gregory',
    //         age: 32
    //     }

    // ], (error, result) => {
    //     if (error) {
    //         return console.log('not working...');
    //     }

    //     console.log(result.ops)

    // });


    db.collection('tasks').insertMany([
        {
            description: 'Do laundry',
            completed: false
        },
        {
            description: 'Feed cat',
            completed: true
        },
        {
            description: 'Workout',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log(error);
        }

        console.log('Tasks added');

    })

        

});