import React, { Component } from 'react';

class Footer extends Component {
    
    render() { 
        return (   
          <footer className="page-footer font-small   pt-4 default-color-white">
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">             
                  <h5 className="text-uppercase font-weight-bold">Contact us:</h5>
                  <p>Email: yoni2752@gmail.com</p>
                  <p>Phone no: +251953231470</p>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3"/>
                <div className="col-md-6 mb-md-0 mb-3">
                  <h5 className="text-uppercase font-weight-bold">Address:</h5>
                  <p> Bahir Dar Ethiopia</p>
                </div>
              </div>
            </div>
            <div className="footer-copyright text-center py-3 default-color-dark">© 2024 Copyright:
              <span> felegehiwothospital.com</span>
            </div>
          </footer> );
    }
}
 
export default Footer;