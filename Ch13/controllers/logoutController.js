const User = require("../model/User");

const handleLogout = async (req, res) => {

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: ture });
    return res.sendStatus(204); // No content
  }

  foundUser.refreshToken = '';
  const result = await foundUser.save(); // save this to the MongoDB
  console.log(result);

  res.clearCookie('jwt', {httpOnly: true});
  res.sendStatus(204); // No content
}

module.exports = { handleLogout };