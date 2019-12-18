import React, {useEffect, useState} from 'react'; 
import home from '../img/home.svg'; 
import { axiosWithAuth } from '../utils/axiosWithAuth'; 
import AddFriends from './AddFriends';

const Friends = () => { 
    
    const [friendlist, setFriendList] = useState([]); 

    const fetchData = () => { 
        axiosWithAuth().get(`/friends`)
        .then(res => { 
            console.log('response of friends', res.data) 
            setFriendList(res.data)
        }).catch(err => { 
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
        
    },[])

    const handleChange = e => { 
        return e.target.value;
    }

    
    

        return (
            <div style={{height: `2500px` }}>
                <div style = {{display: `flex`, width:`80%`, justifyContent: `space-around`, position: `relative`, top: `-80px`, left: `400px`}}>
                    <h1>Friends</h1>
                    <img src={home}/> 
                

                </div>
                <div>
                    <div style={{display: `flex`, flexDirection: `column`, justifyContent: `center`, width: `400px`, height: `150px`, position: `relative`,Zindex: `2`, top: `50px`, backgroundColor: `#8AB089`}}><h2 style={{color: `white`}} >Hello there, Meet my Friends!</h2></div>
                    
                    <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `center`, width: `400px`, height: `150px`, position: `relative`, Zindex: `-2`, top: `-200px`, left: `340px`,backgroundColor: `rgb(242,138,49,.50)`}}><h2 style={{color: `white`}}>Add And Remove</h2></div>
                </div>
                <div style={{width: `100%`}}>

                    <div style={{display: `flex`, flexDirection: `column`}}>
                        <h1>Friends List</h1>
                        {friendlist.map(item => { 
                            return(
                                <div key={item.id} style={{ borderBottom: `5px solid darkOrange`, color: `white`,  display: `flex`, flexDirection: `column`, justifyContent: `space-between`, width: `400px`,  backgroundColor: `#8AB089`}}>
                                    <h2 >Name: {item.name}</h2>
                                    <h2 >Age: {item.age}</h2>
                                    <h2 >Email: {item.email}</h2>
                                </div>
                            )
                        })}
                    </div>

                    
                    
                        <AddFriends/>
                    
                </div>
                
            </div>
        )
    }


export default Friends; 