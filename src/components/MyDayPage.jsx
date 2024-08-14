import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import TodoNavbar from "./TodoNavbar";
import OtherTodo from "./OtherTodo";

const MyDayPage = () => {
    const [todayTodo, setTodayTodo] = useState([]);

    // Get Todo data from local storage
    function getLocalData() {

        let prevData = JSON.parse(localStorage.getItem('todoContent'));
        if (prevData) {
            const todos = prevData.filter((elm) => elm.date == new Date().toISOString().slice(0, 10))
            setTodayTodo(todos);
        }
    }
    useEffect(() => {
        getLocalData();

    }, []);

    return (
        <>
            <TodoNavbar></TodoNavbar>
            {todayTodo.length != 0 ?
                <Container className='mt-4 py-1 border border-info'>
                    <h3 className="text-center p-2 pb-4">My Day</h3>
                    <Container>
                        {todayTodo.map((elm, index) => {
                            return <OtherTodo key={index} rank={index} todoDate={elm.date} todoText={elm.text} isImportant={elm.isImp} />
                        })}
                    </Container>
                </Container> : <div className='mt-4 p-4 d-flex justify-content-center align-items-center fw-bold'>You don&apos;t have any task for Today!</div>}
        </>
    )
}

export default MyDayPage