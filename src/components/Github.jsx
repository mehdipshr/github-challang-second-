
import React, { Component } from 'react';
import axios from 'axios';


class Github extends Component {
    constructor(){
        super()
        this.state = ({ 
            picture:'',
            fullName:'',
            userName:'',
            location:'',
            EmailAddress:'',

        })
    }
    componentDidMount () {
        axios.get('http://api.github.com/users/mehdipshr?client_id=9feb87019af451a837fd&client_secret=05032c35adbf757b9a5914849b83b20fc74&sort=created')
            .then((response) => {
                
                
                this.setState({
                    picture: response.data.avatar_url,
                    fullName: response.data.name,
                    userName: response.data.login,
                    location: response.data.location,
                    EmailAddress: response.data.email,
                })
            })
    }   
    render() {
        return (
            <div id='main'>
                <div id='img-section'>
                    <img src={this.state.picture} alt="pasha's-pic" />
                </div>
                
                <div id='title-section'>
                    <p className='titles'>Full name : {this.state.fullName}</p >
                    <p className='titles'>User name : {this.state.userName}</p >
                    <p className='titles'>Location : {this.state.location}</p >
                    <p className='titles'>Email Address : {this.state.EmailAddress}</p>
                </div>
                
            </div>                       
        )
    }
}

export default Github
