interface TaskProps {
    title: string;
    description: string;
    status: string;
    dueDate: string;
    priority: number;
}

function Task({ title, description, status, dueDate, priority }: TaskProps) {
    return (
        <div className="note">
            <h1>Title: {title}</h1>
            <p>Description: {description}</p>
            <p>Status: {status}</p>
            <p>Due Date: {dueDate}</p>
            <p>Priority: {priority}</p>
        </div>
    );
}

export default Task;
