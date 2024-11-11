import Post from "./Post"
import Col from 'react-bootstrap/Col';

export default function Posts(props) {

    const { posts, onPostSelecting } = props;

    const handleClick = (item) => (event) => {
        onPostSelecting(item)
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