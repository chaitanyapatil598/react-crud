import http from "../http-common";
import SchoolData from "../types/school.type"

class SchoolDataService {
   create(data: SchoolData) {
    return http.post<SchoolData>(`/school/add`, data);
  }


}

export default new SchoolDataService();