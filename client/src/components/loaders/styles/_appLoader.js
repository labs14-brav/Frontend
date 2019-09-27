import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loaderCard: {
        height: "400px",
        width: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export default useStyles;

