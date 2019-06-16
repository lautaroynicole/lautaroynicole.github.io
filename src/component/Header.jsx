import React, {Component} from 'react';
import InstagramButtom from './InstagramButtom';

class Header extends Component{
  render(){
    return (<header class="site-navbar py-3" role="banner">

    <div class="container-fluid">
      <div class="row align-items-center">
        
        <div class="col-6 col-xl-4" data-aos="fade-down">
          <h1 class="mb-0"><a href="/" class="text-black h2 mb-0">Lautaro y Nicole</a></h1>
        </div>
        <div class="col-10 col-md-4 d-none d-xl-block" data-aos="fade-down">
          <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">

            <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
              <li><a href="/">Home</a></li>
            </ul>
          </nav>
        </div>

        <div class="col-4 col-xl-4 text-right" data-aos="fade-down">
          <div class="d-none d-xl-inline-block">
            <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
              <li>
                <InstagramButtom username="naniitevez"/>
              </li>
              <li>
                <InstagramButtom username="lauchacarro"/>
              </li>
            </ul>
          </div>

          <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: "relative", top: 3 + "px"}}><a href={"#"} class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

        </div>

      </div>
    </div>
    
  </header>);
  }
};


export default Header;