const _ = require('lodash')

const students = [
    {name: 'John', grade: 7.6},
    {name: 'John', grade: 8.5},
    {name: 'John', grade: 8.1}
]

const average = _.sumBy(students, 'grade') / students.length
console.log(average)