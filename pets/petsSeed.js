const Pet = require('./Pet')

const pets = [
    {
        species: 'Dog',
        breed: 'Siberian Husky'
    },
    {
        species: 'Dog',
        breed: 'Nova Scotia Duck Tolling Retriever'
    },
    {
        species: 'Cat',
        breed: 'Siamese'
    }
]

Pet.create(pets)
    .then(() => {
        console.info(`Seeded pets`)
    })