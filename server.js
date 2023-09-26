//Setting Up Express App
const express = require('express')
const app = express()

//Packages and Mongoose
const dotenv = require('dotenv')
dotenv.config()
// console.log(process.env)
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
        app.get('/pokemon', async (req, res) => {
            try{
                const pokemon = await Pokemon.find()
                res.render('Index', {pokemons: pokemon})
            }catch(error){
                console.error(error)
            }
        })

    //New
        app.get('/pokemon/new', (req, res) => {
            res.render('New')
        })

    //Delete
        app.delete('/pokemon/:id', async(req, res) => {
            try{
                await Pokemon.findByIdAndRemove(req.params.id)
                res.redirect('/pokemon')
            }catch(error){
                console.error(error)
            }
        })

    //Update
        app.put('/pokemon/:id', async(req, res) => {
            try{
                await Pokemon.findByIdAndUpdate(req.params.id, req.body)
                res.redirect(`/pokemon/${req.params.id}`)
            }catch(error){
                console.error(error)
            }
        })

    //Create
        app.post('/pokemon', async(req, res) => {
            try{
                await Pokemon.create(req.body)
                res.redirect('/pokemon')
            }catch(error){
                console.error(error)
            }
        })

    //Edit
        app.get('/pokemon/:id/edit', async(req, res) => {
            try{
                const foundPokemon = await Pokemon.findById(req.params.id)
                res.render('Edit', {pokemon: foundPokemon})
            }catch(error){
                console.error(error)
            }
        })

    //Show
        app.get('/pokemon/:id', async (req, res) => {
            try{
                const pokemon = await Pokemon.findById(req.params.id)
                console.log(req.params.id)
                res.render('Show', {pokemon})
            }catch(error){
                console.error(error)
            }
        })


//Server Status Check
app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
});
