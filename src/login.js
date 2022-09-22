import React from "react";
import { Avatar, Grid ,Button, Paper, TextField } from "@mui/material";
import ScreenLockLandscapeIcon from '@mui/icons-material/ScreenLockLandscape';
import { Stack } from "@mui/system";



const Login=()=>{
    const paperStyle={padding:20,height:'70vh',width:'380px',margin:'20px auto',}
    const avatarstyle={backgroundcolor:'#FFFF00',size:"8799"}
    const headerstyle={margin:0}
   
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Stack spacing={2}>
                <Grid  align='center'>
                    <Avatar  style={avatarstyle} ><ScreenLockLandscapeIcon/></Avatar>
                    <h2 style={headerstyle}>Sign In</h2>
                </Grid >
                
                <TextField label="username" placeholder="Enter username" fullWidth required></TextField >
                <TextField label="password" placeholder="Enter password" type ='password' fullWidth required></TextField>
                <a href="/forget_password">Forget Password?</a>
                <label className="remember_me_chk_box">
                    <input type="checkbox" /> Remember me
                </label>
                <Button  variant="contained">login</Button>

                </Stack>

                <Stack spacing={1}>
                <text>
                    don,t have account click
                </text>
                <Button size="small"  variant="outlined" href="/register">Sign-up</Button>
                </Stack>

            </Paper>
        </Grid>
    )
}
export default Login
