import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        <div className="wrapper">
        <SayFullName name="Ivan" lastname="Ivanov" link="govno.com" />
        <SayFullName name="Pavel" lastname="Semenov" link="vk.com/samfisher" />
        </div>
      
    );
  }
}

function SayFullName(props) {
  return(
    <div>
    <h1> My first name is {props.name} and last name is {props.lastname} </h1>
    <a href={props.link}> link on my bio </a>
    </div>

    )

}



export default App;
