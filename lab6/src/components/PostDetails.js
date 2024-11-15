import { Button, Col, Row } from "react-bootstrap";
import Comment from "./Comment";
import { useContext, useEffect } from "react";
import { DashboardContext } from '../container/Dashboard.js'
import { useNavigate, useParams } from "react-router";

const PostDetails = (props) => {

    const params = useParams();
    const navigate = useNavigate();

    const { postSelecting, onPostDelete } = useContext(DashboardContext);

    const handleDeletePost = (event) => {
        event.preventDefault();
        onPostDelete(postSelecting)
        navigate('/')
    }


    useEffect(
        () => {
            console.log(params.id)
            // if (params.id) {
            //     axios.get('http://localhost:8080/api/v1/products/' + params.id + '/reviews')
            //         .then(response => {
            //             setProductDetail(response.data)
            //         })
            //         .catch(err => console.log(err.message))
            // }
        }, [params.id])


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
export default PostDetails