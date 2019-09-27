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
        justifyContent: "center"
    },
    logo: {
        height: "100px"
    },
    button: {
        width: "100%",
        height: "40px",
        margin: "10px",
        fontSize: "1.2rem",
        backgroundColor: "#4C7AA8",
        maxWidth: "400px",
        color: "white",
        fontSize: "1rem",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "#446d97"
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
    },
    formInput: {
        width: "100%",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        fontSize: ".9rem",
        padding: "5px",
        height: "40px",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
}));

export default useStyles;