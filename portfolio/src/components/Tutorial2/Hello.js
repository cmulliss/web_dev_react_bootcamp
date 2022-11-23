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
        <i className='add to calendar large icon'></i>
        <i className='alarm outline icon large'></i>
        <i className='browser icon large'></i>
        <i className='calender icon large'></i>

        <h3>Labelled</h3>
        <div className='ui labeled button' tabindex='0'>
          <div class='ui button'>
            <hr />
            <div>
              <i className='heart icon'></i> Like
            </div>
          </div>

          <div>
            <a Name='ui basic label'>2,048</a>
          </div>
          <br />
          <div className='ui label'>
            <i className='ui mail icon'>23</i>
          </div>
          <div className='inline field'>
            <input type='text' />
            <div className='ui left pointing label'>That username is taken</div>
          </div>
        </div>
        <h3>Breadcrumb</h3>
        <div className='ui container'>
          <div className='ui breadcrumb'>
            <a href='' className='section'>
              Home
            </a>
            <div className='divider'> / </div>
            <a href='' className='section'>
              Store
            </a>
            <div className='divider'> / </div>
            <div className='active section'>Tshirt</div>
          </div>
          <div>
            <div className='ui link list celled horizontal'>
              <div className='active items'>Home</div>
              <a href='' className='item'>
                About
              </a>
              <a href='' className='item'>
                Jobs
              </a>
              <a href='' className='item'>
                Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hello
