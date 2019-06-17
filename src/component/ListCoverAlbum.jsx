import React, {Component} from 'react';
import CoverAlbum from './CoverAlbum';

class ListCoverAlbum extends Component {



  render(){
    return(
        <div class="container-fluid" data-aos="fade" data-aos-delay="500">
      <div class="swiper-container images-carousel">
          <div class="swiper-wrapper">
          
            <CoverAlbum title="Fotos Sueltas" route="FotosSueltas" image="images/15 Fotos Sueltas/IMG-20190519-WA0001.jpg"  changeView={this.props.changeView}/>
            
            <CoverAlbum title="Cumple 21 de Nicky" route="Cumple21Nicky" image="images/1 Tu Cumple/IMG-20180819-WA0026.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Puerto Madero" route="PuertoMadero" image="images/2 Tu Fotografo/IMG_20180905_174527039.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Perdidos" route="Perdidos" image="images/3 Perdidos/IMG_20180922_175512660.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Brooklyn" route="Brooklyn" image="images/4 Brooklyn/IMG-20180930-WA0012.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Primera Vez Llegando Tarde" route="PrimeraVezLlegandoTarde" image="images/5 Primera vez llegando tarde/IMG_20181006_192758049.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Pierina Mano a Mano" route="PierinaManoAMano" image="images/6 Pierina Mano a Mano/IMG-20181014-WA0010.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="ATR En La Plaza" route="ATRPlaza" image="images/7 ATR en la plaza/IMG_20181117_180804861.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Primer Semana De Novios" route="PrimerSemanaDeNovios" image="images/8 1 Semana de novios/IMG_20181124_155726125.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Primer Mes Con Fernet y Sandwiches De Miga" route="PrimerMesNovios" image="images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144257043_HDR.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Habitación 4 Estrellas" route="Telo4Estrellas" image="images/10 Habitación 4 estrellas/IMG_20190309_195121377.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Paseo Por Caballito" route="PaseoCaballito" image="images/11 Paseo por caballito/IMG_20190413_183446185.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Avengers End Game" route="AvengersEndGame" image="images/12 Avengers EndGame/IMG_20190504_173822953_BURST001.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Charla Potenciarte" route="CharlaPotenciarte" image="images/13 Charla Potenciarte/IMG-20181004-WA0061.jpg"  changeView={this.props.changeView}/>
            <CoverAlbum title="Cumple Alan" route="CumpleAlan" image="images/14 Cumple 14/IMG_20190526_050202459.jpg"  changeView={this.props.changeView}/>
          </div>

          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
      </div>
  </div>
    ) ;
  }
}

export default ListCoverAlbum;
