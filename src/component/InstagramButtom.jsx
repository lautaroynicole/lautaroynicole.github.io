import React, {Component} from 'react';


export default class Footer extends Component{
    render(){
        return(<a href={"https://www.instagram.com/" + this.props.username} rel="noopener noreferrer" target="_blank" class="pl-3 pr-3"><span class="icon-instagram"></span></a>);
    }
};


