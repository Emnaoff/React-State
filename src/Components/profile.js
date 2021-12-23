import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';
import './profile.css'; 

export default class profile extends Component {

  constructor(props) {
    super(props);
  }
  

    render() {
        return (
            <div className="Main">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
      {this.props.bio}
    </Card.Text>
    
  </Card.Body>
</Card>
            </div>
        )
    }
}
