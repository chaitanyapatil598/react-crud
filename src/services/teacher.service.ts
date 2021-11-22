import http from "../http-common";
import TeacherData from "../types/teacher.type"

class TeacherDataService {
  create(data: TeacherData) {
    return http.post<TeacherData>(`/teacher/add`, data);
  };

  getOne({ _id }: TeacherData) {
    return http.get<TeacherData>(`/teacher/OneTeacher${_id}`);
  };

  getAll() {
    return http.get<Array<TeacherData>>("/teacher/AllList");
  };

  update(data: TeacherData, _id: any) {
    return http.put<any>(`/teacher/update/:teacherId${_id}`, data);
  };

};

export default new TeacherDataService();