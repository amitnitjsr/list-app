import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Form,
  Row,
} from 'reactstrap';
import InputUI from '../../UI/InputUI';
import FileInput from "../../UI/FileInput";
import { MEDICINE_URL } from '../../shared/allApiUrl';
import { crudAction } from '../../store/actions/common';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
var CryptoJS = require("crypto-js");

function MedicineForm(props) {
  const initialFields = {
    name: "",
    category: "",
    rating: 0,
    price: 0,
    unit: 0,
    image: null,
  }
  const [fields, setFields] = useState(initialFields);
  const [medicineId, setmedicineId] = useState(null);
  const { handleSubmit, register, errors } = useForm();
  const params = props.match.params;

  useEffect(() => {
    setmedicineId(params.medicineId)
    if (params.medicineId) {
      props.crudActionCall(`${MEDICINE_URL}/${params.medicineId}`, null, "GET")
    }
  }, [params]);

  useEffect(() => {

    const action = props.medicine.action;

    if (props.medicine.medicine && params.medicineId) {
      setFields({ ...fields, ...props.medicine.medicine[0] });
    }
    if (action.isSuccess && action.type === "ADD" || action.type === "UPDATE")
      props.history.push("/medicine/list")

  }, [props.medicine]);

  const onSubmit = (data) => {
    if (medicineId) data.medicineId = medicineId;
    if (data.poster[0]) {
      var img = document.querySelector('img');  // $('img')[0]
      img.src = URL.createObjectURL(data.poster[0]); // set src to blob url
      // this.setState({ uploadedImage: img.src })
      data.poster = img.src;

      console.log('data', img.src);

    }
    console.log('data', data.poster[0]);


    if (data.poster[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        // this.setState({ imageURI: ev.target.result });
        console.log('imageURI', ev.target.result);



      }.bind(this);
      reader.readAsDataURL(data.poster[0]);
    }


    if (medicineId) {
      let tmp = data.genre;
      data.genre = tmp.split(',');
      data.modified_on = new Date();
      data.modified_by = ''
      props.crudActionCall(MEDICINE_URL + `/${medicineId}`, data, medicineId ? "UPDATE" : "ADD");
    }
    else {
      let tmp = data.genre;
      data.genre = tmp.split(',');
      data.created_on = new Date();
      data.created_by = 'Admin'
      props.crudActionCall(MEDICINE_URL, data, medicineId ? "UPDATE" : "ADD");
    }
    props.resetAction();
    // props.crudActionCall(MEDICINE_URL, data, medicineId ? "UPDATE" : "ADD")
  }

  const readURI = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        console.log('url', ev.target.result);
        // Encrypt
        var ciphertext = CryptoJS.AES.encrypt(ev.target.result, 'secret key 123').toString();
        console.log('ciphertext', ciphertext)
        // Decrypt
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
        console.log('CryptoJS', bytes)

        var originalText = bytes.toString(CryptoJS.enc.Utf8);

        console.log(originalText); // 'my message'
        // this.setState({ imageURI: ev.target.result });
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleChange = (e) => {
    console.log('handleChange')
    readURI(e); // maybe call this with webworker or async library?
  }

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <i className="fa fa-edit"></i>{medicineId ? `Movie Update` : `Movie Add`}
            </CardHeader>
            <Form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
              <CardBody>
                {/* First Name */}
                <InputUI
                  label="Medicine Name"
                  name="name"
                  type="text"
                  errors={errors}
                  innerRef={register({
                    required: 'This is required field',
                  })}
                  fields={fields}
                />
                {/* Director Name */}
                <InputUI
                  label="Category"
                  name="category"
                  errors={errors}
                  innerRef={register({
                    required: 'This is required field',
                  })}
                  fields={fields}
                />
                <InputUI
                  label="Price"
                  name="price"
                  type="number"
                  errors={errors}
                  innerRef={register({
                    required: 'This is required field',
                  })}
                  fields={fields}
                />
                {/* Date Of Birth */}
                <InputUI
                  label="Unit"
                  name="unit"
                  type="number"
                  errors={errors}
                  innerRef={register({
                    required: 'This is required field',
                  })}
                  fields={fields}
                />
                <InputUI
                  label="User Rating"
                  name="rating"
                  type="number"
                  errors={errors}
                  innerRef={register({
                    required: 'This is required field',
                  })}
                  fields={fields}
                  min="1"
                  max="10"
                />
                <input
                  label="Medicine Image..."
                  name="image"
                  // register={register}
                  // errors={errors}
                  // required={false}
                  onChange={(e) => handleChange(e)}
                  type="file"
                />

              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = state => {
  const { medicine } = state;
  return {
    medicine
  }
}
const mapDispatchToProps = dispatch => {
  return {
    crudActionCall: (url, data, actionType) => dispatch(crudAction(url, data, actionType, "MEDICINE")),
    resetAction: () => dispatch({ type: "RESET_MEDICINE_ACTION" })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MedicineForm));