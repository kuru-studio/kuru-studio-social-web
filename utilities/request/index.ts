// ANCHOR: Declare the API variable
const API = process.env.API_PATH ?? '';

// ANCHOR: Base Request
export function apiFetch(url: string, config?: RequestInit) {
  return fetch(`${API}${url}`, {
    ...config,
    mode: 'cors',
  });
}

// ANCHOR: GET Request
export function GET(url: string, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'GET',
  });
}

// ANCHOR: POST Request
export function POST(url: string, data?: any, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// ANCHOR: PUT Request
export function PUT(url: string, data?: any, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

// ANCHOR: PATCH Request
export function PATCH(url: string, data?: any, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

// ANCHOR: DELETE Request
export function DELETE(url: string, config?: RequestInit) {
  return apiFetch(url, {
    ...config,
    method: 'DELETE',
  });
}
