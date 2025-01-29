import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { TextInput, Button, Card, Row, Col } from "react-materialize";
import { updateBill, getBill } from "../../actions/billActions";
import { useNavigate, useParams } from "react-router-dom";

const EditBill = ({ bill, getBill, updateBill }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBill(id);
  }, [getBill, id]);

  useEffect(() => {
    if (bill) {
      const { amount, category, description, date } = bill;
      setAmount(amount);
      setCategory(category);
      setDescription(description);
      setDate(date);
    }
  }, [bill]);

  const onSubmit = (event) => {
    event.preventDefault();
    const updatedBill = { id, description, category, amount, date };
    updateBill(updatedBill);
    navigate("/");
  };

  return (
    <Row>
      <Col m={4}></Col>
      <Col m={6} l={4} s={12}>
        <Card className="margin-top">
          <h5 className="heading">Update Bill</h5>
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
            Update
          </Button>
        </Card>
      </Col>
      <Col m={4}></Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  bill: state.bill.bill,
});

export default connect(mapStateToProps, { getBill, updateBill })(EditBill);
