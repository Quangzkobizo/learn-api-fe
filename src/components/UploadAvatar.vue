<template>
    <div>
      <!-- Input field to select file -->
      <input type="file" @change="handleFileUpload">
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      // Method to handle file upload
      handleFileUpload(event) {
        // Get the selected file
        const file = event.target.files[0];
        // Create FormData object to hold the file
        const formData = new FormData();
        formData.append('image', file);
  
        // Get JWT token from local storage
        const token = localStorage.getItem('jwt_token');
  
        // Create headers containing JWT token
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        };
  
        // Send upload request to the server with JWT token in header
        axios.post('http://localhost:8000/api/user/upload-avatar', formData, { headers })
          .then(() => {
            console.log('Image uploaded successfully');
          })
          .catch(error => {
            console.error('Error uploading image:', error);
          });

          //back to /user/me
          this.$router.push('/user/me');
      }
    }
  }
  </script>
  