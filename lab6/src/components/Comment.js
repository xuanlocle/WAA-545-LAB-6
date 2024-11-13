import { Card, Col } from "react-bootstrap";

export default function Comment(props) {

    const { comment } = props;

    return (
        <Col>
            <Card className="p-2 m-2">
                {comment.name}
            </Card>
        </Col>
    )

}