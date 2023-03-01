import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Unleashing the Power of AI: The Latest Developments
                </Typography>
                {/* <Link href={"/blog"}>
                    <Button color="inherit" />
                </Link>
               
            </Button>
            <Button color="inherit" component={Link} to="/blog">
                Blog
            </Button> */}
            </Toolbar>
        </AppBar >
    );
};

export default Header;
