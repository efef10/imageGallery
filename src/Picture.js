import React from 'react';
import './Picture.css'
class Picture extends React.Component{
    render(){
        return (<img src={`${this.props.src}`} alt={""}/>)
    }
}

export default Picture;
