
const express = require('express');
const PORT = 3001;
const router = require('./src/routes/index')


const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});



server.use(express.json())

server.use('/rickandmorty' , router);

server.listen(PORT , () => {
    console.log(`El servidor fue creado en el puerto ${PORT}`);
})





/* const server = http.createServer((req , res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split('/').at(-1);

    if(req.url.includes('onsearch')){
        getCharById(res , id);
    }
    if(req.url.includes('detail')){
        getCharDetail(res , id);
    }
})
server.listen(PORT) */