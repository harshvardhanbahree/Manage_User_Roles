function authUser(req, res, next) {
  if (req.body.userId == null) {
    res.status(403);
    return res.send("You need to sign in");
  }
  next();
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send("Not allowed");
    }
  };
}
module.exports = { authUser, authRole };
