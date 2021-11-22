import { ChangeEvent, Component } from "react";
import StudentData from "../types/student.type";
import StudentDataService from '../services/student.service'
type Props = {};


type State = StudentData & {
  submitted: boolean
};
export default class AddStudent extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeRollNo = this.onChangeRollNo.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeIsActive = this.onChangeIsActive.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeSchoolId = this.onChangeSchoolId.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.newStudent = this.newStudent.bind(this);



    this.state = {
      _id: null,
      studentName: "",
      rollNo: 1,
      address: "",
      city: "",
      isActive: false,
      year: 2020,
      schoolId: "",
      submitted: false
    };
  }

  saveStudent() {
    const data: StudentData = {
      studentName: this.state.studentName,
      rollNo: this.state.rollNo,
      address: this.state.address,
      city: this.state.city,
      isActive: this.state.isActive,
      year: this.state.year,
      schoolId: this.state.schoolId
    };

    console.log('save student form data   ', data)
    StudentDataService.create(data)
      .then((response: any) => {
        this.setState({
          _id: response.data._id,
          studentName: response.data.studentName,
          rollNo: response.data.rollNo,
          address: response.data.address,
          city: response.data.city,
          isActive: response.data.isActive,
          year: response.data.year,
          schoolId: response.data.schoolId,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newStudent() {
    this.setState({
      _id: null,
      studentName: "",
      rollNo: 1,
      address: "",
      city: "",
      isActive: false,
      year: 2020,
      schoolId: "",
      submitted: false
    })
  }

  onChangeStudentName(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      studentName: event.target.value
    });
  }

  onChangeRollNo(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      rollNo: Number(event.target.value)
    });
  }
  onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      address: event.target.value
    });
  }

  onChangeCity(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      city: event.target.value
    });
  }

  onChangeIsActive(event: string) {
    this.setState({
      isActive: event === 'true' ? true : false
    });
  }

  onChangeYear(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      year: Number(event.target.value)
    });
  }

  onChangeSchoolId(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      schoolId: event.target.value
    });
  }



  render() {
    const { studentName, rollNo, address, city, year, schoolId, isActive, submitted } = this.state

    return (
      <div className="submit-form">

        {submitted ? (<div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.newStudent}>
            Add Student
          </button>
        </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input
                type="text"
                className="form-control"
                id="studentName"
                required
                value={studentName}
                onChange={this.onChangeStudentName}
                name="studentName"
              />
            </div>
            <div>
              <label htmlFor="rollNo"> RollNo </label>
              <input
                type="text"
                className="form-control"
                id="rollNo"
                required
                value={rollNo}
                onChange={this.onChangeRollNo}
                name="rollNo"
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
              <label htmlFor="city"> City </label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={city}
                onChange={this.onChangeCity}
                name="city"
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
              <label htmlFor="year"> Year </label>
              <input
                type="number"
                className="form-control"
                id="year"
                required
                value={Number(year)}
                onChange={this.onChangeYear}
                name="year"
              />
            </div>
            <div>
              <label htmlFor="schoolId"> School Id </label>
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

            <button onClick={this.saveStudent} className="btn btn-success">
              Submit
            </button>
          </div>)}
      </div>
    );
  }

}