import { createContext, useEffect, useState } from "react";
import HeaderComponent from "./header";
import Posts from "./Posts";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import PostDetails from "./PostDetails";
import axios from "axios";
import AddPost from "./AddPost";

export const PostSelectContext = createContext();

export default function Dashboard() {

    const [posts, setPosts] = useState([])
    const [postSelecting, setPostSelecting] = useState(posts[0]);

    const [query, setQuery] = useState();

    useEffect(() => {
        getPosts();
    }, [])


    async function getPosts() {
        axios.get(
            'http://localhost:8080/api/v1/posts',
            {
                headers: { "Access-Control-Allow-Origin": "*" }
            }
        ).then(res => {
            const resPosts = res.data
            setPosts(resPosts);
        }).catch(err => {
            console.error(err)
        })
    };

    async function addPosts(post) {
        axios.post(
            'http://localhost:8080/api/v1/posts',
            {
                headers: { "Access-Control-Allow-Origin": "*" },
                ...post
            }
        ).then(res => {
            getPosts();
            console.log(`added post successfully`)

        }).catch(err => {
            console.error(err)
        })
    };

    async function deletePost(post) {
        console.log('call deletePost ', post)
        axios.delete(
            `http://localhost:8080/api/v1/posts/${post.id}`,
            {
                headers: { "Access-Control-Allow-Origin": "*" }
            }
        ).then(res => {
            getPosts();
            setPostSelecting(null)
            console.log(`deleted post ${post.id} successfully`)
        }).catch(err => {
            console.error(err)
        })
    };

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
        onPostSelecting(postsUpdate.find(post => post.id === postSelecting.id));
    }

    const onPostSelecting = (post) => {
        setPostSelecting(post);
    }

    const onPostDelete = (post) => {
        deletePost(post)
    }

    const onAddPost = (post) => {
        addPosts(post)
    }

    return (
        <PostSelectContext.Provider value={{ postSelecting, setPostSelecting }}>
            <HeaderComponent />
            <Container className="pb-5">
                <Row className="mt-5">
                    <Posts posts={posts} /*onPostSelecting={onPostSelecting}*/ />
                </Row>
                <Row>
                    <Card className="p-3">
                        <Form className="float-start" onSubmit={handleSubmitChangeTitle}>
                            <Form.Label className="float-start">Change title of post</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} />
                            <Button className="mt-3 float-start" variant="primary" type="submit">
                                Change title
                            </Button>
                        </Form>
                    </Card>
                </Row>
                <Row className="mt-3">
                    <Card>
                        <PostDetails /*post={postSelecting}*/ onPostDelete={onPostDelete} />
                    </Card>
                </Row>
                <Row className="mt-3">
                    <AddPost onAddPost={onAddPost} />
                </Row>
            </Container>
        </PostSelectContext.Provider>
    );

}