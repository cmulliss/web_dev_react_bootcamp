import React from 'react'

const Semantic = () => {
  return (
    <div className='ui container'>
      <h1>Title</h1>
      <h3>More stuff</h3>
      <div className='ui primary button massive'>Primary massive</div>
      <div className='ui secondary button mono'>Secondary mini</div>
      <p>
        <div className='ui animated button green'>
          <span className='visible content'>Animated -></span>
          <span className='hidden content'>Yes click here!</span>
        </div>
      </p>

      <h3>Ghost button</h3>
      <p>
        <span className='ui basic button'>Basic</span>
      </p>
      <span className='ui buttons'>
        <span className='ui button red'>One</span>
        <span className='or'>or</span>
        <span className='ui button blue'>Two</span>
      </span>
      <p>
        <span className='ui facebook button'>Facebook</span>
        <span className='ui twitter button'>Twitter</span>
        <span className='ui instagram button'>Instagram</span>
        <span className='ui github button black'>GitHub</span>
        <span className='ui youtube button'>YouTube</span>
      </p>
      <p>
        <span className='ui basic green button'>basic green</span>
        <span className='ui green button'>green</span>
      </p>

      <h3>ui massive buttons</h3>
      <p>
        <span className='ui massive buttons'>
          <span className='ui red button'>Red</span>
          <span className='or'></span>
          <span className='ui blue button basic'>Blue basic</span>
          <span className='or'></span>
          <span className='ui green button'>Green</span>
        </span>
      </p>
    </div>
  )
}

export default Semantic
