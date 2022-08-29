import { createUser } from "../services/Services";
import { Box, Button } from "@mui/material";
import {TextField} from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const CreateUserPage = () => {

     const [name, setName] = useState('');
     const [surname, setSurname] = useState('');
     const [phone, setPhone] = useState('');
     const navigate = useNavigate();


     const createNewUser = () => {
          const newUser = {name: name, surname: surname, phone: phone};
          createUser(newUser).then(() => {navigate('/users')});

     }

     return(
          <Box
               sx={{
               width: '35%',
               height: 400,
               marginLeft: '30%',
               marginTop: '5%',
               border: '1px solid black',
               textAlign: 'center'
               }}
          >
               <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width: '81%', marginTop: '10%'}} onChange={(e) => {setName(e.target.value)}}/>
               <TextField id="outlined-basic" label="Surname" variant="outlined" sx={{width: '81%', marginTop: '5%'}} onChange={(e) => {setSurname(e.target.value)}}/>
               <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{width: '81%', marginTop: '5%'}} onChange={(e) => {setPhone(e.target.value)}}/>
               
               <Box sx={{textAlign: 'center', marginTop: '10%'}}>
                    <Button variant="contained"  sx={{width: '20%' }} onClick={createNewUser}>Save</Button>
                    <Button sx={{width: '20%' }} onClick={() => {navigate('/users')}}>Cancel</Button> 
               </Box>
          </Box>
     )
}