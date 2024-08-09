<template>
  <div class="add-task-container">
    <h1>Add Task</h1>
    <form @submit.prevent="addTask" class="task-form">
      <div class="form-group">
        <label for="taskname">Task Name</label>
        <input id="taskname" v-model="taskname" type="text" placeholder="Enter task name" required />
      </div>
      <div class="form-group">
        <label for="taskdesc">Task Description</label>
        <textarea id="taskdesc" v-model="taskdesc" placeholder="Enter task description" required></textarea>
      </div>
      <button type="submit" class="add-button">Add Task</button>
    </form>
  </div>
</template>
  
<script>
export default {
  name: "AddTask",
  data() {
    return {
      items: [],
      taskname: "",
      taskdesc: "",
      id: 1,
    };
  },
  methods: {
    addTask() {
      this.items.push({
        id: this.id,
        taskname: this.taskname,
        taskdesc: this.taskdesc,
      });
      this.id++;
      this.taskname = "";
      this.taskdesc = "";
    },
  },
};
</script>
  


<style scoped>
.add-task-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.task-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #007bff;
  outline: none;
}

.add-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #0056b3;
}

.add-button:active {
  background-color: #004494;
}
</style>