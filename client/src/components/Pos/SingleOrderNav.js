import { useMutation } from "@apollo/client";
import {
    Button,
    Grid,
    AppBar
} from "@mui/material";
import { UPDATE_TABLE } from '../../utils/mutations'



function SingleOrderNav({tableNum, order}) {
    const [sendOrder, {error} ] = useMutation(UPDATE_TABLE) 
        const idArray = []
    order.map((item) => {
        return idArray.push(item._id)
    }) 

    const handleSendOrder = async (event) => {
        event.preventDefault()
        try {
            sendOrder({variables: {tableNum,"order": idArray}})   
        } catch (err) {
            console.log(error);
        }
    }
    return (
    <AppBar position="static" style={{ backgroundColor: '#d4e1f1', width: '100vw' }}>
    <Grid item  display='flex' justifyContent='space-between' bottom={'0'}>
        <Button onClick={handleSendOrder}>
            Send Order
        </Button>
        <Button>
            Checkout Table
        </Button>
    </Grid>
    </AppBar>
    )
}

export default SingleOrderNav;

