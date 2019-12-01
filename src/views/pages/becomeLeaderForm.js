import React from "react";
import { connect } from "react-redux";
import { Button, CustomInput, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/login_signupForm.css";
import * as becomeLeaderAction from "../../core/becomeLeader/becomeLeader_action";

class becomeLeaderForm extends React.Component {
  constructor() {
    super();
    this.state = {
      leader_info: {
        nationalID: "",
        has_car: false,
        car_capacity: "",
        car_model: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNum = this.handleChangeNum.bind(this);
    this.handleChange_hasCar = this.handleChange_hasCar.bind(this);
  }

  async handleSubmit(e) {
    console.log("in handle submite");
    console.log(localStorage.access);
    e.preventDefault();
    await this.props.becomeLeader(this.state.leader_info);
    if (this.props.isLeader) return window.location.replace("/");
    else alert(" راهنمای گردشگری شدن برای شماامکان پذیر نمی باشد");
  }

  handleChange(e) {
    let curentSt = this.state.leader_info;
    curentSt[e.target.name] = e.target.value;
    this.setState({
      leader_info: curentSt
    });
  }
  handleChangeNum(e) {
    console.log(e.target.validity.valid && e.target.value > 0);
    if (e.target.validity.valid) {
      this.handleChange(e);
    }
  }

  handleChange_hasCar() {
    let curentSt = this.state.leader_info;
    curentSt["has_car"] = !curentSt["has_car"];
    this.setState({
      leader_info: curentSt
    });
  }

  render() {
    console.log("has car:", this.state.has_car);

    const model = this.state.leader_info.has_car ? (
      <Input
        name="car_model"
        value={this.state.leader_info.car_model}
        onChange={this.handleChange}
        type="text"
      />
    ) : (
      <Input
        name="car_model"
        disabled
        value={this.state.leader_info.car_model}
        onChange={this.handleChange}
        type="text"
      />
    );
    const capacity = this.state.leader_info.has_car ? (
      <Input
        name="car_capacity"
        value={this.state.leader_info.car_capacity}
        onChange={this.handleChangeNum}
        type="number"
      />
    ) : (
      <Input
        name="car_capacity"
        disabled
        value={this.state.leader_info.car_capacity}
        onChange={this.handleChangeNum}
        type="number"
      />
    );
    return (
      <Form id="Form" onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label id="form_label" className="mr-sm-2">
            کد ملی
          </Label>
          <Input
            name="nationalID"
            value={this.state.leader_info.nationalID}
            onChange={this.handleChangeNum}
            pattern="[0-9]{*}"
            type="number"
            id="form_input"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label id="form_label">
            آیا برای گردشگری درصورت درخواست مالک خودرو میباشید؟
          </Label>
          <CustomInput
            onChange={this.handleChange_hasCar}
            type="switch"
            id="exampleCustomSwitch"
            className="switch"
            name="customSwitch"
          />
          <Label id="form_label">مدل ماشین</Label>
          {model}
          <Label id="form_label">ظرفیت ماشین</Label>
          {capacity}
        </FormGroup>
        <Button id="form_submit">ثبت</Button>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLeader: state.beacomeLeader_reducer.isLeader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    becomeLeader: leader_info =>
      dispatch(becomeLeaderAction.beacomeLeader(leader_info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(becomeLeaderForm);
