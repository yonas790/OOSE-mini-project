import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { MDBContainer } from 'mdbreact';
import Img from '../photos/hospital.jpg'

class Homeimage extends Component {
   
    render() { 
        return (
            <div>
                <Card className="text-white ">
                    <Card.Img src={Img} alt="Card image" height="500" style={{opacity:"0.6", marginTop:"55px"}}/>
                         <Card.ImgOverlay>
                            <Card.Title>
                                <MDBContainer style={{marginTop:"55px"}}>
                                    <h1 className="font-weight-bold text-secondary">Felege Hiwot Hospital</h1>
                                    <br></br>
                                    <p className="font-weight-bold text-muted color">Curing Generations for Ages</p>
                                    <h2 className='text-secondary'>By Computer Science section B Group 3 students</h2>
                                </MDBContainer>
                            </Card.Title>
                        </Card.ImgOverlay>
                </Card>
                <br /> 
                <br />
            </div> );
    }
}
 
export default Homeimage;