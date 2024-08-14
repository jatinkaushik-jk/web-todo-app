import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import TodoNavbar from "./TodoNavbar";
import OtherTodo from "./OtherTodo";

const PendingTaskPage = () => {
    const [pendingTodo, setPendingTodo] = useState([]);

    function getLocalData() {

        // Get Todo data from local storage
        let prevData = JSON.parse(localStorage.getItem('todoContent'));
        if (prevData) {
            const todos = prevData.filter((elm) => new Date(elm.date) <= new Date())
            setPendingTodo(todos);
        }
    }
    useEffect(() => {
        getLocalData();

    }, []);

    return (
        <>
            <TodoNavbar></TodoNavbar>
            {pendingTodo.length != 0 ?
                <Container className='mt-4 py-1 border border-info'>
                    <h3 className="text-center p-2 pb-4">Pending Tasks</h3>
                    <Container>
                        {pendingTodo.map((elm, index) => {
                            return <OtherTodo key={index} rank={index} todoDate={elm.date} todoText={elm.text} isImportant={elm.isImp} />
                        })}
                    </Container>
                </Container> : <div className='mt-4 p-4 d-flex justify-content-center align-items-center fw-bold'>You don&apos;t have any pending task!</div>}
        </>
    )
}

export default PendingTaskPage;