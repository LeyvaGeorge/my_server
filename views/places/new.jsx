const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>New Pup</h1>
                <form method="POST" action="/places">
                    <div className='form-group'>
                        <label htmlFor="name">Pup's Name</label>
                        <input className='form-control'id="name" name = "name" required/>
                    </div>
                    <div className = 'form-group'>
                        <label htmlFor="pic">Picture URL</label>
                        <input className='form-control'type="url" id="pic" name="pic" />
                    </div>
                    <div className = 'form-group'>
                        <label htmlFor="city">City</label>
                        <input className='form-control'id="city" name = "city" />
                    </div>
                    <div className = 'form-group'>
                        <label htmlFor="state">State</label>
                        <input className='form-control'id="state" name = "state" />
                    </div>
                    <div className = 'form-group'>
                        <label htmlFor="breed">Breed</label>
                        <input className='form-control'id="breed" name = "breed" required/>
                    </div>
                    <br></br>
                    <div>
                        <input className='btn btn-primary' type="submit" value='New Pup'/>
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form