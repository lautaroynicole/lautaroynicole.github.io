import React, {Component} from 'react';

class CoverAlbum extends Component {
  render(){
    return(
        <div class="swiper-slide">
            <div class="image-wrap">
                <div class="image-info">
                    <h2 class="mb-3">{this.props.title}</h2>
                    <a  href={this.props.route} class="btn btn-outline-white py-2 px-4">Más Fotos</a >
                </div>
                <img src={this.props.image}  alt="Image"/>
            </div>
        </div>
    ) ;
  }
}

export default CoverAlbum;
