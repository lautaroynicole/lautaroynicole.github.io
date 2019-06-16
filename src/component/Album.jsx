
import React, {Component} from 'react'
import MenuMobile from './MenuMobile'
import Header from './Header'

import Footer from './Footer'

class Album extends Component {
    render(){
      return(
        <div className="site-wrap">
        <MenuMobile/>
        <Header/>
        <div class="site-section"  data-aos="fade">
        <div class="container-fluid">
          
          <div class="row justify-content-center">
            
            <div class="col-md-7">
              <div class="row mb-5">
                <div class="col-12 ">
                  <h2 class="site-section-heading text-center">{this.props.title}</h2>
                </div>
              </div>
            </div>
        
          </div>
          <div class="row" id="lightgallery">
          {this.props.photos.map(item => (
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src={item.img} data-sub-html={"<h4>"+item.title+"</h4><p>"+item.desc+"</p>"}>
            <a href="#"><img src={item.img} alt="IMage" class="img-fluid"/></a>
          </div>
          ))}
          </div>
        </div>
      </div>
        <Footer/>
      </div>
        
        
      ) ;
    }
  }
  
  export default Album;
  