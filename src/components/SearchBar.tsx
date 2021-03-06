import { Col, Container, Row } from "react-bootstrap";
import SearchInput from "./SearchInput";

interface IProps {
    onTextChange: (value: string) => void
}

const SearchBar: React.FC<IProps> = ({
    onTextChange
}) => {
    return (
        <div className="searchBarContainer">
            <Container>
                <div>
                    <Row>
                        <Col xs={12} md={8}>
                            <SearchInput
                                onTextChange={onTextChange}
                                placeholder="SEARCH (Client Name / Policy Number)"
                            />
                        </Col>
                        <Col xs={0} md={4}></Col>
                    </Row>
                </div>
            </Container>
        </div>

    )
}

export default SearchBar;