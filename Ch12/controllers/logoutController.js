const userDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = userDB.users.find(u => u.refreshToken == refreshToken);
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: ture });
    return res.sendStatus(204); // No content
  }

  // Delete refreshToken in db
  const otherUsers = userDB.users.filter(p => p.refreshToken !== foundUser.refreshToken);
  const currentUsers = {...foundUser, refreshToken: ''};
  userDB.setUsers([...otherUsers, currentUsers]);
  await fsPromises.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(userDB.users)
  );

  res.clearCookie('jwt', {httpOnly: true});
  res.sendStatus(204); // No content
}

module.exports = { handleLogout };