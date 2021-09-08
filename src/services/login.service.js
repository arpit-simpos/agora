import http from "../http-common";

class loginService {
    //async gethash(data) {
    //    return await http.post("v1/hashtags/search", data);
    //}
     login(data) {
        return  http.post("users", data);
    }
 

}

export default new loginService();