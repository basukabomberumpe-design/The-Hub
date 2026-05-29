// api/gamer.js
module.exports = async (req, res) => {
  const value = process.env.skomp;
  res.status(200).json({ value });
};
