import React, { Component } from 'react';
import Navber from './AdminNavbar';
import { MDBContainer } from 'mdbreact';

import Homeimage from '../Homeimage';
import Footer from '../Footer';

class AdminAbout extends Component {
    
    render() { 
        return ( 
            <div className = "bg-dark">
                <Navber/>
                <Homeimage/>

                <br>
                
                </br>
                <br>
                
                </br>
                <h1 className="head text-white" align="center"> About Us </h1>
                <br>
                
                </br>
                <br>
                
                </br>

            <MDBContainer>  
            <blockquote className="blockquote">
            <p className="text-white">  Felege Hiwot Hospital is the premier healthcare provider of Bahir Dar Ethiopia. 
            Felege Hiwot Referral Hospital (FHRH) is situated in Bahir Dar in the Amhara region of Northern Ethiopia and serves as a regional referral hospital to 7 million people. FHRH has 400 beds and over 800 members of staff employed by the Hospital and associated University of Bahir Dar (BDU). FHRH faces a number of challenges typical to a low resource setting serving a high population from a broad geographical area.
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
 
export default AdminAbout;