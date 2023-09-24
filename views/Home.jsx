const React = require('react')

class Home extends React.Component {
    render() {
        return(
            <div style={{height: '100vh', width: '100vw', display: 'grid', gridTemplateRows: '100px 1fr'}}>
                <div style={{gridRow: '1/2', backgroundColor: 'lightcoral', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 style={{color: 'beige', letterSpacing: '0.02in', fontFamily: 'monospace', fontSize: '40px'}}>
                        Welcome to the Pokémon App!
                    </h1>
                    <a href='/pokemon'>
                        <img src='https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Download-Image.png' alt='Pokemon Ball' width='40px' style={{marginLeft: '20px', marginTop: '8px', cursor: 'pointer'}} />
                    </a>
                </div>
                <div style={{gridRow: '2/3', backgroundImage: 'url(https://wallpapers.com/images/hd/all-pokemon-pictures-03imn29v8gsd3lup.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                </div>
            </div>
        )
    }
}

module.exports = Home