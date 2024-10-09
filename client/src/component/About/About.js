import React, { Component } from 'react';
import Navber from '../Navber/Navber';
import { MDBContainer } from 'mdbreact';

import './About.css';
import Homeimage from '../Homeimage';
import Footer from '../Footer';

class About extends Component {
    
    render() { 
        return ( 
            <div className = "bg-dark">
                <Navber/>
                <Homeimage/>
                <br/>
                
                <br/>
                
                <h1 className="head text-white" align="center"> About Us </h1>
                <br/>
                <br/>
    

            <MDBContainer>  
            <blockquote className="blockquote">
            <p className="text-white"> CS section B Group 3
            </p>
            </blockquote>

           
            </MDBContainer> 
            
            <br>
            
            
            </br>
            <Footer/>
        
            </div>
         );
    }
}
 
export default About;