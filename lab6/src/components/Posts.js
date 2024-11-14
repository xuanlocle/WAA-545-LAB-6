import { useContext } from "react";
import Post from "./Post"
import Col from 'react-bootstrap/Col';
import { PostSelectContext } from "./Dashboard";

export default function Posts(props) {

    const { setPostSelecting } = useContext(PostSelectContext)

    const { posts /*, onPostSelecting*/ } = props;

    const handleClick = (item) => (event) => {
        // onPostSelecting(item)
        setPostSelecting(item);
    }

    return (

        posts.map(post => {
            return <Col
                key={post.id}
                className="clickable PostColumn"
                onClick={handleClick(post)}>
                <Post post={post} />
            </Col>
        })


    )
}