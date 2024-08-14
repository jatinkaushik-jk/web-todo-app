
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoMdAddCircle } from "react-icons/io";
import { useRef, useState } from 'react';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


function AddTodo(props) {

    const [todoText, setData] = useState('');
    const [todoDate, setTodoDate] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const impBtn = useRef();

    const addData = (event) => {
        setData(event.target.value);
    }
    const addDate = (event) => {
        setTodoDate(event.target.value);
    }
    const handleAddBtnClicked = () => {
        props.addBtnClick(todoText, todoDate, isImportant);
        setData('');
        setTodoDate('');
        setIsImportant(false);
        impBtn.current.classList.remove('active');
    }
    const handleImportantClick = () => {

        if (impBtn.current.classList.contains('active')) {
            setIsImportant(false);
            impBtn.current.classList.remove('active');
        } else {
            setIsImportant(true);
            impBtn.current.classList.add('active');
        }

    }

    return (
        <>
            <InputGroup className="my-4">

                <Form.Control
                    placeholder='Write Todo here...'
                    type="text"
                    aria-label="Todo here"
                    aria-describedby="basic-addon1"
                    value={todoText}
                    onChange={addData}
                    className='w-50'
                />
                <Form.Control
                    id='date'
                    type="date"
                    value={todoDate}
                    aria-label="Todo date"
                    aria-describedby="basic-addon2"
                    onChange={addDate}
                    className='w-25'
                />
                <div className='px-2 d-flex mx-auto mt-2 mt-sm-0'>
                    <OverlayTrigger
                        delay={{ hide: 100, show: 300 }}
                        overlay={(props) => (
                            <Tooltip {...props}>
                                mark important!
                            </Tooltip>
                        )}
                    ><Button ref={impBtn} variant="outline-warning" onClick={handleImportantClick} className='mx-1 fs-4 py-1 d-flex justify-content-center align-items-center'><BsFillExclamationCircleFill id='markImportant' /></Button>
                    </OverlayTrigger>

                    <OverlayTrigger
                        delay={{ hide: 100, show: 500 }}
                        overlay={(props) => (
                            <Tooltip {...props}>
                                add Todo
                            </Tooltip>
                        )}
                    ><Button variant="outline-success" className='mx-1 fs-4 py-1 d-flex justify-content-center align-items-center' onClick={handleAddBtnClicked}><IoMdAddCircle /></Button>
                    </OverlayTrigger>
                </div>

            </InputGroup>

        </>
    )
}

export default AddTodo;