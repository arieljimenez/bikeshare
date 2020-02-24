/**
 *
 * @param {string} endpoint - endpoint without a leading slash
 * @returns {object} with the response of the API
 */
export async function fetchAll(endpoint) {
  const response = await fetch(`${endpoint}`);

  return response.json();
};
