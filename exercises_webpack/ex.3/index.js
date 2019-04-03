// Using spread to copy objects

const product = {
    name: 'Black pen',
    price: 1.90,
    descount: 0.5
}

function clone(object){
    return { ...object }
}

const newProduct = clone(product)
newProduct.name = 'Blue pen'

console.log(product, newProduct)