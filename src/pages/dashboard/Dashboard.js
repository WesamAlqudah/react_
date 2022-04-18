import React from "react";
import Pages  from "./Pages";
import Header from "../../Containers/headers/Header";
import "../.././Containers/headers/Header.css"

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