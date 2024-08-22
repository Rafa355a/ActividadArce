const router = require('express').Router()

router.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

router.get('/nosotros', (req, res) => {
    res.sendFile('./static/nosotros.html', {
        root: __dirname
    })
})

router.get('/servicios', (req, res) => {
    res.sendFile('./static/servicios.html', {
        root: __dirname
    })
})

router.get('/producto', (req, res) => {
    res.sendFile('./static/producto.html', {
        root: __dirname
    })
})

router.get('/marcas', (req, res) => {
    res.sendFile('./static/marcas.html', {
        root: __dirname
    })
})

router.get('/equipo', (req, res) => {
    res.sendFile('./static/equipo.html', {
        root: __dirname
    })
})

router.get('/contactenos', (req, res) => {
    res.sendFile('./static/contactenos.html', {
        root: __dirname
    })
})

router.post('/contacto', (req, res) => {
    console.log('Datos del formulario:', req.body)
    res.send('Formulario recibido. Gracias por contactarnos!')
})

module.exports = router