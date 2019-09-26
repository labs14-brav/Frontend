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
        marginTop: "10px"
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
    profilePicture: {
        width: "auto",
        height: "auto",
        maxWidth: "200px",
        height: "200px",
        fit: "cover"
    },
    editProfileCard: {
        maxWidth: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "200px",
        padding: "30px",
    },
    updateButton: {
        backgroundColor: "#e6e6e6",
        border: "whitesmoke",
        color: "grey",
        marginTop: "20px",
        width: "150px",
        lineHeight: "1.75",
        fontWeight: 500,
        boxShadow:
            "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
        "&:hover": {
            backgroundColor: "#c0c0c0"
        }
    },
    saveButton: {
        backgroundColor: "#5C90C1",
        border: "whitesmoke",
        color: "#FFF",
        marginTop: "20px",
        width: "150px",
        lineHeight: "1.75",
        fontWeight: 500,
        boxShadow:
            "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
        "&:hover": {
            backgroundColor: "#507ca6"
        }
    },
    cancelButton: {
        backgroundColor: "#FFF",
        border: "whitesmoke",
        color: "grey",
        marginTop: "20px",
        width: "150px",
        boxShadow:
            "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
        lineHeight: "1.75",
        fontWeight: 500,
        "&:hover": {
            backgroundColor: "#e6e6e6"
        }
    },
    fieldContainer: {
        width: "100%",
        display: "flex"
    },
    fieldLabel: {
        width: "30%",
        marginTop: "10px",
        color: "grey"
    },
    fieldValue: {
        width: "70%",
        fontWeight: "regular",
        marginTop: "10px",
        color: "grey"
    },
    inputFieldLabel: {
        display: "flex",
        width: "250px",
        alignItems: "center",
        marginTop: "5px"
    },
    inputField: {
        fontWeight: "regular",
        width: "100%",
        marginTop: "5px"
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
    staticInfo: {
        width: "100%",
    },
    staticInfoContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "20px"

    },
    labels: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    staticValues: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    buttonContainer: {
        display: "flex",
        width: "310px",
        justifyContent: "space-between"

    }
}));

export default useStyles;