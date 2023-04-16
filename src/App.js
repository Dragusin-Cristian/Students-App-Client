import { useState, useEffect } from "react";
import AddStudentForm from "./components/AddStudentForm";
import StudentsContainer from "./components/StudentsContainer";
import { StyledPageTitle } from "./components/styled components";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then((response) => response.json())
            .then((data) => setStudents(data));
    }, []);

    const addStudent = (name, address) => {
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, address }),
        })
            .then((response) => {
                if (response.ok) return response.json();
                else throw new Error(response.status);
            })
            .then((responseData) => {
                console.log("Response:", responseData);
                setStudents((oldState) => {
                    return [...oldState, responseData];
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const deleteStudent = (id) => {
        fetch(`http://localhost:8080/student/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Failed to make DELETE request: " + response.status
                    );
                }
                console.log("DELETE request successful");
                setStudents((oldState) => {
                    const newStudents = [];
                    for (const student of oldState) {
                        if (student.id !== id) {
                            newStudents.push(student);
                        }
                    }
                    return newStudents;
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <StyledPageTitle>
                Full Stack Application with React and Spring Boot
            </StyledPageTitle>
            <AddStudentForm addStudent={addStudent} />
            <h2>Students</h2>
            <StudentsContainer
                students={students}
                deleteStudent={deleteStudent}
            />
        </div>
    );
}

export default App;
