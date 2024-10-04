import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Header() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="">
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
