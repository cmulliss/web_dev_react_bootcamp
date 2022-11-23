import React from 'react'

const Segments = () => {
  return (
    <div className='ui container'>
      <div className='ui segment'>
        <h1>Segment</h1>
      </div>
      <div className='ui raised segment'>
        <h1>Raised segment</h1>
      </div>
      <div className='ui stacked segment'>
        <h1>Stacked segment</h1>
      </div>
      <div className='ui piled segment'>
        <h1>Piled segment</h1>
      </div>
      <div className='ui segments'>
        <div className='ui segment red'>
          <h1>Segments with colours</h1>
        </div>
        <div className='ui segment green inverted'>
          <h1>Segment inverted</h1>
        </div>
        <div className='ui segment blue'>
          <h1>Segment</h1>
        </div>
      </div>
      <hr />
      <h1>Cards</h1>
      <div className='ui card'>
        <div className='content'>
          <div className='header'>content header</div>
          <div className='meta'>Meta info</div>
          <div className='content'>
            <p>This is my content</p>
          </div>
        </div>
        <div className='content extra'>
          <button className='ui blue button'>Read more...</button>
        </div>
      </div>
    </div>
  )
}

export default Segments
