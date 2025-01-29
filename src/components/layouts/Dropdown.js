import React from "react";
import { Select } from "react-materialize";

const Dropdown = ({ onSelect, category, bills }) => {
  return (
    <div className="container">
      <Select
        onChange={onSelect}
        id="Select-9"
        multiple={false}
        options={{
          classes: "",
          dropdownOptions: {
            alignment: "left",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            outDuration: 250,
          },
        }}
        value={category}
      >
        <option disabled value="">
          Choose Category
        </option>
        <option value="All Categories">All Categories</option>
        {bills.map((bill) => (
          <option key={bill.category} value={bill.category}>
            {bill.category}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
