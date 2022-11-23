import React from 'react'

const GridSystem = () => {
  return (
    <div className='ui container'>
      <h1>16 across in grid</h1>
      <div className='ui grid'>
        <div className='row'>
          <div className='column'>
            <button className='ui huge button'></button>
          </div>
          <div className='column'>
            <button className='ui huge button'></button>
          </div>
          <div className='column'>
            <button className='ui huge button'></button>
          </div>
          <div className='column'>
            <button className='ui huge button'></button>
          </div>
        </div>
        <div className='column'>
          <button className='ui huge button'></button>
        </div>
        <div className='column'>
          <button className='ui huge button'></button>
        </div>
        <div className='column'>
          <button className='ui huge button'></button>
        </div>
        <div className='column'>
          <button className='ui huge button'></button>
        </div>
        <div className='column'>
          <button className='ui huge button'></button>
        </div>
        <div className='column'>
          <button className='ui huge button'></button>
        </div>
        <div className='column'>
          <button className='ui huge button'></button>
        </div>
        <div className='column'>
          <button className='ui huge button'></button>
        </div>
      </div>
      <hr />
      <h1>column four wide in grid</h1>
      <div className='ui grid'>
        <div className='column four wide'>
          <button className='ui huge button fluid'>fluid button</button>
        </div>
        <div className='column four wide'>
          <button className='ui huge button fluid'>fluid</button>
        </div>
        <div className='column four wide'>
          <button className='ui huge button fluid'>fluid</button>
        </div>
        <div className='column four wide'>
          <button className='ui huge button fluid'>fluid</button>
        </div>
      </div>
      <hr />
      <h1>column four eight four</h1>
      <div className='ui grid'>
        <div className='column four wide'>
          <button className='ui huge button fluid'>fluid button</button>
        </div>
        <div className='column eight wide'>
          <button className='ui huge button fluid'>fluid</button>
        </div>
        <div className='column four wide'>
          <button className='ui huge button fluid'>fluid</button>
        </div>
      </div>
      <hr />
      <h1>floated columns</h1>
      <div className='ui grid'>
        <div className='column four row'>
          <div className='left floated column four wide'>
            <button className='ui huge button fluid'>ui left floated</button>
          </div>
          <div className='right floated column four wide'>
            <button className='ui huge button fluid'>ui floated right</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridSystem
