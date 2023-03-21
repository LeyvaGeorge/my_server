const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form  action = {`/places/${data.place.id}?_method=PUT`} method = "POST">
                <div className='form-group'>
                    <label htmlFor="name">Pup's Name</label>
                    <input className='form-control col-sm-6' type="text" id="name" name="name" value={data.place.name} required/>
                </div>
                
                <div className = 'form-group'>
                    <label htmlFor="city">City</label>
                    <input className='form-control col-sm-6' type="text" id="city" name="city" value={data.place.city}/>
                </div>

                <div className = 'form-group'>
                    <label htmlFor="state">State</label>
                    <input className='form-control col-sm-6' type="text" id="state" name="state" value={data.place.state}/>
                </div>

                <div className = 'form-group'>
                    <label htmlFor="breed">Breed</label>
                    <input className='form-control col-sm-6' type="text" id="breed" name="breed" value={data.place.breed} required/>
                </div>

                <div className = 'form-group'>
                    <label htmlFor="pic">Picture URL</label>
                    <input className='form-control col-sm-6'type="url" id="pic" name="pic" value={data.place.pic}/>
                </div>

                <div>
                    <input className='btn btn-primary' type="submit" value='New Pup'/>
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
