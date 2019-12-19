import React from 'react'; 

import { axiosWithAuth } from '../utils/axiosWithAuth'; 
import emailArrow from '../img/emailArrow.svg'; 
import power from '../img/power.png';

class Login extends React.Component { 
    state = {

        credentials: {
            username: "", 
            password: ""
        },
        isFetching: false
    }

    login = e => { 
        e.preventDefault()
        this.setState({
            isFetching: true
        })
        console.log("credentials", this.state.credentials)
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                console.log("response", res)
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friends');
            }).catch(err => {
                console.log('error', err)
                this.props.history.push('/error'); 
            })
    }
    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            } 
            
        })
        console.log(this.state.credentials)
    }

    render() {
        return (
            <div>
                <h2 style={{color: 'darkOrange', fontWeight: "bold"}}>Login 🈴️</h2>
               
                <form style= {{zIndex: `100`, backgroundColor: `lightGrey`, position: `relative`, left: `200px`, height: `250px`, width: `200px`, display: `flex`, flexDirection: `column`, padding: `35px`}}onSubmit={this.login}>
                    <label>Username</label>
                    <input style={{margin: `auto`, width: `120px`}}
                    type = "text"
                    name = "username" 
                    value = {this.state.credentials.username}
                    onChange = {this.handleChange}
                    /> 
                    <label>Password</label>
                    <input style={{margin: `auto`, width: `120px`}}
                    type = "text" 
                    name = "password" 
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange}
                    /> 
                    <button style={{margin: `auto`, width: `80px`, height: `30px`}} >Log in</button>
                    {this.state.isFetching && "logging in"}
                </form>
                <img style = {{position: `relative`, top: `-350px`, left: `200px`, width: `200px`}} src={power}/> 
                <div style = {{display: `flex` , justifyContent: `center`}}>
                
                
                </div>
                <img style ={{position: `relative`, top: `-500px`,  width: `35%`}}src = {emailArrow} /> 
                
            </div>
        )
    }
}

export default Login; 