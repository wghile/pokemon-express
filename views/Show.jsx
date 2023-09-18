const React = require('react')

class Show extends React.Component {
    render() {

        const { pokemon } = this.props

        return(
            <div>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>{pokemon.name}</h2>
                <img src={`${pokemon.img}.jpg`} alt={`${pokemon.name}`}/>
                <br />
                <a href='/pokemon'>Back</a>
            </div>
        )
    }
}

module.exports = Show