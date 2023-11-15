const express =  require('express')
const routes  = require('./router/routes')
const bodyParser = require('body-parser');
const cors = require('cors')
const server = express()

require('./db');

server.use(cors())
server.use(bodyParser.json())
server.use('/', routes)

server.listen(3000, () =>{
    console.log('server ok')
})