// Importing using babel plugin

import Person from './person' // babel
// const person = require('./person') // commonsJS

const person = new Person('Adonias Barros')
console.log(person.toString())