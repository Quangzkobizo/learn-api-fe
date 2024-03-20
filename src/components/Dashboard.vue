<template>
  <div v-if="currentUser">
    <h4 id="name">Name : {{ currentUser.name }} <a href="info/show">( info ) </a></h4>

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
export default {
  name: "DashBoard",
  data() {
    return {
      currentUser: null,
      jwt_token: "",
    };
  },

  created() {
    // Lấy dữ liệu từ localStorage
    console.log(localStorage.getItem("user"));

    const userDataJson = localStorage.getItem("user");

    // Chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
    const userData = JSON.parse(userDataJson);

    // Sử dụng dữ liệu đã lấy ra
    console.log(userData);
    this.currentUser = userData;

    //lưu token vào localStorage
    this.jwt_token = localStorage.getItem("jwt_token");
  },

  methods: {},
};
</script>

<style></style>
