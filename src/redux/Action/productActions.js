import {
  addProductsRequest,
  addProductsSuccess,
  addProductsFailure,
  addProductsClearError,
} from "../Reducers/productSlice";
import { fetchDataFromApi } from "../../utils/api";

// Get All Products
export const getProducts = (url) => async (dispatch) => {
  try {
    dispatch(addProductsRequest());

    fetchDataFromApi(url).then((res) => {
      dispatch(addProductsSuccess(res));
    });
  } catch (error) {
    dispatch(addProductsFailure(error));
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch(addProductsClearError());
};

// Get All Products using filters
// export const getProductsUsingFilters =
//   (keyword = "", category = "", price = [0, 2500000], page, brand = "") =>
//   async (dispatch) => {
//     try {
//       dispatch(addProductsRequest());
//       if (category) {
//         const res = await axios.get(
//           `${BASE_URL}/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&page=${page}`
//         );
//         dispatch(addProductsSuccess(res.data));
//       } else if (brand) {
//         const res = await axios.get(
//           `${BASE_URL}/products?brand=${brand}&price[gte]=${price[0]}&price[lte]=${price[1]}&page=${page}`
//         );

//         dispatch(addProductsSuccess(res.data));
//       } else {
//         const res = await axios.get(
//           `${BASE_URL}/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&page=${page}`
//         );
//         dispatch(addProductsSuccess(res.data));
//       }
//     } catch (error) {
//       toast.error(`${error.message}`);
//       dispatch(addProductsFailure(error));
//     }
//   };
