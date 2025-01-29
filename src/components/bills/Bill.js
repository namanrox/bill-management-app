import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Button, Chip } from "react-materialize";
import { deleteBill } from "../../actions/billActions";
import "./Style.css";

const Bill = ({ bill, deleteBill }) => {
  const { id, amount, category, description, date, should_be_paid } = bill;
  const title = `${id}. ${description} Bill`;

  const onDeleteClick = (id) => {
    deleteBill(id);
  };

  return (
    <ErrorBoundary>
      <Card
        title={title}
        actions={[
          <React.Fragment key={id}>
            <Button onClick={() => onDeleteClick(id)} waves="light">
              Delete Bill
            </Button>
            &ensp;
            <Link to={`bill/edit/${id}`}>
              <Button>Edit Bill</Button>
            </Link>
            {should_be_paid === true ? (
              <Chip className="chip">Should be Paid</Chip>
            ) : null}
          </React.Fragment>,
        ]}
      >
        <hr />
        <div className="font-size">
          <p>
            Total: <span className="float-right">Rs. {amount}</span>
          </p>
          <p>
            Category: <span className="float-right">{category}</span>
          </p>
          <p>
            Date: <span className="float-right">{date}</span>
          </p>
        </div>
      </Card>
    </ErrorBoundary>
  );
};

export default connect(null, { deleteBill })(Bill);
