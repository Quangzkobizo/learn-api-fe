<template>
  <div v-if="user">
    <h3>Your info:</h3>
    <template v-if="info">
      <table class="info-table">
        <tr>
          <td>id</td>
          <td>{{ info.user_id }}</td>
        </tr>
        <tr>
          <td>full_name</td>
          <td>{{ info.full_name }}</td>
        </tr>
        <tr>
          <td>date_of_birth</td>
          <td>{{ info.date_of_birth }}</td>
        </tr>
        <tr>
          <td>gender</td>
          <td>{{ info.gender }}</td>
        </tr>
        <tr>
          <td>bio</td>
          <td>{{ info.bio }}</td>
        </tr>
      </table>
      <div id="edit-box">
        <hr/>
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
//import axios from "axios";
import { getInfo } from "../MyUtil.js";

export default {
  name: "ShowInfo",
  data() {
    return {
      user: null,
      info: null,
    };
  },
  created() {
    this.fetchUserAndInfo();
  },
  methods: {
    async fetchUserAndInfo() {
      try {
        this.user = await this.getUser();
        if (this.user) {
          this.info = await getInfo(this.user.id);
        }
      } catch (error) {
        console.error("Error fetching user or info:", error);
      }
    },
    getUser() {
      let userJson = localStorage.getItem("user");
      let user = JSON.parse(userJson);
      return user;
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
</style>
