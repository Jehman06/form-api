import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import { UserContext } from "../contexts/user.context";
import { ProjectProvider } from "../contexts/project.context";

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <ProjectProvider>
            <div style={{ backgroundColor: '#004f9e', minHeight: '100vh' }}>
                <Navbar />
                <p style={{ fontSize: '10px', color: 'white', marginLeft: '5px' }}>{user._profile.data.email}</p>
                <Form />
            </div>
        </ProjectProvider>
    )
}

export default Home;