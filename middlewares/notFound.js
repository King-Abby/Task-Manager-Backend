// A middleware in backend development is like a middle man that sits between the incoming request from a client and the final response from the server.Its a function that can  modify the request, process it, handle certain task before passing it unto the next part of the code or sending back a response.

const notFound = (req, res) => {
res.json( {message: "Route not found"})
}


module.exports = notFound;