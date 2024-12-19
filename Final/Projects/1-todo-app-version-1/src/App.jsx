function App() {
  return (
    <center>
      <h1>Todo App</h1>
      <div class="container text-center">

      <div class="row ">
        <div class="col-6  ">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div class="col-4">
          <input type="date" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success ">
          Add
          </button>
        </div>
      </div>
      <div class="row ">
        <div class="col-6  ">
          Go to collage
        </div>
        <div class="col-4">
         10/1/2025
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ">
          Delete
          </button>
        </div>
      </div><div class="row ">
        <div class="col-6  ">
        Go to gym
        </div>
        <div class="col-4">
         31/12/2024
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger ">
        Delete
          </button>
        </div>
      </div>
      </div>
    </center>
  );
}

export default App;
