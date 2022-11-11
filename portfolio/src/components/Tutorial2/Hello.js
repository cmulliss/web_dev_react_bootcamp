import React from 'react'

const Hello = () => {
  return (
    <div>
      <div className='ui container'>
        <h2>Headers</h2>
        <div className='ui header small'>small header</div>
        <ui className='header small'>small header</ui>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h6>h6</h6>
        <p>stuff</p>
        <hr />
        <h2>Buttons</h2>
        <div className='ui button'>Button</div>
        <div className='ui button primary'>Primary</div>
        <div className='ui button secondary'>Secondary</div>
        <div className='ui button negative'>Negative</div>
        <div className='ui button positive'>Positive</div>
        <ui className='ui button orange'>Orange</ui>
        <div className='ui button disabled'>Disabled</div>
        <div className='ui pink button loading'>Loading</div>
        <div className='ui button mini teal'>Mini teal</div>
        <br />
        <br />
        <h4>Basic buttons</h4>
        <div className='ui basic button blue'>Blue basic</div>
        <div className='ui basic fluid button red'>basic fluid red</div>
        <div className='ui green animated button'>
          <div className='visible content'>Animated button</div>
          <div className='hidden content'>
            <i className='right arrow icon'></i>
          </div>
        </div>
        <div className='ui button inverted purple'>Inverted purple</div>
        <h3>icons</h3>

        <button className='ui  icon button'>
          <i className='cloud icon'></i>
        </button>

        <h3>Labelled</h3>
        <div className='ui labeled button' tabindex='0'>
          <div class='ui button'>
            <i className='heart icon'></i> Like
          </div>
          <a Name='ui basic label'>2,048</a>
        </div>
      </div>
    </div>
  )
}

export default Hello
