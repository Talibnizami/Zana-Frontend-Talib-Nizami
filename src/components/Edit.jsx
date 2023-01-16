import React from 'react'
import { Navigate, Link } from "react-router-dom";
import imagesimple from '../Images/image.png'
import imagesimple2 from '../Images/image (1).png'
import imagesimple3 from '../Images/image (2).png'



function Edit() {


  return (
    <>
    <div  className='containermain'>
    <div className='headcontainerpot'>
  <div><h1 style={{"fontSize" : "2rem"}}      className='sdfdsfd mainheadingportdce'>Edit program exercises</h1> <Link to={'/AdminAddPrograms'} ><i class="fa-solid fa-xmark fa-2x" id='markxdsdfdsvsvdsvdsv'></i> </Link></div>
   </div>
      <div className='containerportd'>
<div className='formcontaerd'>
<p  className='text-white'>Program :</p>

    <div className='cardprogrrt'>
   <h6 className='hty'>3 dager i uken, styrke</h6>
<div className='iconsss'>
<i class="fa-solid fa-calendar-days"></i>
<i class="fa-solid fa-dumbbell"></i>
<i class="fa-solid fa-user"></i>
</div>
    </div>

  

 <div className='sharecontainer'>
<div className="leftcontainer">
<span className='colorwhi text-white '>Exercises in the program: </span>

<div className='Spillert'>

<div className='upperspitr'>
<img src={imagesimple} className="imgset" />
    <div    className= "text-white" >Chest Pres</div>
</div>
<div className='upperspitr'>
<img src={imagesimple2} className="imgset" />
    <div  className= "text-white">Lats Pulldown</div>
</div>
<div>
<img src={imagesimple3} className="imgset" />
<div className='upperspitrrtr'> 
    <h5  className= "text-white" >Hyperextention</h5>
    <div className='maccont'>
        <h6  className= "text-white" >Machine</h6>
        <div className='macdiv'>
<div className='dater'>
<span>MA</span>
<span>17</span>
</div>
<div className='daterwb'>
<span>TU</span>
<span>13</span>
</div>
<div className='dater'>
<span>WE</span>
<span>13</span>
</div>
<div className='daterwb'>
<span>TH</span>
<span>13</span>
</div>
<div className='dater'>
<span>FR</span>
<span>15</span>
</div>
<div className='daterwb'>
<span>SA</span>
<span>17</span>
</div>
<div className='dater'>
<span>SU</span>
<span>17</span>
</div>
        </div>
        {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
      
    </div>
</div>
</div>
</div>
</div>
<div className="rightcontainerss">
<span className='colorwhi  text-white'>Exercises avalible:</span>

<div className='Spillertr'>
<p className='filterbyd'>Filter by</p>
<div className='upperspilr'>
    <div>ALL</div>
    <div>Bodyweigh</div>
    <div>Dumbel</div>
    <div> Weightstac</div>
</div>

<div className='upperspitr'>
<img src={imagesimple} className="imgset" />
    <div   className= "text-white"  >  Chest Pres</div>
</div>
<div className='upperspitr'>
<img src={imagesimple2} className="imgset" />
    <div    className= "text-white"   >Lats Pulldown</div>
</div>
<div className='upperspitr'>
<img src={imagesimple3} className="imgset" />
    <div   className= "text-white"    >
Hyperextention</div>
</div>
</div>
<div style={{"display" : "flex"  , "position" : "relative", "bottom" : "30px", "left" : "-400px"}}  >
    <button  className='buttonsver'  >Save Excersice</button>
    <button id='searchc' >Cancel</button>
</div>

</div>
 </div>
</div>
</div>
  </div>     
  </>
  )
}

export default Edit