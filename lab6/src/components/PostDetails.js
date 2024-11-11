import { Col, Row } from "react-bootstrap";

export default function PostDetails(props) {

    const { post } = props;

    return (<>
        <h4 className="PostDetailTitle mt-3">{post?.title}</h4>
        <h5 className="mt-3">{post?.author}</h5>
        <p className="float-start mt-3 mb-5">{post?.content}</p>
        <Row className="justify-content-md-center">
            <Col sm={2}>
                <a href="#">Edit</a>
            </Col>
            <Col sm={2}>
                <a href="#">Delete</a>
            </Col>
        </Row>
    </>
    )

}