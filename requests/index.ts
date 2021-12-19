// ANCHOR: Import GraphQL Request
import { request } from 'graphql-request'

// ANCHOR: Declare the API variable
const API = process.env.API_PATH ?? '';

// ANCHOR: Base Request
function $rest(url: string, config?: any) {
  return fetch(`${API}${url}`, {
    ...config,
    mode: 'cors',
  });
}

// ANCHOR: GraphQL Request
export function GQL(url: string, query?: any) {
  return request(`${API}${url}`, query);
}

// ANCHOR: GET Request
export function GET(url: string, config?: any) {
  return $rest(url, {
    ...config,
    method: 'GET',
  });
}

// ANCHOR: POST Request
export function POST(url: string, data?: any, config?: any) {
  return $rest(url, {
    ...config,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// ANCHOR: PUT Request
export function PUT(url: string, data?: any, config?: any) {
  return $rest(url, {
    ...config,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

// ANCHOR: PATCH Request
export function PATCH(url: string, data?: any, config?: any) {
  return $rest(url, {
    ...config,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

// ANCHOR: DELETE Request
export function DELETE(url: string, config?: any) {
  return $rest(url, {
    ...config,
    method: 'DELETE',
  });
}
