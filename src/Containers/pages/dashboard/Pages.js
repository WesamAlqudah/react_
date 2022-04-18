import NewPost from "../../../components/NewPost/NewPost";
import Posts from "../../Posts/Posts"; 
import PostDetails from "../../../Components/PostDetails/PostDetails";
import {
    Navigate,
     Routes,
     Route,
 } from "react";


const PageRoutes = () => (

    <Routes>
        <Route path="/" element={<Navigate replace to="/posts"/>}/>
        <Route path="posts" element={<Posts/>}>
            <Route path=":id" element={<PostDetails/>}/>
        </Route>

        <Route path="newPost" element={<NewPost/>}/>
    </Routes>
)

export default PageRoutes;
