import { memo } from "react";
import { Card, Col } from "react-bootstrap";

const Comment = (props) => {

    const { comment } = props;
    console.log('comment render')

    return (
        <Col>
            <Card className="p-2 m-2">
                {comment.name}
            </Card>
        </Col>
    )
}
export default memo(Comment)