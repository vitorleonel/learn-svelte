<script>
  import store from "../store";

  let newTask = "";

  function handleSubmit() {
    store.update(state => {
      return [
        ...state,
        {
          id: Math.random(),
          title: newTask,
          done: false
        }
      ];
    });

    newTask = "";
  }
</script>

<style>
  form {
    widows: 100%;
    display: flex;
  }

  form input {
    flex: 1;
    margin-right: 1rem;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    placeholder="What's the description for task?"
    autofocus
    bind:value={newTask} />
  <button>Add task</button>
</form>
