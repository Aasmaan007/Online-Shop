function getSessionData(req) {
  const sessionData = req.session.flashedData;

  req.session.flashedData = null;

  return sessionData;
}

function flashDataToSession(req, data, action) {
  req.session.flashedData = data;
  // add data under flashedData key to this session object
  req.session.save(action);
  // once data saved to session action(anpnymlous function ) will be executed 
}

module.exports = {
  getSessionData: getSessionData,
  flashDataToSession: flashDataToSession
};
// handle flashing data onto sessions 