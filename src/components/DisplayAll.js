import { useSelector } from "react-redux";
import MaterialTable from "@material-table/core";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dialog,DialogContent } from "@mui/material";
import { useState } from "react";
export default function DisplayAll(){
    const product= useSelector((state)=>state.data)
    const productData=Object.values(product)
    const [open,setOpen]= useState(false)
    const [ProductId, setProductId] = useState()
    const [ProductName, setProductName] = useState()
    const [ProductRate, setProductRate] = useState()
    const [ProductOffer, setProductOffer] = useState()
    const [ProductPicture, setProductPicture] = useState()
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleSubmit =() => {
      var body ={productid:ProductId, productname: ProductName, productrate:ProductRate, productoffer:ProductOffer, productpicture:ProductPicture };
      dispatch({type:"EDIT_PRODUCT", payload:[ProductId,body]})
    
  }
  const handleDialog =(rowData) =>{
  setProductId(rowData.productid)
  setProductName(rowData.productname)
  setProductRate(rowData.productrate)
  setProductOffer(rowData.productoffer)
  setProductPicture(rowData.productpicture)
  setOpen(true)

 }
 const handleClose =() =>{
setOpen(false)

}
const handleDelete =() =>{
  dispatch({type:"DELETE_PRODUCT",payload:[ProductId]});
  
  };
  

    function showDialog(){
      return(
      <Dialog open={open}>
        <DialogContent>
 
        <div style={{ padding: 20, width: "90%", borderRadius: "1px solid #dcdcdc", background: "yellow" }}>
            <Grid container spacing={2}>
                <Grid size={12} >
                    <TextField fullWidth variant="outlined" onChange={(e) => setProductId(e.target.value)}  value={ProductId}label="Product Id" />
                </Grid>
                <Grid size={12}>
                    <TextField fullWidth variant="outlined" onChange={(e) => setProductName(e.target.value)}  value={ProductName}label="Product Name" />
                </Grid>
                <Grid size={12}>
                    <TextField fullWidth variant="outlined" onChange={(e) => setProductRate(e.target.value)}  value={ProductRate}label="Product Rate" />
                </Grid>

                <Grid size={12}>
                    <TextField fullWidth variant="outlined" onChange={(e) => setProductOffer(e.target.value)} value={ProductOffer} label="Product Offer" />
                </Grid>
               
                {/* <Grid size={12}>
                    <Button fullWidth startIcon={<CloudUploadIcon />} component='label' variant="contained">
                        <input onChange={handleIconChange} type="file" multiple hidden accept="image/*" />
                        Upload
                    </Button>
                </Grid> */}
                <Grid size={4}>
                    <Button onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
                </Grid>
                <Grid size={4}>
                    <Button onClick={handleDelete} fullWidth variant="contained">Delete</Button>
                </Grid>

                <Grid size={4}>
                    <Button onClick={handleClose} fullWidth variant="contained">Close</Button>
                </Grid>
               






            </Grid>
        </div>

        </DialogContent>
      </Dialog>
      )
    }

    function showProducts() {
        return (
          <MaterialTable
            title=" List Products"
            columns={[
              { title: 'Id', field: 'productid' },
                { title: 'Name', field: 'productname' },
                { title: 'Rate', field: 'productrate' },
                { title: 'Offer', field: 'productoffer' }, 
                {title: 'Picture', render:rowData=><img src={rowData.productpicture} style={{width:50,borderRadius:'50%'}}/>},



            ]}
            data={productData}        
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit Product',
                onClick: (event, rowData) => handleDialog(rowData)
              }
            ]}
          />
        )
      }
    return(<div>
       {showProducts()}
       {showDialog()}
    </div>)
}