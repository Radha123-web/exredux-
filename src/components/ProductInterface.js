import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function ProductInterface() {
    const [ProductId, setProductId] = useState()
    const [ProductName, setProductName] = useState()
    const [ProductRate, setProductRate] = useState()
    const [ProductOffer, setProductOffer] = useState()
    const [ProductPicture, setProductPicture] = useState()
  
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleIconChange = (e) => {
        setProductPicture(URL.createObjectURL(e.target.files[0]))

    }
    
    const handleSubmit =() => {
        var body ={productid:ProductId, productname: ProductName, productrate:ProductRate, productoffer:ProductOffer, productpicture:ProductPicture }
        dispatch({type:"ADD_PRODUCT", payload:[ProductId,body]})
      
    }
    const handleDisplay =() =>{
       navigate ("/displayAll")

    }
    return (<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "pink" }}>
        <div style={{ padding: 20, width: "20%", borderRadius: "1px solid #dcdcdc", background: "yellow" }}>
            <Grid container spacing={2}>
                <Grid size={12} >
                    <TextField fullWidth variant="outlined" onChange={(e) => setProductId(e.target.value)} label="Product Id" />
                </Grid>
                <Grid size={12}>
                    <TextField fullWidth variant="outlined" onChange={(e) => setProductName(e.target.value)} label="Product Name" />
                </Grid>
                <Grid size={12}>
                    <TextField fullWidth variant="outlined" onChange={(e) => setProductRate(e.target.value)} label="Product Rate" />
                </Grid>

                <Grid size={12}>
                    <TextField fullWidth variant="outlined" onChange={(e) => setProductOffer(e.target.value)} label="Product Offer" />
                </Grid>
               
                <Grid size={12}>
                    <Button fullWidth startIcon={<CloudUploadIcon />} component='label' variant="contained">
                        <input onChange={handleIconChange} type="file" multiple hidden accept="image/*" />
                        Upload
                    </Button>
                </Grid>
                <Grid size={6}>
                    <Button onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
                </Grid>
                <Grid size={6}>
                    <Button onClick={handleDisplay} fullWidth variant="contained">Display</Button>
                </Grid>







            </Grid>
        </div>
    </div>)
}