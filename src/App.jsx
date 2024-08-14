import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TodoNavbar from "./components/TodoNavbar";
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import { useState, useEffect } from 'react';

function App() {

  const [currTodo, setTodo] = useState([]);

  // For local Storage

  // Set Todo data to local storage
  function setLocalData(newData) {
    localStorage.setItem('todoContent', JSON.stringify(newData));
  }

  // Get Todo data from local storage
  function getLocalData() {

    let prevData = JSON.parse(localStorage.getItem('todoContent'));
    if (prevData) {
      setTodo(prevData);
    }
  }
  useEffect(() => {
    getLocalData();
  }, []);

  // Manage Todo data
  const handleAddClick = (elmVal, elmDate, elmImp) => {
    if (elmVal !== '' && elmDate !== '') {
      let myTodo = [...currTodo, { text: elmVal, date: elmDate, isImp: elmImp }];
      setTodo(myTodo);
      setLocalData(myTodo);
    } else {
      alert("Todo item can not be empty!");
    }

  }
  const deleteItem = (elm) => {
    let newData = [...currTodo];
    newData.splice(elm, 1);
    setTodo(newData);
    setLocalData(newData);
  }

  return (
    <>
      <TodoNavbar></TodoNavbar>
      <Container className='mt-4 py-1 border border-info'>
        <AddTodo addBtnClick={handleAddClick}></AddTodo>
        <hr className='border border-info' />
        <Container>
          {currTodo.map((elm, index) => {
            return <TodoItem key={index} rank={index} todoDate={elm.date} todoText={elm.text} isImportant={elm.isImp} onDeleteClick={deleteItem} />
          })}
        </Container>
      </Container>
      {currTodo.length == 0 ? <div className='mt-4 p-4 d-flex justify-content-center align-items-center fw-bold'>You don&apos;t have any task!</div> : ""}

    </>
  )
}


export default App;