import React from 'react'

const Grid = () => {
  return (
    <div className='ui container'>
      <h2>Grid</h2>
      <p>columns</p>
      <div className='ui three column grid'>
        <div className='column'>
          <div className='ui segment'>segment inside grid </div>
        </div>
        <div className='column'>
          <div className='ui segment'>segment inside grid </div>
        </div>
        <div className='column'>
          <div className='ui segment'>segment inside grid </div>
        </div>
      </div>
      <div className='ui container'>
        <h2>Grid</h2>
        <p>Rows</p>
        <div className='ui relaxed grid'>
          <div className='two column row'>
            <div className='column'>
              <div className='ui segment'></div>
            </div>
            <div className='column'>
              <div className='ui segment'></div>
            </div>
            <div className='column'>
              {/* <div className='ui segment'></div>
            </div>
            <div className='column'>
              <div className='ui segment'></div>
            </div>
            <h3>Grids in grids, including equal columns</h3>
            <div className='ui container'>
              <div className='ui three column grid'>
                <div className='black column'></div>
                <div className='teal column'></div>
                <div className='column'>
                  <div className='ui equal width grid'>
                    <div className='red column'></div>
                    <div className='green column'></div>
                    <div className='orange column'></div>
                  </div> */}

              <h3>Responsive stackable</h3>

              <div className='ui tablet only equal width grid stackable'>
                <div className='red column'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                <div className='green column'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                <div className='orange column'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  )
}

export default Grid
