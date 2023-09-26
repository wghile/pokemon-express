const React = require('react')

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body style={{margin: '0px'}}>
        <h1>{this.props.title}</h1>
        {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout
