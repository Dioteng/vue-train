<template>
  <div class="manage-tasks-container">
    <h1>Manage Tasks</h1>
    <div class="tasks-table-container">
        <table class="tasks-table">
            <thead>
                <th>ID</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.id }}</td>
                <td>{{ task.taskname }}</td>
                <td>{{ task.taskdesc }}</td>
                <td>
                    <template v-if="editedFieldId === task.id">
                    <input
                        type="text"
                        v-model="task.taskname"
                        :ref="`task${task.id}`"
                    />
                    <textarea v-model="task.taskdesc" rows="5"></textarea>
                    <button class="btn" @click.prevent="toggleEdit">
                        <template>Save</template>
                    </button>
                    </template>
                    <template v-else>
                    <button class="pen" v-on:click="editTask(task.id)">Edit</button>
                    <button class="times" v-on:click="deleteTask(task.id)">
                        Delete
                    </button>
                    </template>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
  
<script>
  export default {
    props: ["tasks"],
    name: "ManageTasks",
    data() {
        return {
        editedFieldId: null,
        };
    },
    methods: {
        deleteTask(id) {
        const index = this.tasks.findIndex((task) => task.id === id);
        if (index !== -1) {
            this.task.splice(index, 1);
        }
        },
        editTask(id) {
        if (id) {
            this.editedFieldId = id;
            this.$nextTick(() => {
            if (this.$refs["task" + id]) {
                this.$refs["task" + id][0].focus();
            }
            });
        } else {
            this.editedFieldId = null;
        }
        },
    },
  }
</script>

<style scoped>
.manage-tasks-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.tasks-table-container {
  overflow-x: auto;
}

.tasks-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
}

.tasks-table thead {
  background-color: #f5f5f5;
}

.tasks-table th, .tasks-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.tasks-table th {
  font-weight: bold;
  color: #333;
}

.tasks-table td {
  font-size: 16px;
  color: #555;
}

.tasks-table td input,
.tasks-table td textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.tasks-table td input:focus,
.tasks-table td textarea:focus {
  border-color: #007bff;
  outline: none;
}

.btn {
  padding: 8px 12px;
  font-size: 14px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 2px;
  transition: background-color 0.3s;
}

.edit-btn {
  background-color: #007bff;
}

.edit-btn:hover {
  background-color: #0056b3;
}

.delete-btn {
  background-color: #dc3545;
}

.delete-btn:hover {
  background-color: #c82333;
}

.cancel-btn {
  background-color: #6c757d;
}

.cancel-btn:hover {
  background-color: #5a6268;
}

.save-btn {
  background-color: #28a745;
}

.save-btn:hover {
  background-color: #218838;
}
</style>