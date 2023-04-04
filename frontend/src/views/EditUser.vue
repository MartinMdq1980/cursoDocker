<template>
    <div>
      <h1>Editar Usuario</h1>
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
          <label>Nueva Contraseña:</label>
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
    name: "EditUser",
    data() {
      return {
        user: {
          id: "",
          nombre: "",
          email: "",
          contraseña: "",
        },
      };
    },
    created() {
      const id = this.$route.params.id;
      api.getUser(id).then((response) => {
        this.user = response.data[0];
      });
    },
    methods: {
      submitForm() {
        api.updateUser(this.user.id, this.user).then(() => {
          this.$router.push("/users");
        });
      },
    },
  };
  </script>
  