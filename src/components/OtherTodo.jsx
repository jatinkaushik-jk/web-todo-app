import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Col } from 'react-bootstrap';


const OtherTodo = (props) => {
    const itemColor = props.isImportant ? 'rgba(225,225,0,0.3)' : 'transparent'

    return (
        <>
            <Row className="my-2 g-2 border border-info p-1">
                <Col xs={12} sm={8} className='my-1'>
                    <Form.Control
                        name='todoContent'
                        aria-label="Todo content"
                        aria-describedby="basic-addon1"
                        value={props.todoText}
                        className='w-100'
                        readOnly
                        style={{ backgroundColor: itemColor }}
                    />
                </Col>
                <Col xs={12} sm={4} className='my-1'>
                    <Form.Control
                        type="date"
                        name='todoDate'
                        aria-label="Todo date"
                        aria-describedby="basic-addon2"
                        value={props.todoDate}
                        className='w-100'
                        readOnly
                        style={{ backgroundColor: itemColor }}
                    />
                </Col>
            </Row>

        </>
    )
}

export default OtherTodo