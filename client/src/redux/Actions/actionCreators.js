import { IMAGE_URL, TITLE, SUBTITLE, SUBTEXT, SUBLETTER, PRICE, LPRICE } from "./actionTypes";

export const image_url = (data) => {
    return {
      type: IMAGE_URL,
      payload: data,
    };
};

export const title = (data) => {
  return {
    type: TITLE,
    payload: data,
  };
};

export const subtitle = (data) => {
  return {
    type: SUBTITLE,
    payload: data,
  };
};

export const subtext = (data) => {
  return {
    type: SUBTEXT,
    payload: data,
  };
};

export const subletter = (data) => {
  return {
    type: SUBLETTER,
    payload: data,
  };
};

export const price = (data) => {
  return {
    type: PRICE,
    payload: data,
  };
};

export const lprice = (data) => {
  return {
    type: LPRICE,
    payload: data,
  };
};