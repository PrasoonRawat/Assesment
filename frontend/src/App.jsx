import { useEffect, useState } from "react";



const API_URL = "http://localhost:5000/tasks/";


function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  useEffect(() => {
    fetchTasks();
  },[]);


  const fetchTasks = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (Array.isArray(data)) {
      setTasks(data);
    } else {
      setTasks([]); // fallback safety
      console.error("Expected array but got:", data);
    }
  } catch (error) {
    console.error("Failed to fetch tasks", error);
    setTasks([]);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title.trim()) return;


    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title}),
      });

      fetchTasks();
      setTitle("");
    }

    catch(err){
      console.error("failed to create task", err);
    }
    console.log("Task title:", title);
    setTitle("");
  };


  const handleDelete = async (id)=>{
    try
    {
      await fetch(`${API_URL}${id}`,{
        method: "DELETE",
      });

      fetchTasks();
    }
    catch (err){
      console.error("failed to delete task", err);
    }
  }

  return (
    <>
    <div className="min-h-screen w-full bg-white text-black flex flex-col items-center px-4 py-8">
      {/* Header */}
      <div className="mb-10 text-center max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          Task Manager
        </h1>
        <h2 className="text-sm md:text-lg font-light opacity-70">
          Manage all your tasks at a single place
        </h2>
      </div>

      {/* Input box */}
      <div className="border border-gray-300 p-5 rounded-xl shadow-lg w-full max-w-xl">
        <form onSubmit={handleSubmit} className="flex gap-3 w-full">
          <input
            type="text"
            placeholder="Enter a task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md bg-gray-100 flex-1 h-12 px-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={!title.trim()}
            className={`
              flex items-center gap-1 justify-center px-4 rounded-md h-12 transition-all
              ${
                title.trim()
                  ? "bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            <span className="text-2xl leading-none">+</span>
            <span className="text-sm font-medium hidden md:inline">Add</span>
          </button>
        </form>
      </div>

      {/* Task list */}
      <div className="mt-10 w-full max-w-4xl flex-1 border border-dashed rounded-lg shadow-xl border-gray-200 p-2 md:p-12 overflow-y-auto">
        <ul className="space-y-3">
          {tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-16 opacity-70">
              <div className="w-10 h-10 mb-2 bg-black rounded-full flex items-center justify-center">
                <div className="h-6 w-6 bg-white rounded-full"></div>
              </div>
              <p className="text-sm tracking-wide">NO TASKS ADDED YET</p>
            </div>
          ) : (
            tasks.map((task) => (
              <li
                key={task._id}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
              >
                <span
                  onClick={() =>
                    setExpandedTaskId(
                      expandedTaskId === task._id ? null : task._id
                    )
                  }
                  className={`
                    text-sm font-medium text-gray-800 max-w-[75%] break-words cursor-pointer
                    ${
                      expandedTaskId === task._id
                        ? "line-clamp-none"
                        : "line-clamp-1"
                    }
                  `}
                >
                  {task.title}
                </span>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(task._id)}
                  className="text-red-500 text-sm font-medium hover:text-red-700 transition cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
