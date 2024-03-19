<template>

  <h3>This is Logout page</h3>
  You have logged out! <br>
  <a href="/login">
    click to back to login page
  </a>
</template>

<script>
import axios from "axios";
export default {
  name: "LogoutComp",
  data() {
    return {};
  },

  created() {
    //console.log(localStorage.getItem('jwt_token'));
    axios
      .post(
        "http://localhost:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("response");
        //console.log();

        localStorage.removeItem("jwt_token");

        localStorage.removeItem("user");

        //this.$router.push('/login');
      })
      .catch((error) => {
        console.log(error);
        console.log("error while logouts");
      });
  },
};
</script>
