import React from 'react'; 
import axiosWithAuth from '../utils/axiosWithAuth'

class RemoveFriends extends React.Component{

    state = {

        removeFriend: {
            id: undefined, 
            

        }
    }


    AddOne = e => { 
        e.preventDefault()
        this.props.setUpdate(true)
        axiosWithAuth()
            .delete(`/friends/${this.state.removeFriend.id}`)
            .then(res => {
                console.log("addFriend response", res)
                
            }).catch(err => {
                console.log('error', err)
                 
            })
    }

    handleChange = e => {
        this.setState({
            removeFriend:{
                ...this.state.removeFriend, 
                [e.target.name]: e.target.value
            } 
            
        })
        
    }





    render(){
        return(

    
            <div style={{display: `flex`, flexDirection: `column`, alignItems: `space-between`, justifyContent: `space-evenly`, position: `relative`, top: `-1500`}}>
                      
                <div>
                <h1 style = {{marginLeft: `150px`}}>Remove Friend</h1>
                <form  style={{backgroundColor: `rgb(242,138,49,.50)`, position: `relative`, left: `200px`, height: `250px`, width: `200px`, display: `flex`, flexDirection: `column`, padding: `35px`}} onSubmit={this.AddOne}
                >
                    <label>Remove by Id</label>
                    <input style={{margin: `auto`, width: `120px`}}
                    type = "text"
                    name = "id" 
                    value = {this.state.removeFriend.id}
                    onChange = {this.handleChange}
                    /> 
                    
                    <button  style={{margin: `auto`, width: `80px`, height: `30px`}} >Remove Friend</button>
                
                </form>
                </div>
            </div>

        )
    }

}

export default RemoveFriends;