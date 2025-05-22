import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import  { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PlusMinusComponent from './PlusMinusComponent';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ShowAdd from './ShowAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





export default function ProductData(){
 var product=[{Productid:"1", Productname:"pepsi 500ml",MRP:"80.00",offerprice:"50.00",productpicture:"pepsi.png"},
 {Productid:"2", Productname:"fanta 1L",MRP:"90.00",offerprice:"70.00",productpicture:"fanta.png"},
 {Productid:"3", Productname:"limca 2L",MRP:"60.00",offerprice:"40.00",productpicture:"limca.png"},
 {Productid:"4", Productname:"sprite 700ml",MRP:"70.00",offerprice:"65.00",productpicture:"sprite.png"}]


 
   return(
      
   <div>
       <Box >
        <AppBar position="fixed">
          <Toolbar sx={{ flexGrow: 1 }}>
            <img src='jio.svg'/>
            <ShowAdd />
          </Toolbar>
        </AppBar>
       <div style={{width:"98vw",display:"flex",justifyContent:"center",marginTop:50}}>
        <img src='scroller.png' style={{width:"100vw",height:'280px'}}/>
       </div>
       <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       {product.map((item)=>(
           <div style={{ margin:"5px", width:"15%",height:"350px",borderRadius:"25px",border:"2px solid #dcdcdc"}}>
               <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src={item.productpicture} style={{width:"200px",height:"200px",marginTop:"13px"}}/>   
                   </div>
                   <div style={{fontSize:"15px",color:"grey",marginLeft:"15px"}}>
               {item.Productname}
               </div>
               <div style={{display:"flex",alignItems:"center"}}>
               <div style={{fontSize:"15px",fontWeight:"bold",marginLeft:"15px"}}>
                   <div style={{display:"flex",alignItems:"center"}}>
                <CurrencyRupeeIcon style={{width:"15px"}}/>
               {item.offerprice}
               </div>
               </div>
               <div style={{fontSize:"15px",color:"grey",marginLeft:"15px"}}>
                   <s><div style={{display:"flex",alignItems:"center"}}>
                   <CurrencyRupeeIcon style={{width:"15px"}}/>
               {item.MRP}
               </div></s>
               </div>
               </div>

               <div style={{marginTop:"45px"}}>
                   
               <PlusMinusComponent product={item} />
               {/* product={item} addToCart={addToCart} removeFromCart={removeFromCart}  */}
                  
                   </div>
               </div>
              
  

       ))}
    </div>
    </Box>
   </div>)
   {/* {showCart && <CartComponent cartItems={cartItems} />} */}
   
}