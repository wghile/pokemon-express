const React = require('react')
const DefaultLayout = require('./layout/Default')

class Show extends React.Component {
    render() {

        const { pokemon } = this.props

        return(
            <DefaultLayout docTitle={'Show'}>
                <div style={{height: '100vh', width: '100vw', display: 'grid', gridTemplateRows: '100px 1fr', fontFamily: 'Georgia', backgroundColor: 'lavender'}}>
                    <div style={{gridRow: '1/2', display: 'flex', alignItems: 'center', paddingLeft: '40px'}}>
                        <span style={{fontSize: '40px'}}>☜</span> 
                        <a href='/pokemon' style={{textDecoration: 'none', fontSize: '20px', paddingLeft: '10px', color: 'darkturquoise', textTransform: 'uppercase'}}>
                            Back
                        </a>
                        <h1 style={{paddingLeft: '27vw', paddingTop: '10vh', color: 'salmon', letterSpacing: '0.02in'}}>
                            Gotta Catch 'Em All!
                        </h1>
                    </div>
                    <div style={{gridRow: '2/3', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{background: 'white', height: '65vh', width: '30vw', borderRadius: '10px', display: 'grid', gridTemplateRows: '100px 1fr'}}>
                            <h2 style={{textTransform: 'capitalize', color: 'olive', letterSpacing: '0.02in', justifySelf: 'center', alignSelf: 'end'}}>
                                {pokemon.name}
                            </h2>
                            <img src={pokemon.img} alt={pokemon.name} style={{height: '70%', width: '60%', justifySelf: 'center', alignSelf: 'center'}}/>
                        </div>    
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show