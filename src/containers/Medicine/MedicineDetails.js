import React, { useEffect } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';
import '../../custom.css';
import { connect } from "react-redux";
import { crudAction } from "../../store/actions/common";
import { MEDICINE_URL } from '../../shared/allApiUrl';
import { getImageUrl } from '../../shared/helpers';
import moment from 'moment';

function MedicineDetails(props) {
  let medicineId = props.match.params.medicineId;

  useEffect(() => {
    props.crudActionCall(`${MEDICINE_URL}/${medicineId}`, null, "GET")
    return () => {

    }
  }, []);

  const medicineData = props.medicine.medicine;

  return (
    <div classNam="animated fadeIn">
      <Row>
        <Col xs="12">
          <Card>
            <CardHeader>
              <i classNameName="fa fa-edit"></i>View Profile
                </CardHeader>
            <CardBody>
              {medicineData && (
                <ul className="list-unstyled todo-list">
                  <li>
                    <p>
                      <span className="title">Name</span>
                      <span className="short-description">{`${medicineData.first_name} ${medicineData.last_name}`}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Email Address</span>
                      <span className="short-description">{medicineData.email}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Mobile Number</span>
                      <span className="short-description">{medicineData.phone_number ? medicineData.phone_number : ''}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Date Of Birth</span>
                      <span className="short-description">{medicineData.date_of_birth ? moment(medicineData.date_of_birth).format('YYYY-MM-DD') : ''}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Address</span>
                      <span className="short-description">{medicineData.user_address ? medicineData.user_address : ''}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Join Date</span>
                      <span className="short-description">{moment(medicineData.created).format('MMM D, YYYY')}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Status</span>
                      <span className="short-description">{medicineData.status == 1 ? "Active" : "Inactive"}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="title">Image</span>
                      <span className="short-description">
                        <img src={getImageUrl(medicineData.profile_picture)} className="show-image" alt="..." />
                      </span>
                    </p>
                  </li>
                </ul>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
const mapStateToProps = state => {
  const { medicine } = state;
  return {
    medicine
  }
}
const mapDispatchToProps = dispatch => {
  return {
    crudActionCall: (url, data, actionType) => dispatch(crudAction(url, data, actionType, "MEDICINE"))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MedicineDetails);