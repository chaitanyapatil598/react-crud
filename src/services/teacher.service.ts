import http from "../http-common";
import TeacherData from "../types/teacher.type"

class TeacherDataService {
  create(data: TeacherData) {
    return http.post<TeacherData>(`/teacher/add`, data);
  }


}

export default new TeacherDataService();