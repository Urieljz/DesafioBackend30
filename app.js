require('dotenv').config()
const express = require('express')
const app = express() //instancia del objeto (biblioteca express)
const port = 3001
const { connect } = require('./src/utils/db')

//import paths
//const usersRoute = require('./repaso/src/routes/users')
connect()
//app.use(express.json()) //middleware, modifica el request, va arriba de mis endpoints/rutas porque los modifica

app.get('/', (req, res) => { //endpoint , sirve para verificar que el servidor esta funcionando
    res.send({ msg: 'Home' }) //mensaje de tipo JSON
})

//app.use('/users', usersRoute) // configuramos los path que agregamos al router en nuestro recurso usuarios

app.listen(port, () => { //inicializamos el hilo de ejecución
    console.log('Server is ready')
}) 