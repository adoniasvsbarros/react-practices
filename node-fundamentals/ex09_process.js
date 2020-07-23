process.stdout.write('Are you enjoyng the course?')
process.stdin.on('data', function(data) {
    process.stdout.write(`Your answer was ${data.toString()} Thanks!`)
    process.exit()
})