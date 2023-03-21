//This page is the root Home Page
const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>

              <a href="/places/new">
                <button className='btn-primary'>New</button>
              </a>
              <a href="/places">
                <button className="btn-primary">Places</button>
              </a>
              
              <div>
                <img src="https://place-puppy.com/300x300" alt="Puppy" />
                <div>
                  <p>This a place holder for reference</p>
                </div>
              </div>
              
          </main>
      </Def>
    )
  }
  

module.exports = home
