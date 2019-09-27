import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    card: {
        padding: "60px 50px",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "600px",
        maxWidth: "400px",
        margin: "10px"
    },
    cardStep2: {
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "600px",
        width: "100%",
        maxWidth: "550px",
        justifyContent: "center",
        height: "700px",
        paddingTop: "0px",
        paddingBottom: "220px",
        margin: "10px"
    },
    logo: {
        height: "100px",
    },
    button: {
        backgroundColor: "#81a1c2",
        border: "whitesmoke",
        color: "white",
        marginTop: "20px",
        width: "100%",
        lineHeight: "1.75",
        fontWeight: 500,
        boxShadow:
            "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
        "&:hover": {
            backgroundColor: "#7490ae"
        }
    },
    loginForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "450px",
        width: "100%",
        height: "200px",
        marginTop: "10px"
    },
    formInput: {
        width: "100%",
        margin: "20px 0",
        borderRadius: "5px",
        display: "flex",
        fontSize: ".9rem",
        height: "40px",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
    bottomText: {
        padding: "30px"
    },
    locationContainer: {
        display: "flex",
        width: "100%"
    }
}));

export default useStyles;