const React = require('react')
const DefaultLayout = require('./layout/Default')

class Edit extends React.Component{
    render(){

        const { pokemon } = this.props

        return(
            <DefaultLayout title={'Edit Pokémon'}>
                <div style={{height: '100vh', width: '100vw', background: 'linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51))', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                    <form action={`/pokemon/${pokemon._id}?_method=PUT`} method='POST' style={{lineHeight: '0.5in'}}>
                        <span style={{color: 'white', fontFamily: 'monospace', fontSize: '25px'}}>
                            Name:
                        </span> 
                        <input type="text" name="name" defaultValue={pokemon.name} style={{width: '200px', height: '40px', border: '5px yellow ridge', color: 'crimson', fontFamily: 'monospace', textAlign: 'center', fontSize: '20px', marginBottom: '50px', marginLeft: '20px'}}/><br/>
                        <span style={{color: 'white', fontFamily: 'monospace', fontSize: '25px'}}>
                            Img:
                        </span> 
                        <input type="url" name="img"  defaultValue={pokemon.img} style={{width: '500px', height: '40px', border: '5px yellow ridge', color: 'crimson', fontFamily: 'monospace', textAlign: 'center', fontSize: '18px', overflow: 'scroll', marginLeft: '20px'}}/><br/>
                        <br/>
                        <input type="submit" value="Submit Changes" style={{border: '2px orange inset', borderRadius: '50px', padding: '10px 20px', color: 'white',backgroundColor: 'crimson',fontFamily: 'monospace', textAlign: 'center', fontSize: '18px', cursor: 'pointer', marginLeft: '200px'}}/>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit