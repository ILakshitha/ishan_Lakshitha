import Box from '@mui/material/Box';
import React from 'react';
import profilepic from '../assets/ishan_p.jpg'

export default function Home_C() {
    return (
        <div>
            <Box component="section" sx={{
                background:"red",
                height:"400px",
                width:"400px",
                paddingTop:"20px",
                marginTop:"100px",
                marginLeft:"200px",
                borderRadius:"200px",
                backgroundImage:`url(${profilepic})`,
                backgroundSize: "cover", // Ensures the image covers the box
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat" ,
                
             }}>   
             
            </Box>
        </div>
    )
}
