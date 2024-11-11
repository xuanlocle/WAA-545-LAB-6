import { useState } from "react";
import HeaderComponent from "./header";
import Posts from "./Posts";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import PostDetails from "./PostDetails";

export default function Dashboard() {

    const [posts, setPosts] = useState([
        { id: 111, title: 'Happiness', author: 'John', content: "This is content 0" },
        { id: 112, title: 'MIU', author: 'Dean', content: "This is content 1" },
        { id: 113, title: 'Enjoy Life', author: 'Jasmine', content: "This is content 2" },
    ])
    const [postSelecting, setPostSelecting] = useState(posts[0]);

    const [query, setQuery] = useState();

    const handleInputChange = (event) => {
        const { value } = event.target;
        setQuery(value);
    }

    const handleSubmitChangeTitle = async (event) => {
        event.preventDefault();

        const postsUpdate = posts.map((post, i) =>
            i === 0 ? { ...post, title: query } : post
        );
        setPosts(postsUpdate)
        onPostSelecting(postsUpdate.find(post=>post.id === postSelecting.id));
    }

    const onPostSelecting = (post) => {
        setPostSelecting(post);
    }

    return (
        <>
            <HeaderComponent />
            <Container>
                <Row className="mt-5">
                    <Posts posts={posts} onPostSelecting={onPostSelecting} />
                </Row>
                <Row>
                    <Form className="float-start" onSubmit={handleSubmitChangeTitle}>
                        <Form.Label className="float-start">Change title of post</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} />
                        <Button className="mt-3 float-start" variant="primary" type="submit">
                            Change title
                        </Button>
                    </Form>
                </Row>
                <Row className="mt-3">
                    <Card>
                        <PostDetails post={postSelecting} />
                    </Card>
                </Row>
            </Container>

        </>
    );

}