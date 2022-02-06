import api from "."
export default {
    find : ()=> api.get("/api/albums").then ((res ) => res.data),
    detail : (id) => api.get(`/api/albums/${id}`).then((res) => res.data )
}