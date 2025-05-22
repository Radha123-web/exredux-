import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';



export default function AddButton(){
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
                    
                    <Button style={{display:"flex",justifyContent:"flex-start",width:"96%",borderRadius:"20px",border:"2px solid #dcdcdc",gap:"75%"}}><span>Add</span> <AddIcon/></Button>
                   
                   
                    </div>
    )
}