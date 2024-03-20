<template>
    <h4>This is create info page</h4>
    <form @submit.prevent="saveInfo">
      <table>
        <tr>
          <!-- <td><label for="user_id">user_id:</label></td> -->
          <td><input type="text" id="user_id" v-model="user_id" required hidden/></td>
        </tr>
        <tr>
          <td><label for="full_name">full_name:</label></td>
          <td><input type="text" id="full_name" v-model="full_name" required /></td>
        </tr>
        <tr>
          <td><label for="date_of_birth">date_of_birth:</label></td>
          <td><input type="text" id="date_of_birth" v-model="date_of_birth" required /></td>
        </tr>
        <tr>
          <td><label for="gender">gender:</label></td>
          <td><input type="text" id="gender" v-model="gender" required /></td>
        </tr>
        <tr>
          <td><label for="bio">bio:</label></td>
          <td><input type="text" id="bio" v-model="bio" required /></td>
        </tr>
        <button type="submit">Submit</button>
      </table>
    </form>
</template>

<script>
import axios from 'axios';
import {getInfo} from '../MyUtil.js'

export default {
  name: "CreateInfo",
  data() {
    return {
      user_id: "",
      full_name: "",
      date_of_birth: "",
      gender: "",
      bio: "",
    };
  },
  async created() {
    let userJson = localStorage.getItem('user');
    let user = JSON.parse(userJson);
    console.log(user);
    this.user_id = user.id;

     let info = await getInfo(this.user_id);

     if (info){
      this.user_id = info.user_id;
      this.full_name = info.full_name;
      this.date_of_birth = info.date_of_birth;
      this.gender = info.gender;
      this.bio = info.bio;
     }
    //this.saveInfo();
  },
  methods: {
    async saveInfo() {
      axios
        .post("http://localhost:8000/api/info/create", {
          user_id: this.user_id,
          full_name: this.full_name,
          date_of_birth: this.date_of_birth,
          gender: this.gender,
          bio: this.bio,
        })
        .then((response) => {
          console.log(response);
          console.log("response");

          this.$router.push("/info/show");
        })
        .catch((error) => {
          console.log(error);
          console.log("error");

          this.errorMessage = "Create info failed";
        });
    },
  },
};
</script>
