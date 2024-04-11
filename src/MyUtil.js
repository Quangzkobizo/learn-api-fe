import axios from 'axios';

export async function getInfo() {
    try {
        const response = await axios.get(`http://localhost:8000/api/user/me`);
        return response.data.info;
    } catch (error) {
        console.error("Error fetching info:", error);
        return null;
    }
}
