
/**
 *
 * @param {string} endpoint - endpoint without a leading slash
 * @returns {object} with the response of the API
 */
export async function fetchAll(endpoint) {
  const response = await fetch(`http://localhost:3000/api/v1/${endpoint}`);

  return response.json();
};
