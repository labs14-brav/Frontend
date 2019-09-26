import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    navbar: {
        backgroundColor: "#375C80",
        // height: "80px"
    },
    icon: {
        color: "white",
        height: "50px",
    },
    navLink: {
        textDecoration: "none",
        fontWeight: 500,
        color: 'white'
    },
    commentsNavLink: {
        textDecoration: "none",
        fontWeight: 500,
        color: 'white',
    },
    bravLogoLink: {
        display: "flex",
        backgroundColor: "#5C90C1",
        justifyContent: "center",
        alignItems: 'center',
        height: "100%",
        textDecoration: 'none'
    },
    bravLionLogo: {
        maxWidth: "22.5%",
        backgroundColor: "#5C90C1",
        paddingRight: "10px"
    }
}));

export default useStyles;

