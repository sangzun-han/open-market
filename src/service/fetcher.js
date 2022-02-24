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

const deleteConfig = (url, token) => {
  return {
    method: "DELETE",
    url: API_END_POINT + url,
    headers: {
      Authorization: "JWT " + token,
      "Content-Type": "application/json",
    },
  };
};

const getConfigWithToken = (url, token) => {
  return {
    method: "GET",
    url: API_END_POINT + url,
    headers: {
      Authorization: "JWT " + token,
      "Content-Type": "application/json",
    },
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

const putConfigWithToken = (url, data, token) => {
  return {
    method: "PUT",
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

// 장바구니 목록 보기
export const getCart = async (token) => {
  const res = await axios(getConfigWithToken("/cart/", token));
  return res;
};

// 장바구니 수량 수정하기
export const putUpdateCart = async (cart_item_id, data, token) => {
  const res = await axios(
    putConfigWithToken(`/cart/${cart_item_id}/`, data, token)
  );
  return res;
};

// 장바구니 개별 삭제하기
export const deleteCart = async (cart_item_id, token) => {
  const res = await axios(deleteConfig(`/cart/${cart_item_id}`, token));
  return res;
};
