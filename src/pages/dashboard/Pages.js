import { Navigate, Route, Routes } from "react-router-dom";
import NewPost from "../../components/NewPost/NewPost";
import Posts from "../../Containers/Posts/Posts"; 
import PostDetails from "../../Components/PostDetails/PostDetails";


const PageRoutes = () => {
    
    return (
    <Routes>
        <Route path="/" element={<Navigate replace to="/posts"/>}/>
        <Route path="posts" element={<Posts/>}>
            <Route path=":id" element={<PostDetails/>}/>
        </Route>

        <Route path="newPost" element={<NewPost/>}/>
    </Routes>
);

}
export default PageRoutes;
