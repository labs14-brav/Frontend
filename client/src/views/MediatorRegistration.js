import React from "react";
import { 
    Container, 
    TextField, 
    Button,
    Box 
} from "@material-ui/core";

export default function MediatorRegistration() {
    return (
        <Container >

            <h1>Mediator Registration</h1>
            <Box>
            <form>
                <TextField
                    name="license"
                    label="License Number"
                    variant="outlined"
                    />
                <TextField
                    name="experience"
                    label="Years of Experience"
                    variant="outlined"
                    />
                <TextField
                    name="specialization"
                    label="Specialization"
                    variant="outlined"
                    />
                <TextField
                    name="language"
                    label="Language"
                    variant="outlined"
                    />
                <Button onClick={() => console.log("make post request here")}>
                    Submit
                </Button>
            </form>
                    </Box>
        </Container>
    );
}
