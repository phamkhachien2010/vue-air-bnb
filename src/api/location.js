import axiosApi from ".";

export const getLocationListAPI = (location) => {
    return axiosApi.get(`/api/locations?location=${location}`)
}