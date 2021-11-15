import { ChangeEvent, Component } from "react";
import TeacherData from "../types/teacher.type";
import TeacherDataService from '../services/teacher.service'
type Props = {};


type State = TeacherData & {
  submitted: boolean
};
export default class AddTeacher extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangeWorkExperience = this.onChangeWorkExperience.bind(this);
    this.onChangeIsActive = this.onChangeIsActive.bind(this);
    this.onChangeSchoolId = this.onChangeSchoolId.bind(this);
    this.saveTeacher = this.saveTeacher.bind(this);
    this.newTeacher = this.newTeacher.bind(this);



    this.state = {
      _id: null,
      teacherName: "",
      address: "",
      department: "",
      workExperience: 0.5,
      isActive: false,
      schoolId: "",
      submitted: false
    };
  }

  saveTeacher() {
    const data: TeacherData = {
      teacherName: this.state.teacherName,
      address: this.state.address,
      department: this.state.department,
      workExperience: this.state.workExperience,
      isActive: this.state.isActive,
      schoolId: this.state.schoolId
    };

    console.log('save teacher form data   ', data)
    TeacherDataService.create(data)
      .then((response: any) => {
        this.setState({
          _id: response.data._id,
          teacherName: response.data.teacherName,
          address: response.data.address,
          department: response.data.department,
          workExperience: response.data.workExperience,
          isActive: response.data.isActive,
          schoolId: response.data.schoolId,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newTeacher() {
    this.setState({
      _id: null,
      teacherName: "",
      address: "",
      department: "",
      workExperience: 0.5,
      isActive: false,
      schoolId: "",
      submitted: false
    })
  }

  onChangeTeacherName(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      teacherName: event.target.value
    });
  }

  onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      address: event.target.value
    });
  }

  onChangeDepartment(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      department: event.target.value
    });
  }

  onChangeIsActive(event: string) {
    this.setState({
      isActive: event === 'true' ? true : false
    });
  }

  onChangeWorkExperience(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      workExperience: Number(event.target.value)
    });
  }

  onChangeSchoolId(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      schoolId: event.target.value
    });
  }



  render() {
    const { teacherName, department, address, workExperience, schoolId, isActive, submitted } = this.state

    return (
      <div className="submit-form">

        {submitted? (<div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.newTeacher}>
            Add Teacher
          </button>
        </div>
        ) :(
          <div>
            <div className="form-group">
              <label htmlFor="teacherName">Teacher Name</label>
              <input
                type="text"
                className="form-control"
                id="teacherName"
                required
                value={teacherName}
                onChange={this.onChangeTeacherName}
                name="teacherName"
              />
            </div>

            <div>
              <label htmlFor="address"> Address </label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={address}
                onChange={this.onChangeAddress}
                name="address"
              />
            </div>
            <div>
              <label htmlFor="department">Department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                required
                value={department}
                onChange={this.onChangeDepartment}
                name="department"
              />
            </div>
            <div >
              <label htmlFor="isActive">Teacher Status</label>
              <input
                type="radio"
                required
                checked={isActive === true ? true : false}
                name="isActive"
                readOnly
                onClick={() => this.onChangeIsActive(isActive === true ? 'false' : 'true')}
              />
            </div>

            <div>
              <label htmlFor="workExperience">Workexperience</label>
              <input
                type="number"
                className="form-control"
                id="workexperience"
                required
                value={Number(workExperience)}
                onChange={this.onChangeWorkExperience}
                name="workExperience"
              />
            </div>
            <div>
              <label htmlFor="schoolId"> School Id</label>
              <input
                type="text"
                className="form-control"
                id="schoolId"
                required
                value={schoolId}
                onChange={this.onChangeSchoolId}
                name="schoolId"
              />
            </div>

            <button onClick={this.saveTeacher} className="btn btn-success">
              Submit
            </button>
          </div>)}
      </div>
    ); 
  }

}