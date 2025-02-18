import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Task from "./Task";

interface TaskData {
    title: string;
    description: string;
    status: string;
    dueDate: string;
    priority: number;
}

function App() {
    const [tasks, setTasks] = useState<TaskData[]>([]);
    const API_URL = "http://127.0.0.1:8000/api/todos";

    useEffect(() => {
        fetch(API_URL, { mode: "cors" })  
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);

    return (
        <div>
            <Header />
            {tasks.map((task, index) => (
                <Task 
                    key={index}
                    title={task.title} 
                    description={task.description} 
                    status={task.status} 
                    dueDate={task.dueDate} 
                    priority={task.priority} 
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
