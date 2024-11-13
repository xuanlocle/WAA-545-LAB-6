import { Button, Col, Row } from "react-bootstrap";
import Comment from "./Comment";

export default function PostDetails(props) {

    const { post, onPostDelete } = props;

    const handleDeletePost = (event) => {
        event.preventDefault();
        onPostDelete(post)
    }


    return (<>
        <h4 className="PostDetailTitle mt-3">{post?.title}</h4>
        <h5 className="mt-3">{post?.author}</h5>
        <p className="float-start mt-3 mb-5">{post?.content}</p>
        <Row>
            {
                post?.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })
            }
        </Row>
        <Col className="justify-content-md-center">
            <Button variant="link" size="lg" className="m-3">Edit</Button>
            <Button onClick={handleDeletePost} variant="link" size="lg" className="m-3">Delete</Button>
        </Col>
    </>
    )

}