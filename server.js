//Setting Up Express App
const express = require('express')
const app = express()

//Packages and Mongoose
const dotenv = require('dotenv')
dotenv.config()
// console.log(process.env)     //.env is connected
const mongoose = require('mongoose')
const methodOverride = require('method-override')

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
    console.log('Connected to mongoose')
})

//Model
// const pokemon = require('./models/pokemon')
const Pokemon = require('./models/pokemon')

//Setting Default Engine and Extension
const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//Middleware
app.use((req, res, next) => {
    console.log('running for all routes')
    next()
})

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//Routes: INDUCES
    app.get('/', (req, res) => {
        res.render('Home')
    })

    //Index
        app.get('/pokemon', (req, res) => {
            res.render('Index', {pokemons: pokemon})
        })

    //New
        app.get('/pokemon/new', (req, res) => {
            res.render('New')
        })

    //Delete
    //Update

    //Create
        app.post('/pokemon', (req, res) => {
            console.log(req.body)
            pokemon.push(req.body)
            res.redirect('/pokemon')
        })

    //Edit

    //Show
        app.get('/pokemon/:id', (req, res) => {
            res.render('Show', {pokemon: pokemon[req.params.id]})
        })


//Server Status Check
app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
});
