function Task({ task }) {
  return (
    <div className="card text-bg-light">
      <div className="card-body row d-flex align-items-center">
        <div className="col">
          <h4 className="card-title text-muted">Task</h4>
          <p className="card-text">{task.name}</p>
        </div>
        <div className="col">
          <h4 className="card-title text-muted">Priority</h4>
          <p className="card-text">{task.priority}</p>
        </div>
        <div className="col text-center">
          <h5>
            <span className="badge text-bg-info">{task.status}</span>
          </h5>
        </div>
        <div className="d-flex gap-2 col justify-content-end">
          <button type="button" className="btn btn-secondary">
            <i className="bi bi-pencil-square"></i>
          </button>
          <button type="button" className="btn btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
