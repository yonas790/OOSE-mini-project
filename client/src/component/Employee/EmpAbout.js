import React, { Component } from 'react';
import Navber from './EmpNavbar';
import { MDBContainer } from 'mdbreact';

import Homeimage from '../Homeimage';
import Footer from '../Footer';

class EmpAbout extends Component {
    
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
            <p className="text-white"> 
                Felege Hiwot Referral Hospital (FHRH) is situated in Bahir Dar in the Amhara region of Northern Ethiopia and serves as a regional referral hospital to 7 million people. FHRH has 400 beds and over 800 members of staff employed by the Hospital and associated University of Bahir Dar (BDU). FHRH faces a number of challenges typical to a low resource setting serving a high population from a broad geographical area.

                The Soapbox Collaborative is a research-based charity focussed on prevention of healthcare associated infections, which works with research groups, NGOs, and health facilities in 7 countries in Africa and Asia. The Soapbox Collaborative formed a partnership with FHRH in 2014.

                In 2015, University of Aberdeen (UoA) and FHRH collaborated on a Johnson & Johnson funded one year quality improvement project to improve high risk obstetric care. This included training of trainers in obstetric emergencies and neonatal resuscitation, piloting the WHO safe childbirth checklist, and support with improving peri-operative obstetric case management through the WHO surgical safety checklist, improved recovery facility and introducing a modified maternal early warning score system. These interventions were met positively by staff and the early warning system was found to improve monitoring of mothers and earlier detection of complications. The WHO Safe Childbirth checklist remains in regular use and our experience was shared at a recent WHO meeting on the topic, as we were one of 34 worldwide sites to pilot the checklist, and the Ministry of Health were in attendance and are rolling out the checklist to other facilities nationally.
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
 
export default EmpAbout;