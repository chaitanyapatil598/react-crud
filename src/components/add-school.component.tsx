import { ChangeEvent, Component } from "react";
import SchoolData from '../types/school.type';
import SchoolDataService from '../services/school.service'
type Props = {};


type State = SchoolData & {
  submitted: boolean
};
export default class AddSchool extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
    this.onChangeregisterNo = this.onChangeregisterNo.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeIsOpen = this.onChangeIsOpen.bind(this);
    this.onChangeEmailId = this.onChangeEmailId.bind(this);
    this.onChangeTelephoneNo = this.onChangeTelephoneNo.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.saveSchool = this.saveSchool.bind(this);
    this.newSchool = this.newSchool.bind(this);



    this.state = {
      _id: null,
      schoolName: "",
      registerNo: null,
      state: "",
      isOpen: false,
      year: 2021,
      telephoneNo: 123456789,
      emailId: "",
      address: "",
      submitted: false
    };
  }

  saveSchool() {
    const data: SchoolData = {
      schoolName: this.state.schoolName,
      registerNo: this.state.registerNo,
      state: this.state.state,
      isOpen: this.state.isOpen,
      year: this.state.year,
      telephoneNo: this.state.telephoneNo,
      emailId: this.state.emailId,
      address: this.state.address

    };
    console.log('save school form data   ', data)
    SchoolDataService.create(data)
      .then((response: any) => {
        this.setState({
          _id: response.data._id,
          schoolName: response.data.schoolName,
          registerNo: response.data.registerNo,
          state: response.data.state,
          submitted: true,
          isOpen: response.data.isOpen,
          year: response.data.year,
          emailId: response.data.emailId,
          telephoneNo: response.data.telephoneNo
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newSchool() {
    this.setState({
      _id: null,
      schoolName: "",
      registerNo: null,
      state: "",
      isOpen: false,
      address: "",
      year: 2021,
      telephoneNo: 123456789,
      emailId: "",
      submitted: false
    })
  }

  onChangeSchoolName(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      schoolName: event.target.value
    });
  }

  onChangeregisterNo(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      registerNo: Number(event.target.value)
    });
  }

  onChangeState(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      state: event.target.value
    });
  }

  onChangeIsOpen(event: string) {
    this.setState({
      isOpen: event === 'true' ? true : false
    });
  }

  onChangeYear(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      year: Number(event.target.value)
    });
  }

  onChangeTelephoneNo(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      telephoneNo: Number(event.target.value)
    });
  }

  onChangeEmailId(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      emailId: event.target.value
    });
  }
  onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      address: event.target.value
    });
  }

  render() {
    const { schoolName, state, year, registerNo, submitted, emailId, telephoneNo, isOpen, address } = this.state

    return (
      <div className="submit-form">

        {submitted ? (<div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.newSchool}>
            Add School
          </button>
        </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                className="form-control"
                id="schoolName"
                required
                value={schoolName}
                onChange={this.onChangeSchoolName}
                name="schoolName"
              />
            </div>

            <div>
              <label htmlFor="registerNo">register No</label>
              <input
                type="number"
                className="form-control"
                id="registerNo"
                required
                value={Number(registerNo)}
                onChange={this.onChangeregisterNo}
                name="registerNo"
              />
            </div>
            <div>
              <label htmlFor="state">state</label>
              <input
                type="text"
                className="form-control"
                id="state"
                required
                value={state}
                onChange={this.onChangeState}
                name="state"
              />
            </div>
            <div >
              <label htmlFor="isOpen">School Status</label>
              <input
                type="radio"
                required
                checked={isOpen === true ? true : false}
                name="isOpen"
                readOnly
                onClick={() => this.onChangeIsOpen(isOpen === true ? 'false' : 'true')}
              />
            </div>

            <div>
              <label htmlFor="year">Year</label>
              <input
                type="number"
                className="form-control"
                id="year"
                required
                value={year}
                onChange={this.onChangeYear}
                name="year"
              />
            </div>
            <div>
              <label htmlFor="telephoneNo"> Telephone No</label>
              <input
                type="number"
                className="form-control"
                id="telephoneNo"
                required
                value={telephoneNo}
                onChange={this.onChangeTelephoneNo}
                name="year"
              />
            </div>

            <div>
              <label htmlFor="emailId"> email Id </label>
              <input
                type="text"
                className="form-control"
                id="emailId"
                required
                value={emailId}
                onChange={this.onChangeEmailId}
                name="emailId"
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
            <button onClick={this.saveSchool} className="btn btn-success">
              Submit
            </button>
          </div>)}
      </div>
    );
  }

}