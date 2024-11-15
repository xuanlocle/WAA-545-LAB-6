import { useContext } from "react";
import Post from "./Post"
import Col from 'react-bootstrap/Col';
import { DashboardContext } from "../container/Dashboard.js";
import { Link } from "react-router-dom";

export default function Posts(props) {

    const { posts, setPostSelecting } = useContext(DashboardContext)

    // const { posts /*, onPostSelecting*/ } = props;

    const handleClick = (item) => (event) => {
        // onPostSelecting(item)
        setPostSelecting(item);
    }

    return (<>
        {posts?.map(post => {
            return <Link to={`/posts/${post.id}`} key={post.id}>
                <Col
                    key={post.id}
                    className="clickable PostColumn"
                    onClick={handleClick(post)}>
                    <Post post={post} />
                </Col>
            </Link>
        })}
    </>)

}