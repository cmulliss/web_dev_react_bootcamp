import React from 'react'

const SemanticIcons = () => {
  return (
    <div>
      <h2>Semantic Icons: Font Awsome</h2>
      <div className='ui container'>
        <h3>massive red bug</h3>
        <i className='bug icon massive red'></i>
        <i className='paypal icon massive blue'></i>
        <i className='uk flag'>UK</i>
      </div>
      <h3>Forms</h3>
      <div className='ui container'>
        <div className='ui input'>
          <input type='text' placeholder='normal' />
        </div>
        <div className='ui large input'>
          <input type='text' placeholder='large' />
        </div>
        <div className='ui massive input'>
          <input type='text' placeholder='massive' />
        </div>
        <h3>Labelled input</h3>
        <div className='ui labeled input'>
          <div className='ui label pink'>
            <i>£</i>
          </div>
          <input type='text' placeholder='mini labelled input' />
          <div className='ui label basic'>.00</div>
        </div>
        <h3>Icon input</h3>

        <div className='ui left icon input'>
          <input type='text' placeholder='search' />
          <i className='search icon'></i>
        </div>
        <div className='ui input right labeled left icon'>
          <i className='tag icon brown'></i>
          <input type='text' placeholder='Enter tags' />
          <a className='ui tag label brown'></a>
        </div>
        <h3>Menu</h3>
        <h2>Fixed moves menu to top</h2>
        <h2>can also use vertical menu</h2>
        <div className='ui fixed menu'>
          <div className='item'>
            <a href=''>Home</a>
          </div>
          <div className='item'>About</div>
          <div className='item'>Contact Us</div>
          {/* can only have one right item, so use right menu */}
          <div className='right menu'>
            <div className='ui transparent left icon input'>
              <input type='text' placeholder='search' />
              <i className='search icon' />
            </div>
            <div className='item'>Register</div>
            <div className='item'>Login</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SemanticIcons
