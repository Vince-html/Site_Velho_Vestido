export const API_URL = 'https://velhovestido.000webhostapp.com/json';
const tokenAuth = '/jwt-auth/v1/token';
const apiUser = '/api/user';
const tokenValidate = '/jwt-auth/v1/token/validate';
const bearer = 'Bearer ';
const apiProduct = '/api/product';

export function TOKEN_POST(body) {
  return {
    url: API_URL + tokenAuth,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + apiUser,
    options: {
      method: 'GET',
      headers: {
        Authorization: bearer + token,
      },
    },
  };
}

export function TOKEN_VALIDADE_POST(token) {
  return {
    url: API_URL + tokenValidate,
    options: {
      method: 'POST',
      headers: {
        Authorization: bearer + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + apiUser,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PRODUCT_POST(formData, token) {
  return {
    url: API_URL + apiProduct,
    options: {
      method: 'POST',
      headers: {
        Authorization: bearer + token,
      },
      body: formData,
    },
  };
}

export function PRODUCTS_GET({ page, total, categoria }) {
  return {
    url: `${API_URL}/api/product/?_page=${page}&_total=${total}&categoria=${categoria}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
export function PRODUCT_GET(id) {
  return {
    url: `${API_URL}/api/product/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function PRODUCT_DELETE(id) {
  return {
    url: `${API_URL}/api/PRODUCT/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: bearer + window.localStorage.getItem('token'),
      },
    },
  };
}
