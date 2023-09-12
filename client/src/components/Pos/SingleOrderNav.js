import { useMutation } from "@apollo/client";
import {
    Typography,
    Button,
    Grid,
    Box,
    Paper,
    createTheme,
    ThemeProvider,
    AppBar,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { UPDATE_TABLE } from '../../utils/mutations'



function SingleOrderNav({tableNum, order}) {
    const [sendOrder, {error} ] = useMutation(UPDATE_TABLE) 
        const idArray = []
    console.log(order);
    order.map((item) => {
        idArray.push(item._id)
        }) 

    const handleSendOrder = async (event) => {
        event.preventDefault()
        try {
            const {data} = sendOrder({variables: {tableNum,"order": idArray}})
            console.log(data);
            console.log(idArray);
            
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

