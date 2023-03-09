export const successResponse = (message = 'ok', statusCode = 0) => {
  return {
    message,
    statusCode,
  };
};
