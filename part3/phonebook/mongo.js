/* eslint-disable no-undef */
const mongoose = require('mongoose')
// console.log(process.argv);

// eslint-disable-next-line no-undef
if (process.argv.length < 3) {
    console.log(
        'Please provide the password as an argument: node mongo.js <password>'
    )
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://monica:${password}@cluster0.5lmu3.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Person = mongoose.model('Person', phonebookSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
})

if (process.argv.length <= 3) {
    Person.find({}).then((person) => {
        console.log('phonebook:')
        person.forEach((p) => {
            console.log(`${p.name} ${p.number}`)
        })
        mongoose.connection.close()
    })
}
if (process.argv.length > 3) {
    person.save().then((result) => {
        console.log(result)
        console.log(`added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close()
    })
}