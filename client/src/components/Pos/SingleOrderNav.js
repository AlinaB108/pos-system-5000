import { useMutation } from "@apollo/client";
import {
    Button,
    Grid,
    AppBar,
    Typography,
    Box,
    Modal
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
    order.map((item) => {
        return idArray.push(item._id)
    }) 

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)



    // const Modal = async () => {
    //     const [open, setOpen] = React.useState(false)
    //     const handleOpen = () => setOpen(true)
    //     const handleClose = () => setOpen(false)
    //     return (
    //     <div>
    //         <modal 
    //         open={open} 
    //         onClose={handleClose}
    //         aria-labelledby = 'modal-modal-title'
    //         aria-describedby = 'modal-modal-description'
    //         >
    //             <Box>
    //                 <Typography id='modal-modal-title' variant='h6' component='h2'>
    //             Order Submission
    //                 </Typography>
    //                 <Typography id='modal-modal-description'>
    //                     YOUR ORDER HAS BEEN SUCCESSFULLY SUBMITTED
    //                 </Typography>
    //             </Box>
    //         </modal>
    //     </div>
    //     )
    // }



    const handleSendOrder = async () => {
        try {
            sendOrder({variables: {tableNum,"order": idArray}}) 
            console.log('');  
        } catch (err) {
            console.log(error);
        }
    }

    const submitSendOrder = async (event) => {
        event.preventDefault()
        Modal()
        handleOpen()
    }
    
    return (
    <AppBar position="static" style={{ backgroundColor: '#d4e1f1', width: '100vw' }}>
    <Grid item  display='flex' justifyContent='space-between' bottom={'0'}>
        <Button onClick={() => {handleOpen() ; handleSendOrder()}}>
            Send Order
        </Button>
        <Modal 
            open={open} 
            onClose={handleClose}
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
        <Button>
            Checkout Table
        </Button>
    </Grid>
    </AppBar>
    )
}

export default SingleOrderNav;

