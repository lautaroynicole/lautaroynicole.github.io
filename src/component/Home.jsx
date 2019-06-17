import React, {Component} from 'react';

import MenuMobile from './MenuMobile'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

class Home extends Component {

  render(){
    return(
      <div className="site-wrap">
        <MenuMobile/>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    ) ;
  }
}

export default Home;
