import { Col, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"

interface IProps {
    onTextChange: (value: string) => void
    placeholder: string
}

const SearchInput: React.FC<IProps> = ({
    onTextChange,
    placeholder
}) => {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <Search className="searchIcon fs-4" />
                    <input
                        className="searchInput col-10"
                        placeholder={placeholder}
                        onChange={(e) => onTextChange(e.target.value)}
                    />
                </Col>
            </Row>
        </>
    )
}

export default SearchInput;