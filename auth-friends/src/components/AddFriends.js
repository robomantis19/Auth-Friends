import React from 'react'; 
import axiosWithAuth from '../utils/axiosWithAuth'

class AddFriends extends React.Component{

    state = {

        addFriend: {
            id: Date.now(), 
            name: "", 
            age: undefined,
            email: ""

        }
    }


    Add = e => { 
        e.preventDefault()
        axiosWithAuth()
            .post('/friends', this.state.addFriend)
            .then(res => {
                console.log("addFriend response", res)
                // localStorage.setItem('token', res.data.payload);
                // this.props.history.push('/friends');
            }).catch(err => {
                console.log('error', err)
                // this.props.history.push('/error'); 
            })
    }

    handleChange = e => {
        this.setState({
            addFriend:{
                ...this.state.addFriend, 
                [e.target.name]: e.target.value
            } 
            
        })
        
    }





    render(){
        return(

    
            <div style={{display: `flex`, flexDirection: `column`, alignItems: `space-between`, justifyContent: `space-evenly`, position: `relative`, top: `-1500`}}>
                      

                <h1>ADD to Friends List</h1>
                <form style= {{backgroundColor: `rgb(242,138,49,.50)`, position: `relative`, left: `200px`, height: `250px`, width: `200px`, display: `flex`, flexDirection: `column`, padding: `35px`}}
                >
                    <label>Name</label>
                    <input style={{margin: `auto`, width: `120px`}}
                    type = "text"
                    name = "name" 
                    value = {this.state.addFriend.name}
                    onChange = {this.handleChange}
                    /> 
                    <label>Age</label>
                    <input style={{margin: `auto`, width: `120px`}}
                    type = "text" 
                    name = "age" 
                    value = {this.state.addFriend.age}
                    onChange = {this.handleChange}
                    /> 
                    <label>Email</label>
                    <input style={{margin: `auto`, width: `120px`}}
                    type = "text" 
                    name = "email" 
                    value = {this.state.addFriend.email}
                    onChange = {this.handleChange}
                    /> 
                    <button onSubmit={this.Add} style={{margin: `auto`, width: `80px`, height: `30px`}} >Add Friend</button>
                
                </form>
            </div>

        )
    }

}

export default AddFriends;