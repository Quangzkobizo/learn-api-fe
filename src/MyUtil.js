import axios from 'axios';

export async function getInfo(userId) {
    try {
        const response = await axios.get(`http://localhost:8000/api/info/${userId}/show`);
        return response.data.info;
    } catch (error) {
        console.error("Error fetching info:", error);
        return null;
    }
}
