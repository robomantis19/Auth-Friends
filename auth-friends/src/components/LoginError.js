import React from 'react'; 
import unlocked from '../img/unlocked.png'; 


const LoginError = () => { 



    return (
        <div style ={{position: `relative`, top: `200px`}}>
            <h2>There was a login Error</h2>
            <img style = {{width: `50px`}} src={unlocked}/>
        </div>
    )
}

export default LoginError;