import React, { Component } from 'react'
//import Semantic from './SemanticIcons'

import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
class App extends Component {
  state = {
    displayBio: false
  }

  toggleDisplayBio = () => {
    this.setState({
      displayBio: !this.state.displayBio
    })
  }

  render() {
    return (
      <div className='ui container'>
        <h1>Hello!</h1>
        <p>My name is Cherry. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Somerset in the UK, and code nearly every day.</p>
            <p>My favourite language in Javascript, and I think React.js is awesome.</p>
            <p>Besides coding I also love getting out in the countryside and visiting coffee shops!</p>
            <button className='ui primary button' onClick={this.toggleDisplayBio}>
              Show less...
            </button>
          </div>
        ) : (
          <button className='ui primary button' onClick={this.toggleDisplayBio}>
            Read more...
          </button>
        )}

        <Projects />
        <SocialProfiles />
      </div>
    )
  }
}
export default App
