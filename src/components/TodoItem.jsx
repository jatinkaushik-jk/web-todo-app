
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdDeleteForever } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';

function TodoItem(props) {
    const itemColor = props.isImportant ? 'rgba(225,225,0,0.3)' : 'transparent'

    return (
        <>
            <Row className="my-2 g-2 border border-info p-1">
                <Col xs={12} sm={6} className='my-1'>
                    <Form.Control
                        name='todoContent'
                        aria-label="Todo content"
                        aria-describedby="basic-addon1"
                        value={props.todoText}
                        readOnly
                        style={{ backgroundColor: itemColor }}
                    />
                </Col>
                <Col xs={8} sm={4} className='my-1'>
                    <Form.Control
                        type="date"
                        name='todoDate'
                        aria-label="Todo date"
                        aria-describedby="basic-addon2"
                        value={props.todoDate}
                        readOnly
                        style={{ backgroundColor: itemColor }}
                    />
                </Col>
                <Col xs={4} sm={2} className="d-flex my-1">
                    <Button
                        variant="outline-danger"
                        className='fs-4 py-1 d-flex justify-content-center align-items-center w-100'
                        onClick={() => props.onDeleteClick(props.rank)}
                    >
                        <MdDeleteForever />
                    </Button>
                </Col>
            </Row>


        </>
    )
}

export default TodoItem;