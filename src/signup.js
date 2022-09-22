import React from "react";
import { Paper ,Grid, Avatar,Typography,TextField, Button } from "@mui/material";
import ScreenLockLandscapeIcon from '@mui/icons-material/ScreenLockLandscape';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//import Stack from "@mui/material";

const Signup =()=>{
    const paperStyle={padding:20,height:'80vh',width:'380px', margin:'20px auto',}
    const avatarstyle={backgroundcolor:'#FFFF00',size:"8799"}
    const headerstyle={margin:0}
    return(
        <Grid>
            <Paper elavation={20} style={paperStyle}>

                <Grid align="center">
                    <Avatar style={avatarstyle} ><ScreenLockLandscapeIcon/></Avatar>
                    
                    <h2 style={headerstyle}>Sign up</h2>
                    <Typography variant="caption" >Please fill this form to create an account !</Typography>
                </Grid>
                    
                    <TextField className="sign--upp" fullWidth label="Name" placeholder="Enter your name"></TextField >
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>

                    <TextField  fullWidth label="Email"></TextField >
                    <TextField  fullWidth label="Phone Number"></TextField >
                    <TextField  fullWidth label="password"></TextField >
                    <TextField  fullWidth label="confirm password"></TextField >
                    <label className="remember_me_chk_box">
                        <input type="checkbox" /> I accept term and condition
                    </label>
                    <Button type="Submit" variant="contained">SignUp</Button>
            </Paper>
        </Grid>
    )

}
export default Signup