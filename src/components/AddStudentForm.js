import { useState } from "react";
import {
    StyledCardContainer,
    StyledH2,
    StyledInput,
    StyledButton,
    StyledForm,
} from "./styled components";

const AddStudentForm = ({addStudent}) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(name, address);
    };

    return (
        <StyledCardContainer>
            <StyledH2>Add Students</StyledH2>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <StyledInput
                    placeholder="Student Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <StyledButton>SUBMIT</StyledButton>
            </StyledForm>
        </StyledCardContainer>
    );
};

export default AddStudentForm;
