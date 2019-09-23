import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "70px",
        paddingTop: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        color: "grey",
        width: "95%"
    },
    cardContainer: {
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "hidden"
    },
    card: {
        maxWidth: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        minHeight: "200px",
        padding: "30px",
    },
    title: {
        color: "black"
    },
    cardTitle: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        margin: "0",
        flexDirection: "column"
    },
    divider: {
        border: ".5px solid lightgrey",
        width: "100%",
        margin: "0px",
        marginTop: "10px"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "flex-start",
        margin: "30px 0px",
        padding: "20px",
        color: "grey",
        minHeight: "80px"
    },
    mainCardContent: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        flexDirection: "column",
        width: "100%",
        maxWidth: "500px",
    },
    text: {
        margin: "20px 0px"
    },
    link: {
        textDecoration: "none"
    },
    textFieldsContainer: {
        marginTop: "20px",
        width: "100%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginBottom: "20px"
        }
    },
    inputContainer: {
        marginTop: "10px"
    },
    textField: {
        width: "100%",
        marginTop: "5px",
        backgroundColor: "white",
        borderRadius: "5px"
    },
    profilePicture: {
        width: "200px",
        height: "200px",
        borderRadius: "50%"
    },
    mainCard: {
        maxWidth: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "200px",
        padding: "30px",
        marginBottom: "10px"
    },
    updateButton: {
        backgroundColor: "green",
        border: "whitesmoke",
        color: "white",
        marginTop: "20px"
    },
    fieldContainer: {
        display: "flex"
    },
    fieldLabel: {
        marginRight: "7px"
    },
    profile: {
        padding: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    profileText: {
        color: "grey"
    },
    sectionTitleContainer: {
        padding: "20px"
    },
}));

export default useStyles;