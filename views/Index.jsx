const React = require('react')
const DefaultLayout = require('./layout/Default')

class Index extends React.Component {
    render () {

        const { pokemons } = this.props

        return (
            <DefaultLayout docTitle={'Index'}>
                <div style={{height: '100vh', width: '100vw', background: 'linear-gradient(57.4deg, rgb(249, 206, 183) 4.6%, rgb(234, 174, 202) 26%, rgb(210, 182, 226) 49.1%, rgb(173, 209, 242) 86.5%)', display: 'grid', gridTemplateColumns: '600px 1fr'}}>
                    <div style={{gridColumn: '1/2', display: 'grid', gridTemplateRows: '200px 1fr 100px', alignItems: 'center', fontFamily: 'Georgia', margin: '20px 70px'}}>
                        <div style={{gridRow: '1/2', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <h1 style={{color: 'mediumvioletred', letterSpacing: '0.01in', marginBottom: '0px'}}>
                                Learn All The Pokémon
                            </h1>
                            <p style={{lineHeight: '0.3in', paddingLeft: '20px'}}>
                                Just Kidding! With over 1000 Pokémon we won't be showing all of them here, that's <em>insaaaneee</em>. Instead, here's a list of some of the OG Pokémon that have been there since the start of it all with Ash, Misty, Brock and Team Rocket <span style={{fontWeight: 'bolder', color: 'red', background: 'white'}}>R</span>!
                            </p>
                        </div>
                        <div style={{gridRow: '2/3', overflow: 'scroll', height: '50vh'}}>
                            <ul style={{listStyle: 'inside', lineHeight: '0.8in'}}>
                                {pokemons.map((pokemon) => {
                                    return(
                                        <li key={pokemon.name} style={{textTransform: 'capitalize', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                                            <a style={{fontSize: '17px', gridColumn: '1/2'}} href={`/pokemon/${pokemon._id}`}>
                                                {pokemon.name}
                                            </a>
                                            <a style={{ textDecoration: 'none', color: 'blue', gridColumn: '2/3'}} href={`/pokemon/${pokemon._id}/edit`}>
                                                🖋️ Edit Pokémon
                                            </a>
                                            <form style={{display: 'inline', gridColumn: '3/4'}} action={`/pokemon/${pokemon._id}?_method=DELETE`} method='POST'>
                                                <input style={{fontFamily: 'Georgia', marginLeft: '30px', cursor: 'pointer', borderRadius: '10px', padding: '5px 10px', color: 'red', border: '2px black solid', backgroundColor:'white'}} type="submit" value="❌ DELETE"/>
                                            </form>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div style={{gridRow: '3/4', display: 'flex', justifyContent: 'center'}}>
                            <p style={{color: 'steelblue', fontStyle: 'italic', fontSize: '18px'}}>
                                Not Happy With this List?
                                <a style={{marginLeft: '10px', fontSize: '15px', padding: '10px', borderRadius: '10px', border: '2px inset orange', cursor: 'pointer', fontFamily: 'Georgia', backgroundColor: 'orange', color: 'white', textDecoration: 'none'}} href='/pokemon/new'>
                                    Click Here to Add More
                                </a>
                            </p>
                        </div>
                    </div>
                    <div style={{gridColumn: '2/3', display: 'grid', alignItems: 'center', marginLeft: '3vw'}}>
                        <img src='https://wallpapers.com/images/hd/all-pokemon-pictures-05kt8nfnxx11r6ew.jpg' alt='Pokemon' style={{width: '700px', borderRadius: '20px', border: '2px yellow inset'}}/>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index