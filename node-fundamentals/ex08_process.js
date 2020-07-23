function hasParam(param) {
    return process.argv.indexOf(param) !== -1
}

if(hasParam('--production')) {
    console.log('Attention !!')
} else {
    console.log('Calm down and drink a coffee!')
}