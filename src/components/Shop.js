import * as React from 'react'
import  { useState } from 'react'
import Product from './Product'
import Navbar from '../Navbar'
import Grid from '@mui/material/Unstable_Grid2';
import CartProduct from './CartProduct';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Social from './Social';
import Container from '@mui/material/Container';

export default  function Shop (){


    const[Products,setProducts]=useState([
        {id:1 , name:'کوارتز' , price:100 ,img:'img/1.jpg' },
        {id:2 , name:'آمیتیست' , price:100 ,img:'img/2.jpg' },
        {id:3, name:'یاقوت کبود' , price:100 ,img:'img/3.jpg' },
        {id:4 , name:'کهربا' , price:100 ,img:'img/4.jpg' },
        {id:5 , name:'رزکوارتز' , price:100 ,img:'img/5.jpg' },
        {id:6 , name:'توپاز' , price:100 ,img:'img/6.jpg' },
        {id:7 , name:'زبرجد' , price:100 ,img:'img/7.jpg' },
        {id:8 , name:'گارنت' , price:100 ,img:'img/8.jpg' },
    ])
    const [shopingCarts,setShopingCarts] = useState([])
    const [ socials, setSocials]=useState([

    ]) 
    
    const removeCart = (productId)=>{
      let removeIdCart = shopingCarts.filter(product=>{
        return productId !== product.id  
        })
      
        setShopingCarts(removeIdCart)
 
     }
     const addCart = (productId)=>{
      let cartFind = Products.find ( product => {
        return product.id === productId
    })
    
    setShopingCarts(prevState =>{
    return [...prevState,cartFind]
  })
     }
      
    return(
        <div >
          <Navbar></Navbar>
            <Grid container spacing={4} columns={16} display="flex" justifyContent="center" lignItems="center" style={{margin:0}}>
           {Products.map((product,index) => (
            <Grid key={index} xs={8} display="flex" justifyContent="center" alignItems="center" style={{width: 'calc(100% * 6/ var(--Grid-columns))'}} >
            <Product key={index} {...product} addToCartProduct={addCart}/>
            </Grid>)
            ) }
           </Grid> 
           <Container style={{marginTop:'50px'}}>
           <Stack spacing={4} style={{display:'flex' , alignItems:'center' , justifyContent:'center'}} >
          <Typography variant="h2" gutterBottom>سبد خرید</Typography>
          
         {shopingCarts.map((shopingCart,index)=>( <CartProduct {...shopingCart} key={index} onRemove={removeCart} ></CartProduct>))}   
         </Stack>
         </Container>
         <Container style={{marginTop:'50px' }}>
          <Social></Social>
          </Container>
        </div>
       
        )
    }   
    
    