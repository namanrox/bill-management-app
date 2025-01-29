import {
  GET_BILLS,
  GET_BILL,
  ADD_BILL,
  UPDATE_BILL,
  DELETE_BILL,
  GET_CAT_BILLS,
} from "./types";
import axios from "axios";

export const getBills = () => (dispatch) => {
  axios
    .get("https://my-json-server.typicode.com/namanrox/json-server/bills")
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_BILLS,
        payload: res.data,
      });
    });
};

export const deleteBill = (id) => (dispatch) => {
  dispatch({
    type: DELETE_BILL,
    payload: id,
  });
  axios
    .delete(
      `https://my-json-server.typicode.com/namanrox/json-server/bills/${id}`
    )
    .then((res) => {
      dispatch({
        type: DELETE_BILL,
        payload: id,
      });
    });
};

export const addBill = (bill) => (dispatch) => {
  axios
    .post("https://my-json-server.typicode.com/namanrox/json-server", bill)
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADD_BILL,
        payload: res.data,
      });
    });
};

export const getBill = (id) => (dispatch) => {
  axios
    .get(`https://my-json-server.typicode.com/namanrox/json-server/bills/${id}`)
    .then((res) => {
      dispatch({
        type: GET_BILL,
        payload: res.data,
      });
    });
};

export const updateBill = (bill) => (dispatch) => {
  axios
    .put(
      `https://my-json-server.typicode.com/namanrox/json-server/bills/${bill.id}`,
      bill
    )
    .then((res) => {
      dispatch({
        type: UPDATE_BILL,
        payload: res.data,
      });
    });
};

export const getCategoryBills = (category) => (dispatch) => {
  axios
    .get(
      `https://my-json-server.typicode.com/namanrox/json-server/bills/?category=${category}`
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_CAT_BILLS,
        payload: res.data,
      });
    });
};
