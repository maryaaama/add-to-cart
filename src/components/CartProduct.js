import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


export default function CartProduct(props) {

  const clickHandler = (id)=>{
      props.onRemove(id);
  }
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

      return (
        <Paper
      sx={{
        p:4,
        margin: 'auto',
        maxWidth: 2000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
        <Grid container sx={{ flexGrow: 1 }}   spacing={2} >
            <Grid item  xs={3} justifyContent="center" display="flex" lignItems="center"  >
                 <ButtonBase sx={{ width: 128, height: 128 }}>  
                  <Img alt="complex" src={props.img} />
                </ButtonBase>
            </Grid>
             
            <Grid item  xs={3} display="flex" justifyContent="center" lignItems="center" >
              <Typography gutterBottom variant="h5" component="div" style={{display:'flex' , alignItems:'center'}}>{props.name} </Typography>
            </Grid>

            <Grid item   xs={3} display="flex" justifyContent="center" lignItems="center" style={{display:'flex' , alignItems:'center'}}>
              <Typography gutterBottom variant="h5"  component="div"> ${props.price}</Typography>
            </Grid>

            <Grid item  xs={3} display="flex" justifyContent="center" lignItems="center" >
              <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>clickHandler(props.id)} > Delete</Button>
            </Grid>  

        </Grid>       
            
            </Paper>
      )
  }