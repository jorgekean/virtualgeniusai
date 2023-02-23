import * as React from "react";
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";

// Define the theme for the app
const theme = createTheme({
    palette: {
        primary: {
            main: "#007AFF",
        },
        background: {
            default: "#F4F4F4",
        },
    },
});

// Define the props interface for the layout
interface LayoutProps {
    children: React.ReactNode;
}

// Define the layout component
const SampleLayout: React.FC<LayoutProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    // Toggles the open state of the drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                {/* ------------------------ */}
                {/* Header */}
                {/* ------------------------ */}
                <AppBar position="fixed" elevation={0} className="" sx={{
                    backgroundColor: "#3C84AB",
                }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}
                            sx={{
                                display: {
                                    lg: "none",
                                    xs: "flex",
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            My App
                        </Typography>
                    </Toolbar>
                </AppBar>
                {/* ------------------------ */}
                {/* Left Navigation Drawer */}
                {/* ------------------------ */}
                <Drawer
                    sx={{ display: "flex" }}
                    variant="temporary"
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer}
                >
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary="Menu Item 1" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary="Menu Item 2" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary="Menu Item 3" />
                        </ListItem>
                    </List>
                </Drawer>
                {/* ------------------------ */}
                {/* Main Content */}
                {/* ------------------------ */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                </Box>
                {/* ------------------------ */}
                {/* Footer */}
                {/* ------------------------ */}
                <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0, backgroundColor: "#3C84AB" }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Footer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default SampleLayout;
