<template>
    This is Register page <hr/>

    <h1>Register</h1>
    <form @submit.prevent="register">
      <table>
        <tr>
          <td><label for="username">Username:</label></td>
          <td><input type="text" v-model="username" required /></td>
        </tr>

        <tr>
          <td><label for="email">Email:</label></td>
          <td><input type="text" v-model="email" required /></td>
        </tr>

        <tr>
          <td><label for="password">Password:</label></td>
          <td><input type="password" v-model="password" required /></td>
        </tr>

        <tr>
          <td><label for="password">Confirm password:</label></td>
          <td><input type="password" v-model="password_confirm" required /></td>
        </tr>

            

        <button type="submit">Login</button>
      </table>
      <label id="message">{{ message }}</label>

    </form>

</template>

<script>
import axios from 'axios';


export default {
name: 'RegisterPage',
    data () {
        return {
            username: '',
            email: '',
            password: '',
            password_confirm: '',
            message: '',
        }
    },

    methods: {
        register(){
            if (this.password !== this.password_confirm){
                this.message = 'Wrong password confirm';
                return;
            }
            
            this.sendRegisterRequest();
        },

        async sendRegisterRequest() {
            axios
                .post('http://localhost:8000/api/auth/register',{
                    name: this.username,
                    email: this.email,
                    password: this.password,
                })
                .then((response=>{
                    this.$router.push('/login');
                    console.log(response);
                })
                )
                .catch((error) =>{
                    console.log(error);
                })
        }

    }
}

</script>

<style>
    #message{
        color: orange;
    }
</style>