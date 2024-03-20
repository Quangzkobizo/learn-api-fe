<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <table>
        <tr>
          <td> <label for="username">Email:</label></td>
          <td><input type="text" id="username" v-model="username" required /></td>
        </tr>
        <tr>
          <td><label for="password">Password:</label></td>
          <td><input type="password" id="password" v-model="password" required /></td>
        </tr>
        <button type="submit">Login</button>
      </table>
    </form>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
  Don't have account? <a href="register"> Register</a>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "quang@gmail.com",
      password: "123456",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      axios
        .post("http://localhost:8000/api/login", {
          email: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem('jwt_token', response.data.authorisation.token);
          console.log(JSON.stringify(response.data.user));
          localStorage.setItem('user', JSON.stringify(response.data.user));
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = "Wrong email or password";
        });
    },
  },
};
</script>

<style>
table {
  margin: auto;
}
</style>
