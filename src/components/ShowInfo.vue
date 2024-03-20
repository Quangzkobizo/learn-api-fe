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

      </template>
      <template v-else>
        Loading...
      </template>
      <hr/>

      <div>
        Want to change your info?
      <a href="/info/create"> Edit my info </a>
      </div>
    </div>
    <div v-else>
      You have no info yet, let's add!
      <a href="/info/create"> Add my info </a>
    </div>
  </template>
  
  <script>
  //import axios from "axios";
  import {getInfo} from '../MyUtil.js';
  
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
    .info-table td{
        text-align: left;
        padding-right: 20px;
    }
</style>
  