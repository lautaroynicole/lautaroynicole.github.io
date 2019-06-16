import React from 'react';
import { BrowserRouter, Switch, Route}  from 'react-router-dom';
import Home from './Home';
import Album from './Album';



class Router extends React.Component {
    render() {
      return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Home}/>
                
                <Route path="/fotossueltas" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Fotos Sueltas"
                    photos = {[{img:"images/15 Fotos Sueltas/IMG-20181111-WA0029.jpg", title:"Historia de Instagram", desc:"Es la primera selfie que subimos de nosotros juntos en instagram."},
                    {img:"images/15 Fotos Sueltas/IMG-20190428-WA0004.jpg", title:"Selfie", desc:""},
                    {img:"images/15 Fotos Sueltas/IMG-20190519-WA0001.jpg", title:"Brooklyn <3 ", desc:"Foto hermosa en el lugar más hermoso."},
                    {img:"images/15 Fotos Sueltas/IMG_20181215_201140601.jpg", title:"Agarrados de la mano", desc:"Ese día comimos papas fritas."},
                    {img:"images/15 Fotos Sueltas/IMG_20181215_201146274.jpg", title:"Agarrados de la mano", desc:"Ese día comimos papas fritas."},
                    {img:"images/15 Fotos Sueltas/IMG_20190328_211930732.jpg", title:"Primera vez en Waikiki", desc:"Supuestamente ibamos a almorzar en McDonald"}]}
                    
                    />
                  )}/>

                <Route path="/cumple21nicky" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Cumple 21 de Nicky"
                    photos = {[{img:"images/1 Tu Cumple/IMG-20180819-WA0026.jpg", title:"", desc:""},
                    {img:"images/1 Tu Cumple/IMG_20180819_005556454.jpg", title:"", desc:""}]}
                    
                    />
                  )}/>


                <Route path="/puertomadero" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Puerto Madero"
                    photos = {[{img:"images/2 Tu Fotografo/IMG_20180905_174527039.jpg", title:"", desc:""},
                    {img:"images/2 Tu Fotografo/IMG_20180905_174530299.jpg", title:"", desc:""},
                    {img:"images/2 Tu Fotografo/IMG_20180905_174531733.jpg", title:"", desc:""},
                    {img:"images/2 Tu Fotografo/IMG_20180905_174533801.jpg", title:"", desc:""}]}
                    
                    />
                  )}/>   


                  <Route path="/perdidos" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Perdidos"
                    photos = {[{img:"images/3 Perdidos/IMG_20180922_175512660.jpg", title:"", desc:""},
                    {img:"images/3 Perdidos/IMG_20180922_175519712.jpg", title:"", desc:""},
                    {img:"images/3 Perdidos/IMG_20180922_175521161.jpg", title:"", desc:""}]}
                    
                    />
                  )}/>    

                <Route path="/brooklyn" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Brooklyn"
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
                  )}/>  

                <Route path="/primeravezllegandotarde" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Primera Vez Llegando Tarde"
                    photos = {[{img:"images/5 Primera vez llegando tarde/IMG_20181006_192737239.jpg", title:"Haciendo tiempo", desc:"Te tuve que tirar al pasto para que estes unos minutos más conmigo"},
                    {img:"images/5 Primera vez llegando tarde/IMG_20181006_192758049.jpg", title:"OLEE!!!", desc:"No te querias sacar un foto dandonos un beso."},
                    {img:"images/5 Primera vez llegando tarde/IMG_20181006_192800508.jpg", title:"VICTORIA!!!!", desc:"Consegui sacarnos una foto dandonos un beso."}]}
                    
                    />
                    )}/>  


                    <Route path="/pierinamanoamano" 
                    render={(routeProps) => (
                        <Album {...routeProps}  title = "Pierina Mano a Mano"
                        photos = {[{img:"images/6 Pierina Mano a Mano/IMG-20181014-WA0007.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG-20181014-WA0009.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG-20181014-WA0010.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG_20181014_010311133.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG_20181014_010324571.jpg", title:"", desc:""},
                        {img:"images/6 Pierina Mano a Mano/IMG_20181014_033524796.jpg", title:"", desc:""}]}
                        
                        />
                      )}/>   
                  

                


                <Route path="/atrplaza" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "ATR En La Plaza"
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
                  )}/>


                <Route path="/primersemanadenovios" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Primer Semana De Novios"
                    photos = {[{img:"images/8 1 Semana de novios/IMG_20181124_155604043.jpg", title:"", desc:""},
                    {img:"images/8 1 Semana de novios/IMG_20181124_155712325.jpg", title:"", desc:""},
                    {img:"images/8 1 Semana de novios/IMG_20181124_155718752.jpg", title:"", desc:""},
                    {img:"images/8 1 Semana de novios/IMG_20181124_155726125.jpg", title:"", desc:""},
                    {img:"images/8 1 Semana de novios/IMG_20181124_160130313.jpg", title:"", desc:""}]}
                    
                    />
                  )}/> 

                <Route path="/primermesnovios" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Primer Mes Con Fernet y Sandwiches De Miga"
                    photos = {[{img:"images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144257043_HDR.jpg", title:"", desc:""},
                    {img:"images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144300117.jpg", title:"", desc:""},
                    {img:"images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144301080.jpg", title:"", desc:""},
                    {img:"images/9 1 Mes con Fernet y Sanguich de Miga/IMG_20181222_144302382_HDR.jpg", title:"", desc:""}]}
                    
                    />
                  )}/> 

                <Route path="/telo4estrellas" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Habitación 4 Estrellas"
                    photos = {[{img:"images/10 Habitación 4 estrellas/IMG_20190309_195108901.jpg", title:"", desc:""},
                    {img:"images/10 Habitación 4 estrellas/IMG_20190309_195110362.jpg", title:"", desc:""},
                    {img:"images/10 Habitación 4 estrellas/IMG_20190309_195121377.jpg", title:"", desc:""},
                    {img:"images/10 Habitación 4 estrellas/IMG_20190309_195117573.jpg", title:"", desc:""},
                    {img:"images/10 Habitación 4 estrellas/IMG_20190309_195123444.jpg", title:"", desc:""}]}
                    
                    />
                  )}/> 

                <Route path="/paseocaballito" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Paseo Por Caballito"
                    photos = {[{img:"images/11 Paseo por caballito/IMG_20190413_183228658.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183435675_BURST000_COVER_TOP.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183435675_BURST001.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183446185.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183452102.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183700757.jpg", title:"", desc:""},
                    {img:"images/11 Paseo por caballito/IMG_20190413_183742288_BURST000_COVER_TOP.jpg", title:"", desc:""}]}
                    
                    />
                  )}/> 

                <Route path="/avengersendgame" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Avengers End Game"
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
                  )}/> 




                  <Route path="/charlapotenciarte" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Charla Potenciarte"
                    photos = {[{img:"images/13 Charla Potenciarte/IMG-20181004-WA0056.jpg", title:"", desc:""},
                    {img:"images/13 Charla Potenciarte/IMG-20181004-WA0059.jpg", title:"", desc:""},
                    {img:"images/13 Charla Potenciarte/IMG-20181004-WA0060.jpg", title:"", desc:""},
                    {img:"images/13 Charla Potenciarte/IMG-20181004-WA0061.jpg", title:"", desc:""}]}
                    
                    />
                  )}/> 

                <Route path="/cumplealan" 
                render={(routeProps) => (
                    <Album {...routeProps}  title = "Cumple Alan"
                    photos = {[{img:"images/14 Cumple 14/IMG_20190526_050149359.jpg", title:"", desc:""},
                    {img:"images/14 Cumple 14/IMG_20190526_050154696.jpg", title:"", desc:"Atras se ven las cartas de juegos de mesa con los que jugaban el resto."},
                    {img:"images/14 Cumple 14/IMG_20190526_050157148.jpg", title:"", desc:""},
                    {img:"images/14 Cumple 14/IMG_20190526_050202164_BURST000_COVER.jpg", title:"", desc:""},
                    {img:"images/14 Cumple 14/IMG_20190526_050202459.jpg", title:"", desc:""},
                    {img:"images/14 Cumple 14/IMG_20190526_050229429.jpg", title:"Billy y Mandy", desc:"Te me quedabas dormida entonces te puse dibujitos para que te entretengas."}]}
                    
                    />
                  )}/> 

            </Switch>
        </BrowserRouter >
      );
    }
  }


export default Router;