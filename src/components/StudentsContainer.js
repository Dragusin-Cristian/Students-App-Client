import {
    StyledCardContainer,
    StyledCardItem,
    StyledP,
    StyledDeleteText
} from "./styled components";

const renderItem = (id, name, address, deleteStudent) => (
    <StyledCardItem key={id}>
        <StyledP>Id: {id}</StyledP>
        <StyledP>Name: {name}</StyledP>
        <StyledP>Address: {address}</StyledP>
        <StyledDeleteText onClick={() => deleteStudent(id)}>Delete student</StyledDeleteText>
    </StyledCardItem>
);

const StudentsContainer = ({students, deleteStudent}) => {
    return (
        <StyledCardContainer>
            {students.map((student) =>
                renderItem(student.id, student.name, student.address, deleteStudent)
            )}
        </StyledCardContainer>
    );
};

export default StudentsContainer;
