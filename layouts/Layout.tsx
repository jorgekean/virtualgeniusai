import { useState } from "react";
import {
    AppBar,
    Box,
    Container,
    // createStyles,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    // makeStyles,
    Toolbar,
    useTheme,
    // Theme,
    Typography,
    useMediaQuery,
    // Theme,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles"

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import SettingsIcon from '@mui/icons-material/Settings';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useRouter } from "next/router";
import Link from "next/link";

const drawerWidth = 240;
interface LayoutProps {
    children: React.ReactNode;
}

// const theme = createTheme({
//     // zIndex: {
//     //     appBar: 1200, // adjust these values as needed
//     //     drawer: 1100,
//     // },
//     // your other custom theme settings here
// });

// const drawerWidth = 240;
// const useStyles = makeStyles(() =>
//     createStyles({
//         root: {
//             display: "flex",
//         },
//         appBar: {
//             zIndex: theme.zIndex.drawer + 1,
//         },
//         menuButton: {
//             marginRight: 36,
//         },
//         drawer: {
//             width: drawerWidth,
//             flexShrink: 0,
//         },
//         drawerPaper: {
//             width: drawerWidth,
//         },
//         content: {
//             flexGrow: 1,
//             padding: theme.spacing(3),
//             marginLeft: 0,
//             [theme.breakpoints.up("sm")]: {
//                 marginLeft: drawerWidth,
//             },
//         },
//         toolbar: theme.mixins.toolbar
//     })
// );
// const useStyles = makeStyles((theme: Theme) => ({
//     root: {
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//     }
// }));
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const theme = useTheme();
    // const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const lgUp = useMediaQuery("(min-width:960px)");
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItemButton key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))} */}
                <ListItemButton
                    selected={router.pathname === "/"}
                    onClick={() => { router.push("/"); setMobileOpen(false); }}
                >
                    <ListItemIcon>
                        <WorkHistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Time Tracker"} />
                </ListItemButton>
                <ListItemButton
                    selected={router.pathname === "/timesheethistory"}
                    onClick={() => { router.push("/timesheethistory"); setMobileOpen(false); }}
                >
                    <ListItemIcon>
                        <HistoryToggleOffIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Timesheet History"} />
                </ListItemButton>
                <ListItemButton
                    selected={router.pathname === "/billingmanager"}
                    onClick={() => { router.push("/billingmanager"); setMobileOpen(false); }}
                >
                    <ListItemIcon>
                        <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Billing Manager"} />
                </ListItemButton>
                <ListItemButton
                    selected={router.pathname === "/settings"}
                    onClick={() => { router.push("/settings"); setMobileOpen(false); }}
                >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Settings"} />
                </ListItemButton>
                <ListItemButton
                    selected={router.pathname === "/report"}
                    onClick={() => { router.push("/report"); setMobileOpen(false); }}
                >
                    <ListItemIcon>
                        <SummarizeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Report"} />
                </ListItemButton>
            </List>
        </div>
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#3C84AB" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap >
                        FUSE V2
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", md: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container style={{ marginLeft: lgUp ? drawerWidth : "0px" }} maxWidth="lg">{children}</Container>
            </Box>
            <footer>
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        p: 2,
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                    }}
                >
                    <Typography variant="body2" color="text.secondary" align="center">
                        Fuse V2 &copy; {new Date().getFullYear()}
                    </Typography>
                </Box>
            </footer>
        </ThemeProvider>
    );
};

export default Layout;
