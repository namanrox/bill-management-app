import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Preloader } from "react-materialize";
import { getBills, getCategoryBills } from "../../actions/billActions";
import Dropdown from "../layouts/Dropdown";
import Bill from "./Bill";
import "./Style.css";

const Bills = ({ bills, category_bills, getBills, getCategoryBills }) => {
  const [render, setRender] = useState(false);
  const [category, setCategory] = useState("All Categories");

  useEffect(() => {
    getBills();
    setTimeout(() => {
      setRender(true);
    }, 500);
  }, [getBills]);

  const onSelect = (event) => {
    getCategoryBills(event.target.value);
    setCategory(event.target.value);
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 1000);
  };

  let budget = 40000;
  bills.sort((a, b) => parseInt(b.amount) - parseInt(a.amount));
  const updated_bills = bills.map((bill) => {
    if (bill.amount <= budget) {
      budget -= bill.amount;
      return { ...bill, should_be_paid: true };
    } else {
      return { ...bill, should_be_paid: false };
    }
  });
  updated_bills.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  const bills_to_render =
    category === "All Categories" ? updated_bills : category_bills;

  if (render === false) {
    return (
      <div className="preloader">
        <Row>
          <Col s={5}></Col>
          <Col s={2}>
            <Preloader active color="blue" flashing />
          </Col>
          <Col s={5}></Col>
        </Row>
      </div>
    );
  }

  return (
    <div className="container">
      <Dropdown onSelect={onSelect} bills={bills} category={category} />
      <Row>
        {bills_to_render &&
          bills_to_render.map((bill) => (
            <Col key={bill.id} className="col-sm-12 col-md-12 col-lg-6">
              <Bill bill={bill} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bills: state.bill.bills,
  category_bills: state.bill.category_bills,
});

export default connect(mapStateToProps, { getBills, getCategoryBills })(Bills);
