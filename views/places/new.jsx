const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className="alert-danger">
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
            <h1>Add a New Place</h1>
            {message}
            <br/>
            <form  action = "/places" method = "POST">
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    {message}
                    <input className='form-control' type="text" id="name" name="name" required/>
                </div>
                
                <div className = 'form-group'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' type="text" id="city" name="city" />
                </div>

                <div className = 'form-group'>
                    <label htmlFor="state">State</label>
                    <input className='form-control' type="text" id="state" name="state" />
                </div>

                <div className = 'form-group'>
                    <label htmlFor="breed">Cuisines</label>
                    <input className='form-control' type="text" id="breed" name="breed" required/>
                </div>

                <div className = 'form-group'>
                    <label htmlFor="pic">Picture URL</label>
                    <input className='form-control'type="url" id="pic" name="pic" />
                </div>

                <div className="form-group">
                    <label htmlFor="founded">Founded Year</label>
                    <input type = "number" className="form-control" id="founded" name="founded" value={new Date().getFullYear()}/>
                </div>

                <div>
                    <input className='btn btn-primary' type="submit" value='New Pup'/>
                </div>
            </form>
        </Def>
    )
}

module.exports = new_form