import React, { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { connect } from "react-redux";
import { TextInput, Button, Card, Row, Col } from "react-materialize";
import { addBill, getBills } from "../../actions/billActions";
import { useNavigate } from "react-router-dom";

const AddBill = ({ bills, addBill, getBills }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getBills();
  }, [getBills]);

  const onSubmit = (event) => {
    event.preventDefault();
    const newBill = {
      id: bills.length + 1,
      description,
      category,
      amount,
      date,
    };

    addBill(newBill);
    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
    navigate("/");
  };

  return (
    <Row>
      <Col m={3}></Col>
      <Col m={6} l={4} s={12}>
        <ErrorBoundary>
          <Card className="margin-top">
            <h5 className="heading">Add a Bill</h5>
            <hr />
            <span>
              <TextInput
                value={amount}
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => setAmount(e.target.value)}
                label="amount"
              />
            </span>
            <span>
              <TextInput
                value={category}
                type="text"
                placeholder="Enter Category"
                onChange={(e) => setCategory(e.target.value)}
                label="category"
              />
            </span>
            <span>
              <TextInput
                value={description}
                type="text"
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
                label="description"
              />
            </span>
            <span>
              <TextInput
                value={date}
                type="date"
                placeholder="Enter Date"
                onChange={(e) => setDate(e.target.value)}
                label="date"
              />
            </span>
            <Button waves="light" onClick={onSubmit}>
              Add
            </Button>
          </Card>
        </ErrorBoundary>
      </Col>
      <Col m={3}></Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  bills: state.bill.bills,
});

export default connect(mapStateToProps, { addBill, getBills })(AddBill);
