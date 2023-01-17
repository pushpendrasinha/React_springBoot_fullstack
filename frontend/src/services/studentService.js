import axios from "axios";

const URL = "http://localhost:5000/students";

class StudentService{

    getAll(){
        return axios.get(URL);
    }

    add(student){
        return axios.post(URL, student);
    }

    getByID(id){
        return axios.get(URL + "/" + id);
    }

    delete(id){
        return axios.delete(URL +  "/" + id);
    }

    update(id, student){
        return axios.put(URL + "/" + id, student );
    }

}

export default new StudentService;