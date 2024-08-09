<template>
    <div class="sidebar">
      <ul>
        <li><router-link to="/">Tasks</router-link></li>
        <li><router-link to="/add-task">Add Task</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SidebarMenu'
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100%;
    background-color: #f4f4f4;
    padding: 10px;
    position: fixed;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  </style>
  