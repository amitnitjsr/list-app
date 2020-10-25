import React from 'react';
import Data from '../../assets/img/data/data';
import { Badge, Card, CardBody, Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import './style.css';

export default function Checkout() {
  const minusHandler =() => {

  }
  const plusHandler = () =>{

  }

return (
    <div>
      <section>

         <div className="row">
         {/* Cart Empty */}
         <div className="col-lg-12">
          <Card>
            <div className="my-cart">My Cart</div>
            <CardBody className="image-cardbody">
              <div>
                <img className="image" src={`https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90`} alt="no-image" />
              </div>
              <div className="yourcart">
              Your cart is empty!
              </div>
              <div className="buy">
              It's a good day to buy the items you saved for later!
              </div>
            </CardBody>
          </Card>
         </div>

            {/* <!--Grid column--> */}
            <div className="col-lg-8">
              <Card className="mb-3">
                <CardBody>
                  <div className="pt-4 wish-list">
                    <h5 className="mb-4">Cart (<span>2</span> items)</h5>
                    <div className="row mb-4">
                      <div className="col-md-5 col-lg-3 col-xl-3">
                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                          <img className="img-fluid w-100"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                        </div>
                      </div>
                      <div className="col-md-7 col-lg-9 col-xl-9">
                        <div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5>Blue denim shirt</h5>
                              <p className="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                              <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                              <p className="mb-3 text-muted text-uppercase small">Size: M</p>
                            </div>
                            <div>
                              <div className="def-number-input number-input safari_only mb-0 w-100">
                              <button className="circle-icon">-</button>
                                <input className="input" min="0" name="quantity" value="1" type="number" />
                              <button className="circle-icon">+</button>
                              </div>
                              <small id="passwordHelpBlock" className="form-text text-muted text-center">
                                (Note, 1 piece)
                              </small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span type="button" className="card-link-secondary small text-uppercase mr-3">
                              <i className="fa fa-trash mr-1" /> Remove item </span>
                              <span type="button" className="card-link-secondary small text-uppercase">
                                <i className="fa fa-heart mr-1 heart" />
                                Move to wish list </span>
                            </div>
                            <p className="mb-0"><span><strong id="summary">$17.99</strong></span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </CardBody>
                  </Card>

                  {/* delivery label */}
                  <div class="mb-3">
                  <Card>
                    <CardBody>
                    <h5 class="mb-4">Expected shipping delivery</h5>
                    <p class="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                    </CardBody>
                  </Card>
                </div>

                {/* Card payment label */}
              <div class="mb-3">
              <Card>
                <CardBody>
                <h5 class="mb-4">We accept</h5>
                <img class="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img class="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"/>
                <img class="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"/>
                <img class="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"/>
                  </CardBody>
              </Card>
            </div>
          </div>

              <div className="col-lg-4">
                {/* <!-- Card --> */}
                <div className="mb-3">
                  <Card className="pt-4">
                    <CardBody>
                    <h5 className="mb-3">The total amount of</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Temporary amount
                        <span>$25.98</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Flipkart</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>The total amount of</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span><strong>$53.98</strong></span>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-block">go to checkout</button>
                    </CardBody>
                  </Card>
              </div>
              </div>
            </div>
      </section>
      </div>
    );
}
