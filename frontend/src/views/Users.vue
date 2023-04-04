<template>
    <div>
      <h1>Lista de Usuarios</h1>
      <button @click="addUser()">Agregar usuario</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.nombre }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="editUser(user.id)">Editar</button>
              <button @click="deleteUser(user.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  
  import api from "../api";
  
  export default {
    name: "Users",
    data() {
      return {
        users: [],
      };
    },
    created() {
      api.getUsers().then((response) => {
        this.users = response.data;
      });
    },
    methods: {
      addUser() {
        this.$router.push("/users/add");
      },
      editUser(id) {
        this.$router.push(`/users/edit/${id}`);
      },
      deleteUser(id) {
        if (window.confirm("¿Está seguro que desea eliminar este usuario?")) {
          api.deleteUser(id).then(() => {
            this.users = this.users.filter((user) => user.id !== id);
          });
        }
      },
    },
  };
  </script>
  