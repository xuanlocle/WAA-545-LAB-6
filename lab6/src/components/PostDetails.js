import { Button, Col, Row } from "react-bootstrap";
import Comment from "./Comment";
import { useContext } from "react";
import { PostSelectContext } from './Dashboard.js'

export default function PostDetails(props) {

    const { postSelecting } = useContext(PostSelectContext);
    const { onPostDelete } = props;

    const handleDeletePost = (event) => {
        event.preventDefault();
        onPostDelete(postSelecting)
    }


    return (<>
        <h4 className="PostDetailTitle mt-3">{postSelecting?.title}</h4>
        <h5 className="mt-3">{postSelecting?.author}</h5>
        <p className="float-start mt-3 mb-5">{postSelecting?.content}</p>
        <Row>
            {
                postSelecting?.comments.map(comment => {
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