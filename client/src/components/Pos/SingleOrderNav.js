import { useMutation } from "@apollo/client";
import {
    Button,
    Grid,
    AppBar,
    Typography,
    Box,
    Modal,
    Input,
} from "@mui/material";
import  { UPDATE_TABLE } from '../../utils/mutations'
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  




function SingleOrderNav({tableNum, order}) {
    const [sendOrder, {error} ] = useMutation(UPDATE_TABLE) 
        const idArray = []
        let orderList =[]
         order.map((item) => {
            orderList += item.item
        })
        let totalPrice = 0
         order.map((item) => {
            totalPrice += item.price

        })
    order.map((item) => {
        return idArray.push(item._id)
    }) 

    const [open, setOpen] = React.useState(false);
    const handleOpenSubmit = () => setOpen(true);
    const handleCloseSubmit = () => setOpen(false);
    const [open2, setOpen2] = React.useState(false)
    const handleOpenCheck = () => setOpen2(true);
    const handleCloseCheck = () => setOpen2(false);

    const [closeOrder, {orderError}] = useMutation(UPDATE_TABLE)
        const handleOrderClose = async() => {
            try {
                await closeOrder({variables: {'tableNum': tableNum, 'tableStatus': false}})
                console.log('Table Closed!');

            } catch (err) {
                console.log(orderError);
            }
            
        }





    const handleSendOrder = async () => {
        try {
            sendOrder({variables: {tableNum,"order": idArray}}) 
            console.log('');  
        } catch (err) {
            console.log(error);
        }
    }
    return (
    <AppBar position="static" style={{ backgroundColor: '#d4e1f1', width: '100vw' }}>
    <Grid item  display='flex' justifyContent='space-between' bottom={'0'}>
        <Button onClick={() => {handleOpenSubmit() ; handleSendOrder()}}>
            Send Order
        </Button>
        <Modal 
            open={open} 
            onClose={handleCloseSubmit}
            aria-labelledby = 'modal-modal-title'
            aria-describedby = 'modal-modal-description'
            >
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2' >
                Order Submission
                    </Typography>
                    <Typography id='modal-modal-description'>
                        YOUR ORDER HAS BEEN SUCCESSFULLY SUBMITTED
                    </Typography>
                </Box>
            </Modal>
        <Button onClick={() => handleOpenCheck()}>
            Checkout Table
        </Button>
        <Modal
        open={open2}
        onClose = {handleCloseCheck}
        aria-labelledby= 'modal-modal-title' variant='h6' component='h2'
        aria-describedby = 'modal-modal-description'
        >
            <Box sx={style}>
                <Grid>
                    <Typography id= 'modal-modal description'>
                        {orderList}
                        {totalPrice.toFixed(2)}
                    </Typography>
                </Grid>
                <Button>
                    Submit Payment
                </Button>
                <Input type="text" name="tip" defaultValue={'Tip Amount?'}>
                </Input>

                <Button href='../profile/' onClick={handleOrderClose}>
                    Close Table
                </Button>
            </Box>

        </Modal>
    </Grid>
    </AppBar>
    )
}

export default SingleOrderNav;

