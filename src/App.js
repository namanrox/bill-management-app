import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import { Provider } from "react-redux";
import Bills from "./components/bills/Bills";
import AddBill from "./components/bills/AddBill";
import EditBill from "./components/bills/EditBill";
import Navbar from "./components/layouts/Navbar";
import Chart from "./components/chart/Chart";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="text-font">
            <Navbar />
            <Routes>
              <Route path="/" element={<Bills />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/add" element={<AddBill />} />
              <Route path="/bill/edit/:id" element={<EditBill />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
