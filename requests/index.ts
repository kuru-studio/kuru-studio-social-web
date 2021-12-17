// ANCHOR: Import GraphQL Request
import { request, gql } from 'graphql-request'

// ANCHOR: Declare the API variable
const API = process.env.API_PATH ?? '';

// ANCHOR: GraphQL Request
export function gqlRequest(url: string, query?: any) {
  return request(`${API}${url}`, query);
}

// ANCHOR: Base Request
export function $apiFetch(url: string, config?: any) {
  return fetch(`${API}${url}`, {
    ...config,
    mode: 'cors',
  });
}

// ANCHOR: GET Request
export function GET(url: string, config?: any) {
  return $apiFetch(url, {
    ...config,
    method: 'GET',
  });
}

// ANCHOR: POST Request
export function POST(url: string, data?: any, config?: any) {
  return $apiFetch(url, {
    ...config,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// ANCHOR: PUT Request
export function PUT(url: string, data?: any, config?: any) {
  return $apiFetch(url, {
    ...config,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

// ANCHOR: PATCH Request
export function PATCH(url: string, data?: any, config?: any) {
  return $apiFetch(url, {
    ...config,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

// ANCHOR: DELETE Request
export function DELETE(url: string, config?: any) {
  return $apiFetch(url, {
    ...config,
    method: 'DELETE',
  });
}
