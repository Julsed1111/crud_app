import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser, getUser } from "../services/Services";
import { Box, Button } from "@mui/material";
import {TextField} from '@mui/material';

export const UserEditPage = () => {

     const [name, setName] = useState('');
     const [surname, setSurname] = useState('');
     const [phone, setPhone] = useState('');
     const {id} = useParams();
     const navigate = useNavigate();

     useEffect(() => {
          getUser(id).then((data) => {setName(data.name); setSurname(data.surname); setPhone(data.phone)});
     }, []);

     const editUser = () => {
          const updatedUser = {name: name, surname: surname, phone: phone};
          updateUser(id, updatedUser).then(() => {navigate('/users')});
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
               <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width: '81%', marginTop: '10%'}} value={name} onChange={(e) => {setName(e.target.value)}}/>
               <TextField id="outlined-basic" label="Surname" variant="outlined" sx={{width: '81%', marginTop: '5%'}} value={surname} onChange={(e) => {setSurname(e.target.value)}}/>
               <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{width: '81%', marginTop: '5%'}} value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
               
               <Box sx={{textAlign: 'center', marginTop: '10%'}}>
                    <Button variant="contained"  sx={{width: '20%' }} onClick={editUser}>Save</Button>
                    <Button sx={{width: '20%' }} onClick={() => {navigate('/users')}}>Cancel</Button> 
               </Box>
          </Box>
     )
}