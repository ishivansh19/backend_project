
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
  };
// Promise.resolve() ensures that the result of requestHandler is handled as a promise.
// If the promise resolves, it continues as normal.
// If it rejects (i.e., an error occurs), .catch(next) catches the error and passes it to the Express error-handling middleware using next(err).
// This simplifies error handling for asynchronous operations.
export default asyncHandler




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }