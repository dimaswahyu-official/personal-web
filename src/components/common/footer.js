import React from 'react';
import image from "../../assets/images/logodw.png";
import {BackTop} from "antd";

function AppFooter(){
    return(
      <div className="container-fluid">
          <div className="footer">
              <div className="logo">
                  <img alt="logo" src={image} height="60" width="65"/>
              </div>
              <ul className="socials">
                  <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.linked.in"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
              </ul>
              <div className="copyright">copyright &copy; 2020 dw|dev</div>
              <BackTop>
                  <div className="goTop">
                      <i className="fas fa-arrow-circle-up"></i>
                  </div>
              </BackTop>

          </div>

      </div>
    );

}

export default AppFooter;