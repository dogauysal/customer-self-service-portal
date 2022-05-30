import { Col, Container, Row } from "react-bootstrap";
import IUser from "../models/IUser";

interface IProps {
    User: IUser
    RowNumber: number
}

const ContactRow: React.FC<IProps> = ({
    User,
    RowNumber
}) => {

    return (
        <Container fluid className={`contactRowContainer ${RowNumber % 2 == 0 ? 'rowBgShadow' : ''}`}>
            <Row>
                <Col sm={12}>
                    <label className="contactRowUsername">{User.firstName} {User.lastName}</label>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    <label>{User.phone}</label>
                </Col>
                <Col sm={4}>
                    <label>{User.email}</label>
                </Col>
                <Col sm={6}>
                    <label>Policy No:  {User.ssn}</label>
                </Col>
            </Row>
        </Container>
    )
}



export default ContactRow;