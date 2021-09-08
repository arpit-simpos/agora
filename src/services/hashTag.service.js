import http from "../http-common";

class hashTagService {
    //async gethash(data) {
    //    return await http.post("v1/hashtags/search", data);
    //}
    async getAll(data) {
        return await http.post("HashTag/hashtags",data);
    }
    get(name) {
        return http.get(`HashTag/getByName/${name}`);
    }
    create(data) {
        return http.post("HashTag/insert", data);
    }
    delete(id) {
        return http.delete(`HashTag/hashTag`);
    }
    update(name, data) {
        return http.post(`HashTag/hashTag/${name}`, data);
    }

}

export default new hashTagService();