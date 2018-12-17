import React from 'react'; 
import logo2 from '../images/logo2.png'; 
   class Header extends React.Component{ 
   render(){ 
     return( 
       <div className='header'> 
       <img className="logo" alt ="logo" src={logo2}/>
       <span>Demo</span>        
        </div> 
      ) 
    } 
} 
  export default Header; 
