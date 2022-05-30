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
                <Col sm="12">
                    <Search className="searchIcon fs-4" />
                    <input
                        className="searchInput  col-sm-10"
                        placeholder={placeholder}
                        onChange={(e) => onTextChange(e.target.value)}
                    />
                </Col>
            </Row>
        </>
    )
}

export default SearchInput;