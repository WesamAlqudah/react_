import React, {useState, useEffect, createContext} from "react";
import NewPost from "../../../components/NewPost/NewPost";
import PostDetails from "../../../Components/PostDetails/PostDetails";
import Post from "../../../components/Post/Post";
import Posts from "../../Posts/Posts";
import { ThemeColorContext } from "../../store/ThemeColor";
import Pages  from "./Pages";
import Header from "../../headers/Header";
import "../../headers/Header.css"

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="header">
                <Header/>
            </div>
            <div className="Product">
                <Pages />
            </div>
        </React.Fragment>
    );

}


export default Dashboard;