import React, {Component} from 'react';
import ListCoverAlbum from './ListCoverAlbum';
import Album from './Album';
class Content extends Component{

  constructor(){
    super();
    this.changeView = this.changeView.bind(this);
  }




 state = {
   route : "/",

 }

  changeView = (route) => {
    
    this.setState({route : route}) 
  }
  render(){

    if(this.state.route == "/"){
      return (
      
        <ListCoverAlbum changeView={this.changeView}/>
        
        );
    }

    if(this.state.route == "FotosSueltas"){
      return (
      
        <Album  title = "Fotos Sueltas"
                    photos = {[{img:"images/15 Fotos Sueltas/IMG-20181111-WA0029.jpg", title:"Historia de Instagram", desc:"Es la primera selfie que subimos de nosotros juntos en instagram."},
                    {img:"images/15 Fotos Sueltas/IMG-20190428-WA0004.jpg", title:"Selfie", desc:""},
                    {img:"images/15 Fotos Sueltas/IMG-20190519-WA0001.jpg", title:"Brooklyn <3 ", desc:"Foto hermosa en el lugar más hermoso."},
                    {img:"images/15 Fotos Sueltas/IMG_20181215_201140601.jpg", title:"Agarrados de la mano", desc:"Ese día comimos papas fritas."},
                    {img:"images/15 Fotos Sueltas/IMG_20181215_201146274.jpg", title:"Agarrados de la mano", desc:"Ese día comimos papas fritas."},
                    {img:"images/15 Fotos Sueltas/IMG_20190328_211930732.jpg", title:"Primera vez en Waikiki", desc:"Supuestamente ibamos a almorzar en McDonald"}]}
                    
                    />
        
        );
    }
    if(this.state.route == "Cumple21Nicky"){
      return (
      
        <Album title = "Cumple 21 de Nicky"
                    photos = {[{img:"images/1 Tu Cumple/IMG-20180819-WA0026.jpg", title:"", desc:""},
                    {img:"images/1 Tu Cumple/IMG_20180819_005556454.jpg", title:"", desc:""}]}
                    
                    />
        
        );
    }

    if(this.state.route == "PuertoMadero"){
      return (
      
        <Album  title = "Puerto Madero"
        photos = {[{img:"images/2 Tu Fotografo/IMG_20180905_174527039.jpg", title:"", desc:""},
        {img:"images/2 Tu Fotografo/IMG_20180905_174530299.jpg", title:"", desc:""},
        {img:"images/2 Tu Fotografo/IMG_20180905_174531733.jpg", title:"", desc:""},
        {img:"images/2 Tu Fotografo/IMG_20180905_174533801.jpg", title:"", desc:""}]}
        
        />
        
        );
    }

    if(this.state.route == "Perdidos"){
      return (
      
        <Album  title = "Perdidos"
        photos = {[{img:"images/3 Perdidos/IMG_20180922_175512660.jpg", title:"", desc:""},
        {img:"images/3 Perdidos/IMG_20180922_175519712.jpg", title:"", desc:""},
        {img:"images/3 Perdidos/IMG_20180922_175521161.jpg", title:"", desc:""}]}
        
        />
        
        );
    }

    if(this.state.route == "Brooklyn"){
      return (
      
        <Album  title = "Brooklyn"
                    photos = {[{img:"images/4 Brooklyn/IMG-20180930-WA0012.jpg", title:"", desc:""},
                    {img:"images/4 Brooklyn/IMG-20180930-WA0017.jpg", title:"", desc:""},
                    {img:"images/4 Brooklyn/IMG-20190519-WA0001.jpg", title:"", desc:""},
                    {img:"images/4 Brooklyn/IMG_20180930_151251476.jpg", title:"", desc:""},
                    {img:"images/4 Brooklyn/IMG_20180930_151311193.jpg", title:"", desc:""},
                    {img:"images/4 Brooklyn/IMG_20180930_163709369_BURST000_COVER.jpg", title:"", desc:""},
                    {img:"images/4 Brooklyn/IMG_20180930_163717427.jpg", title:"", desc:""},
                    {img:"images/4 Brooklyn/IMG_20180930_163720027.jpg", title:"", desc:""},
                    {img:"images/4 Brooklyn/IMG_20180930_163730838.jpg", title:"", desc:""}
                  ]}
                    
                    />
        
        );
    }

    if(this.state.route == "PrimeraVezLlegandoTarde"){
      return (
      
        <Album  title = "Primera Vez Llegando Tarde"
                    photos = {[{img:"images/5 Primera vez llegando tarde/IMG_20181006_192737239.jpg", title:"Haciendo tiempo", desc:"Te tuve que tirar al pasto para que estes unos minutos más conmigo"},
                    {img:"images/5 Primera vez llegando tarde/IMG_20181006_192758049.jpg", title:"OLEE!!!", desc:"No te querias sacar un foto dandonos un beso."},
                    {img:"images/5 Primera vez llegando tarde/IMG_20181006_192800508.jpg", title:"VICTORIA!!!!", desc:"Consegui sacarnos una foto dandonos un beso."}]}
                    
                    />
        
        );
    }

    if(this.state.route == "PierinaManoAMano"){
      return (
      
        <Album   title = "Pierina Mano a Mano"
                        photos = {[{img:"images/6 Pierina Mano a Mano/IMG-20181014-WA0007.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG-20181014-WA0009.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG-20181014-WA0010.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG_20181014_010311133.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG_20181014_010324571.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG_20181014_033524796.jpg", title:"", desc:""}]}
                        
                        />
        
        );
    }


    if(this.state.route == "ATRPlaza"){
      return (
      
        <Album  title = "ATR En La Plaza"
                    photos = {[{img:"images/7 ATR en la plaza/IMG_20181117_180654989.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_180739690.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_180743939.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_180758763.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_180804861.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_180933735_BURST000_COVER.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_180937413.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_181051439.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_181056443.jpg", title:"", desc:""},
                    {img:"images/7 ATR en la plaza/IMG_20181117_181102101.jpg", title:"", desc:""}]}
                    
                    />
        
        );
    }


    if(this.state.route == "PrimerSemanaDeNovios"){
      return (
      
        <Album  title = "Primer Semana De Novios"
        photos = {[{img:"images/8 1 Semana de novios/IMG_20181124_155604043.jpg", title:"", desc:""},
        {img:"images/8 1 Semana de novios/IMG_20181124_155712325.jpg", title:"", desc:""},
        {img:"images/8 1 Semana de novios/IMG_20181124_155718752.jpg", title:"", desc:""},
        {img:"images/8 1 Semana de novios/IMG_20181124_155726125.jpg", title:"", desc:""},
        {img:"images/8 1 Semana de novios/IMG_20181124_160130313.jpg", title:"", desc:""}]}
        
        />
        
        );
    }


    if(this.state.route == "PrimerMesNovios"){
      return (
      
        <Album  title = "Primer Mes Con Fernet y Sandwiches De Miga"
                    photos = {[{img:"images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144257043_HDR.jpg", title:"", desc:""},
                    {img:"images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144300117.jpg", title:"", desc:""},
                    {img:"images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144301080.jpg", title:"", desc:""},
                    {img:"images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144302382_HDR.jpg", title:"", desc:""}]}
                    
                    />
        
        );
    }

    if(this.state.route == "Telo4Estrellas"){
      return (
      
        <Album title = "Habitación 4 Estrellas"
                    photos = {[{img:"images/10 Habitación 4 estrellas/IMG_20190309_195108901.jpg", title:"", desc:""},
                    {img:"images/10 Habitación 4 estrellas/IMG_20190309_195110362.jpg", title:"", desc:""},
                    {img:"images/10 Habitación 4 estrellas/IMG_20190309_195121377.jpg", title:"", desc:""},
                    {img:"images/10 Habitación 4 estrellas/IMG_20190309_195117573.jpg", title:"", desc:""},
                    {img:"images/10 Habitación 4 estrellas/IMG_20190309_195123444.jpg", title:"", desc:""}]}
                    
                    />
        
        );
    }

    if(this.state.route == "PaseoCaballito"){
      return (
      
        <Album  title = "Paseo Por Caballito"
                    photos = {[{img:"images/11 Paseo por caballito/IMG_20190413_183228658.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183435675_BURST000_COVER_TOP.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183435675_BURST001.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183446185.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183452102.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183700757.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183742288_BURST000_COVER_TOP.jpg", title:"", desc:""}]}
                    
                    />
        
        );
    }

    if(this.state.route == "AvengersEndGame"){
      return (
      
        <Album   title = "Avengers End Game"
        photos = {[{img:"images/12 Avengers EndGame/IMG_20190504_173811493.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"},
        {img:"images/12 Avengers EndGame/IMG_20190504_173822953_BURST000_COVER_TOP.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"},
        {img:"images/12 Avengers EndGame/IMG_20190504_173822953_BURST001.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"},
        {img:"images/12 Avengers EndGame/IMG_20190504_173824758.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"},
        {img:"images/12 Avengers EndGame/IMG_20190504_173825682_BURST000_COVER_TOP.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"},
        {img:"images/12 Avengers EndGame/IMG_20190504_173825682_BURST001.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"},
        {img:"images/12 Avengers EndGame/IMG_20190504_173826625.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"},
        {img:"images/12 Avengers EndGame/IMG_20190504_173827561_BURST000_COVER_TOP.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"},
        {img:"images/12 Avengers EndGame/IMG_20190504_173827561_BURST001.jpg", title:"Entrada", desc:"Foto antes de ver la peli que nos hizo llorar"}
      ]}
        
        />
        
        );
    }

    if(this.state.route == "CharlaPotenciarte"){
      return (
      
        <Album   title = "Charla Potenciarte"
                    photos = {[{img:"images/13 Charla Potenciarte/IMG-20181004-WA0056.jpg", title:"", desc:""},
                    {img:"images/13 Charla Potenciarte/IMG-20181004-WA0059.jpg", title:"", desc:""},
                    {img:"images/13 Charla Potenciarte/IMG-20181004-WA0060.jpg", title:"", desc:""},
                    {img:"images/13 Charla Potenciarte/IMG-20181004-WA0061.jpg", title:"", desc:""}]}
                    
                    />
        
        );
    }

    if(this.state.route == "CumpleAlan"){
      return (
      
        <Album title = "Cumple Alan"
                    photos = {[{img:"images/14 Cumple 14/IMG_20190526_050149359.jpg", title:"", desc:""},
                    {img:"images/14 Cumple 14/IMG_20190526_050154696.jpg", title:"", desc:"Atras se ven las cartas de juegos de mesa con los que jugaban el resto."},
                    {img:"images/14 Cumple 14/IMG_20190526_050157148.jpg", title:"", desc:""},
                    {img:"images/14 Cumple 14/IMG_20190526_050202164_BURST000_COVER.jpg", title:"", desc:""},
                    {img:"images/14 Cumple 14/IMG_20190526_050202459.jpg", title:"", desc:""},
                    {img:"images/14 Cumple 14/IMG_20190526_050229429.jpg", title:"Billy y Mandy", desc:"Te me quedabas dormida entonces te puse dibujitos para que te entretengas."}]}
                    
                    />
        
        );
    }



  }

}

export default Content;
