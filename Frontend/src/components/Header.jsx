import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <div>
            <Box sx={{ flexGrow: 1, color:'rebeccapurple'}}>
                <AppBar position="" sx={{ backgroundColor: 'rebeccapurple' }} >
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            LOGO
                        </Typography>
                        <Button className='border-separate' color="inherit">Let's Talk</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
