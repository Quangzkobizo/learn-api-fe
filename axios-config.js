import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Thay đổi baseURL thành địa chỉ máy chủ thực tế của bạn
  timeout: 5000, // Thời gian chờ cho mỗi yêu cầu là 5 giây
  headers: {
    'Content-Type': 'application/json', // Loại dữ liệu được gửi đi
  },
});

export default axiosInstance;