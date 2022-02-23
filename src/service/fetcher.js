import axios from "axios";
import { API_END_POINT } from "../constants";

const getConfig = (url) => {
  return {
    method: "GET",
    url: API_END_POINT + url,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const postConfing = (url, data) => {
  return {
    method: "POST",
    url: API_END_POINT + url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
};

const postConfigWithToken = (url, data, token) => {
  return {
    method: "POST",
    url: API_END_POINT + url,
    headers: {
      Authorization: "JWT " + token,
      "Content-Type": "application/json",
    },
    data: data,
  };
};

// 회원가입
export const signup = async (userData) => {
  const res = await axios(postConfing("/accounts/signup/", userData));
  if (res.status === 201) return true;
  else return false;
};

// LOGIN
export const login = async (userData) => {
  const res = await axios(postConfing("/accounts/login/", userData));
  return res;
};

// 상품 전체 불러오기
export const getProducts = async () => {
  const res = await axios(getConfig("/products"));
  return res;
};

// 상품 디테일
export const getProductDetail = async (product_id) => {
  const res = await axios(getConfig(`/products/${product_id}`));
  return res;
};

// 장바구니에 물건 넣기
export const putCart = async (data, token) => {
  const res = await axios(postConfigWithToken("/cart/", data, token));
  return res;
};
