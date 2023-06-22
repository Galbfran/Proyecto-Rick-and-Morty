const axios = require('axios')

const getCharDetail = (res , id) =>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data )
    .then(data => {
        let objetoCreado = {
            id : data.id,
            name : data.name, 
            gender : data.gender, 
            species : data.species, 
            origin : data.origin.name, 
            image : data.image, 
            status : data.status
        }
        res
        .writeHead(200 , {"Content-type": "application/json"})
        .end(JSON.stringify(objetoCreado));
    })
    .catch(error =>{
        res
        .writeHead(500 ,{"Content-type": "text/plain"})
        .end(`El personaje con id:${id} no fue encontrado.`)
    });
}

module.exports = getCharDetail