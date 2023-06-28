export default function ListTodo({TodoList}) {
    return (
      <div className="mx-4 mt-4 d-flex flex-column gap-3" style={{ maxWidth: "15%" }}>
        {TodoList.map((item, index) => (
          <button
            className={`btn btn-outline-primary rounded-5 ${item.completed ? "" : "text-decoration-line-through"}`}
            key={index}
          >
            {item.title}
          </button>
        ))}
      </div>
    );
  }
  