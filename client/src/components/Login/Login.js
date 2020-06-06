import React from 'react';

export default (props) => {
    return (
        <div>
            <form method='post'>
                <fieldset className='loginArea'>
                <label for='loginUsernameId'>Username</label>
                <input type='text' name='loginUsername' id='loginUsernameId' className='typeBoxes'></input>
                <label for='loginPasswordId'>Password</label>
                <input type='password' name='loginPassword' id='loginPasswordId' className='typeBoxes'></input>
                <input type='submit' value='submity' className='submitButton'></input>
                </fieldset>
            </form>
        </div>
    )
}