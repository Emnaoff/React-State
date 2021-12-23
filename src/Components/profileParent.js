import React, { Component } from 'react';
import Profile from './profile';
import MyProfile from './profile.png';

export default class ProfileParent extends Component {
    
    constructor(props) {
        super(props);

        this.setState((state, props) => ({
            counter: state.counter + props.increment
          }));

        this.state = {
            name:"Emna",
            bio: "I am learning how to develop Websites",
            image:MyProfile,
            Show:false,
            clock:0
            
            
            
        }
    }

    toggleButton =() => {
        this.setState({Show: !this.state.Show})
    }
   
   
    
    render() {
        return (
            <div>
               <br/>
               <br/>
                <button variant="Switch" onClick= { ()=>this.toggleButton () }> {this.state.Show ? "click to hide" : "click to show" }</button>
                 {this.state.Show ?  <Profile name={this.state.name} bio={this.state.bio} image={this.state.image}  /> : null}   
                
                
                  
            </div>
        )
    }
}
