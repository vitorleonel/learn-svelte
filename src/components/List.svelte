<script>
  import { onMount, beforeUpdate, afterUpdate } from "svelte";
  import store from "../store";

  let tasks = [];

  onMount(() => {
    store.subscribe(state => (tasks = state));
  });

  beforeUpdate(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    document.title = `You have ${
      tasks.filter(task => !task.done).length
    } tasks pending - TodoApp`;
  });

  function toggle(taskId) {
    store.update(tasks =>
      tasks.map(task => {
        if (task.id == taskId) task.done = !task.done;

        return task;
      })
    );
  }
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding: 1rem;
    border: 1px solid #f1f1f1;
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    margin-bottom: 0.75rem;
    cursor: pointer;
  }

  ul li:hover {
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.15);
  }

  ul li.done {
    text-decoration: line-through;
    background-color: #f4f4f4;
  }
</style>

<ul>
  {#each tasks as task}
    <li class:done={task.done} on:click={() => toggle(task.id)}>
       {task.title}
    </li>
  {/each}
</ul>
