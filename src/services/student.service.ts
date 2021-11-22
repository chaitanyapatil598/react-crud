import http from "../http-common";
import StudentData from "../types/student.type"

class StudentDataService {
  create(data: StudentData) {
    return http.post<StudentData>(`/student/add`, data);
  };

  delete(_id: any) {
    return http.delete<any>(`/student/delete/${_id}`);
  };

  getAll() {
    return http.get<Array<StudentData>>("/student/findList");
  };

};


export default new StudentDataService();