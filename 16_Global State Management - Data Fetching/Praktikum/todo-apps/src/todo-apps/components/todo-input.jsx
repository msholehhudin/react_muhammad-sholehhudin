export default function TodoInput({ onInputChange, onSubmit, value }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleInput = (e) => {
    const value = e.target.value;
    onInputChange(value);
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1
        className="mb-5 mt-5"
        style={{
          background: "linear-gradient(to right, #00C4FF, #FFE79B, #DD58D6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "90px",
          fontWeight: "bold",
          padding: "10px",
        }}
      >
        todos
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form d-flex align-items-center position-relative">
          <div className="input-group" style={{ width: "500px" }}>
            <input
              type="text"
              className="form-control rounded-5 shadow"
              id="todo"
              placeholder="Add todo here..."
              style={{ zIndex: 0 }}
              onChange={handleInput}
              value={value}
            />
            <button
              type="submit"
              className="btn btn-primary position-absolute end-0 top-50 translate-middle-y bg-transparent border-0"
              style={{ color: "black", zIndex: 1 }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
