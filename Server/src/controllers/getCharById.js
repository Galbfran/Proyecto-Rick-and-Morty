const axios = require('axios')


/* const getCharById = (res , id) =>{
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
} */

const getCharById = (req , res ) =>{
    const URL ='https://rickandmortyapi.com/api/character/'
    const { id } = req.params;
    axios( URL + id)
    .then(result => result.data )
    .then(data => {
        console.log(data)
        if(id && data.name){
            let objetoCreado = {
                "id" : data.id,
                "name" : data.name, 
                "gender" : data.gender, 
                "species" : data.species, 
                "origin" : data.origin.name, 
                "image" : data.image, 
                "status" : data.status
            }
            console.log(objetoCreado)
            return res.status(200).json(objetoCreado)
        }
        return res.status(404).send('Not found');
    })
    .catch(error => res.status(500).send(error.message))
}


module.exports ={ getCharById};

