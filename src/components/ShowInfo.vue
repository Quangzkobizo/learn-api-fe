<template>
  <div v-if="user">
    <h3>Your info:</h3>
    <template v-if="user.user_info">
      <table class="info-table">
        <tr>
          <td>id</td>
          <td>{{ user.user_info.user_id }}</td>
        </tr>
        <tr>
          <td>full_name</td>
          <td>{{ user.user_info.full_name }}</td>
        </tr>
        <tr>
          <td>date_of_birth</td>
          <td>{{ user.user_info.date_of_birth }}</td>
        </tr>
        <tr>
          <td>gender</td>
          <td>{{ user.user_info.gender }}</td>
        </tr>
        <tr>
          <td>bio</td>
          <td>{{ user.user_info.bio }}</td>
        </tr>
        <tr>
          <td>avatar
            <a href="/user/upload-avatar"><br>Upload avt</a>
          </td>
          <td>
            <img id="avatar"
              
              :src="'http://localhost:8000/images/' + user.user_info.avatar"
              alt=""
            />
          </td>
        </tr>
      </table>
      <div id="edit-box">
        <hr />
        Want to change your info?
        <a href="/info/create"> Edit my info </a>
      </div>
    </template>
    <template v-else>
      You don't have info yet, add it!
      <a href="/info/create"> Add my info </a>
    </template>
  </div>
  <div v-else>
    You need to login first
    <a href="/login"> Login </a>
  </div>

  <hr />
  <a href="/dashboard">Dashboard</a>
</template>

<script>
import axios from "axios";
//import { getInfo } from "../MyUtil.js";

export default {
  name: "ShowInfo",
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get("http://localhost:8000/api/user/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        })
        .then((response) => {
          console.log(response);

          this.user = response.data.user;
          //this.jwt_token = localStorage.getItem("jwt_token");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.info-table td {
  text-align: left;
  padding-right: 20px;
}

#edit-box {
  border: dashed solid black 1px !important;
}

#avatar{
  width: 200px;
}
</style>
