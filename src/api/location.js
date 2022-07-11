import axios from "axios"

export const getLocationListAPI = (location) => {
    return axios.get(`https://airbnb.cybersoft.edu.vn/api/locations?location=${location}`, {
        headers: {
            tokenByClass: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwMyIsIkhldEhhblN0cmluZyI6IjEyLzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDgwMzIwMDAwMCIsIm5iZiI6MTY0NzUzNjQwMCwiZXhwIjoxNjcwOTUwODAwfQ.p9HfB3wfHiMPOhk-B2tIt1JOp-IxfMXGRoFv610OjtY'
        }
    });
}