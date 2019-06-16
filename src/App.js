import React, {Component} from 'react';

import MenuMobile from './component/MenuMobile'
import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/Content'


class App extends Component {
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

export default App;
