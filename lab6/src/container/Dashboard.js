import { createContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import axios from "axios";
import PageRouters from "./PageRouters";
import { LinkContainer } from "react-router-bootstrap";


export const DashboardContext = createContext();

export default function Dashboard() {

    const [posts, setPosts] = useState([])
    const [postSelecting, setPostSelecting] = useState(posts[0]);

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

    // const handleInputChange = (event) => {
    //     const { value } = event.target;
    //     setQuery(value);
    // }

    // const handleSubmitChangeTitle = async (event) => {
    //     event.preventDefault();

    //     const postsUpdate = posts.map((post, i) =>
    //         i === 0 ? { ...post, title: query } : post
    //     );
    //     setPosts(postsUpdate)
    //     onPostSelecting(postsUpdate.find(post => post.id === postSelecting.id));
    // }

    // const onPostSelecting = (post) => {
    //     setPostSelecting(post);
    // }

    const onPostDelete = (post) => {
        deletePost(post)
    }

    const onAddPost = (post) => {
        addPosts(post)
    }

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand>WAA LAB</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="/posts">
                            <Nav.Link>Posts</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/posts/new">
                            <Nav.Link>New Post</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="m-end">
                        <LinkContainer to="/login">
                            <Nav.Link>Sign In</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
            <DashboardContext.Provider value={{ posts, postSelecting, setPostSelecting, onPostDelete, onAddPost }}>
                <Container className="pb-5">
                    <PageRouters />
                </Container>
            </DashboardContext.Provider>
        </>
    );

}