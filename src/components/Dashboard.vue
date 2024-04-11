<template>
  <div v-if="currentUser">
    <h4 id="name">
      Name : {{ currentUser.name }} <a href="user/me">( info ) </a>
    </h4>

    <h4>Email : {{ currentUser.email }}</h4>
    <a href="/logout">Logout</a>
    <hr />

    <p>Token: {{ jwt_token }}</p>
  </div>
  <div v-else>
    You are not logged in
    <a href="login">Login now</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashBoard",
  data() {
    return {
      currentUser: null,
      jwt_token: "",
    };
  },

  created() {
    console.log(localStorage.getItem('jwt_token'));
    this.getUser();
  },

  methods: {
    getUser() {
      axios
        .get(
          "http://localhost:8000/api/user/me",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          }
        )
        .then((response) => {
          console.log(response);

          this.currentUser = response.data.user;
          this.jwt_token = localStorage.getItem('jwt_token');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
