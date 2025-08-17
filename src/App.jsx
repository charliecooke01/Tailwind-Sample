import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import CardBox from "./components/CardBox.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app-container">
            <Sidebar />
             
            <main className="main-content">
                <CardBox />          
            </main>
        </div>
    );
}

export default App;
