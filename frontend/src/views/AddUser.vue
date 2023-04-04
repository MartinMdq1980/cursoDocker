<template>
    <div>
      <h1>Agregar Usuario</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label>Nombre:</label>
          <input type="text" v-model="user.nombre" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="user.email" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" v-model="user.contraseña" />
        </div>
        <button type="submit">Guardar</button>
        <button @click="$router.push('/users')">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from "../api";
  
  export default {
    name: "AddUser",
    data() {
      return {
        user: {
          nombre: "",
          email: "",
          contraseña: "",
        },
      };
    },
    methods: {
      submitForm() {
        api.addUser(this.user).then(() => {
          this.$router.push("/users");
        });
      },
    },
  };
  </script>
  