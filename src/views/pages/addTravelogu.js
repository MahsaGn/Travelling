import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/login_signupForm.css'
import * as addTraveloguAction from '../../core/addTravelogu/addTravelogu_action'
import * as allPlaces from '../../core/allPlaces/allPlaces_action'
import "@kenshooui/react-multi-select/dist/style.css"
import MultiSelect from "@kenshooui/react-multi-select";
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.css';


class addTravelogu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelogu_info: {
        text: "",
        image1: "",
        image2: "",
        image3: "",
        choosedPlaces: [],
        title: ""
      },
      places: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMultiChoice = this.handleChangeMultiChoice.bind(this);
    this.updateStateImage = this.updateStateImage.bind(this);
  }

  async componentWillMount() {
    await this.props.allPlace()
    if (this.props.allPlaceLoaded && this.props.allPlaceInfo != undefined) {
      let options = []
      this.props.allPlaceInfo.map((place) => {
        let val = { id: place.id, label: place.title }
        options.push(val)
      })
      this.setState({
        places: options
      })
    }
  }

  async handleSubmit(e) {
    console.log("in handle submite")
    e.preventDefault();
    let currents = this.state.travelogu_info
    if (currents.title != "" && currents.text != ""
      && currents.choosedPlaces != "" && currents.image1 != ""
      && currents.image2 != "" && currents.image3 != "") {
      let list_placeId = this.state.travelogu_info.choosedPlaces.map(x => x.id)
      currents["choosedPlaces"] = list_placeId
      this.setState({ travelogu_info: currents })
      await this.props.addTravelogu(this.state.travelogu_info)
      if (this.props.isTraveloguAdded)
        return window.location.replace('/')
      else
        alert("امکان اضافه کردن سفرنامه نمیباشد، لطفا بعدا امتحان کنید")
    }
    else
      alert("ابتدا همه ی فیلد ها را پر کنید")
  }

  handleChange(e) {
    let curentSt = this.state.travelogu_info
    curentSt[e.target.name] = e.target.value
    this.setState({ travelogu_info: curentSt })
  }

  handleChangeMultiChoice(selectedItems) {
    console.log(selectedItems)
    let curentSt = this.state.travelogu_info
    curentSt["choosedPlaces"] = selectedItems
    this.setState({ travelogu_info: curentSt })
    console.log(selectedItems)

  }

  updateStateImage(e) {
    let curentSt = this.state.travelogu_info
    curentSt[e.target.name] = e.target.files[0]
    this.setState({ travelogu_info: curentSt })
  }

  render() {
    let validTitle = this.state.travelogu_info.title == "" ? "invalid" : "";
    let validTravelogue = this.state.travelogu_info.text == "" ? "invalid" : "";
    let validPlace = this.state.travelogu_info.choosedPlaces == "" ? "invalid" : "";
    let validImg1 = this.state.travelogu_info.image1 == "" ? "invalid" : "";
    let validImg2 = this.state.travelogu_info.image2 == "" ? "invalid" : "";
    let validImg3 = this.state.travelogu_info.image3 == "" ? "invalid" : "";
    return (
      <div className="travelogueForm">
        <Header />
        <Form id="Form" onSubmit={this.handleSubmit}>
          <h3 className="form_title">سفرنامه جدید</h3>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label id="form_label" className="mr-sm-2">موضوع سفرنامه</Label>
            <Input className="form_input" className={validTitle} name="title" type="text" onChange={this.handleChange} value={this.state.travelogu_info.title} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label id="form_label" className="mr-sm-2">متن سفرنامه</Label>
            <Input className="text_area_form" className={validTravelogue} type="textarea" name="text" onChange={this.handleChange} value={this.state.travelogu_info.text} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label id="form_label">مکان ها</Label>
            <MultiSelect
              className={validPlace}
              style={{ borderColor: "rgba(160, 0, 0, 0.65)" }}
              items={this.state.places}
              selectedItems={this.state.travelogu_info.choosedPlaces}
              onChange={this.handleChangeMultiChoice}
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label id="form_label">1بارگذاری عکس</Label>
            <Input className={"form_input " + validImg1} onChange={this.updateStateImage} type="file" name="image1" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label id="form_label">2بارگذاری عکس</Label>
            <Input className={"form_input " + validImg2} onChange={this.updateStateImage} type="file" name="image2" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label id="form_label">3بارگذاری عکس</Label>
            <Input className={"form_input " + validImg3} onChange={this.updateStateImage} type="file" name="image3" />
          </FormGroup>
          <br /><br />
          <Button id="placeform_submit">ثبت</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    allPlaceInfo: state.allPlaces_reducer.allPlace_info,
    allPlaceLoaded: state.allPlaces_reducer.allPlaceLoaded,
    isTraveloguAdded: state.addTravelogu_reducer.isTraveloguAdded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTravelogu: (travelogu_info) => dispatch(addTraveloguAction.addTravelogu(travelogu_info)),
    allPlace: () => dispatch(allPlaces.allPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addTravelogu);