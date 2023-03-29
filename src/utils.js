/**
 * Formats the response to be sent to the client.
 * @param {string} message Description of the response
 * @param {any} data Data to be sent
 * @param {string} error Error name
 * @returns
 */
function formatResponse(message, data, error) {
  const response = {
    message,
  };

  if (data) {
    response.data = data;
  }

  if (error) {
    response.error = error;
  }

  return response;
}

module.exports = {
  formatResponse,
};
