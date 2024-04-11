import { createRouter, createWebHistory } from 'vue-router'; // Import từ vue-router

// Import các component cần sử dụng
import Login from '../components/Login.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Dashboard from '@/components/Dashboard.vue';
import Logout from '@/components/Logout.vue';
import CreateInfo from '@/components/CreateInfo.vue';
import ShowInfo from '@/components/ShowInfo.vue';
import Register from '@/components/Register.vue'
import UploadAvatar from '@/components/UploadAvatar.vue';

// Định nghĩa các routes
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/hello',
    name: 'Hello',
    component: HelloWorld
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },

  {
    path: '/info/create',
    name: 'info.create',
    component: CreateInfo,
  },
  {
    path: '/user/me',
    name: 'user.me',
    component: ShowInfo,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/user/upload-avatar',
    name:'user.upload-avatar',
    component: UploadAvatar,
  }
];

// Tạo router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
