function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/mgsonnny/react-hnm-app/products?q=${searchQuery}`;
    // let url = `http://localhost:5000/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data:", data)
    // setProductList(data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/mgsonnny/react-hnm-app/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
