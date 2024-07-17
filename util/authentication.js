function createUserSession(req, user, action) {
  req.session.uid = user._id.toString();
  // adding id to session
  req.session.isAdmin = user.isAdmin;
  req.session.save(action);
  // action only executed once sessions was successfully saved in store
}

function destroyUserAuthSession(req) {
  req.session.uid = null;
}

module.exports = {
  createUserSession: createUserSession,
  destroyUserAuthSession: destroyUserAuthSession
};