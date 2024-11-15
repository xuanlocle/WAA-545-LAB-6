import { Navigate, Route, Routes } from "react-router";
import Posts from "../components/Posts";
import PostDetails from "../components/PostDetails";
import AddPost from "../components/AddPost";
import Login from "../components/Login";


export default function PageRouters(props) {
    return (
        <Routes>

            <Route path='/login' element={<Login />} />


            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/posts/new" element={<AddPost />} />
        </Routes>
    )

}