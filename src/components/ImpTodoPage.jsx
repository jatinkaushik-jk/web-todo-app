import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import TodoNavbar from "./TodoNavbar";
import OtherTodo from "./OtherTodo";

const ImpTodoPage = () => {

    const [impTodo, setImpTodo] = useState([]);

    // Get Todo data from local storage
    function getLocalData() {
        let prevData = JSON.parse(localStorage.getItem('todoContent'));
        if (prevData) {
            const todos = prevData.filter((elm) => elm.isImp == true);
            setImpTodo(todos);
        }
    }
    useEffect(() => {
        getLocalData();
    }, []);

    return (
        <>
            <TodoNavbar></TodoNavbar>
            {impTodo.length != 0 ?
                <Container className='mt-4 py-1 border border-info'>
                    <h3 className="text-center p-2 pb-4">Important Tasks</h3>
                    <Container>
                        {impTodo.map((elm, index) => {
                            return <OtherTodo key={index} rank={index} todoDate={elm.date} todoText={elm.text} isImportant={elm.isImp} />
                        })}
                    </Container>
                </Container> : <div className='mt-4 p-4 d-flex justify-content-center align-items-center fw-bold'>You don&apos;t have any Important task yet!</div>}
        </>
    )
}

export default ImpTodoPage;