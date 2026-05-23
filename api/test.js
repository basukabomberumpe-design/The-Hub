module.exports = (req, res) => {
  const dashboardVerdi = process.env.ello;
  
  // Send svaret tilbake til nettsiden din
  res.status(200).json({ verdi: dashboardVerdi || "Variabelen er tom!" });
};
console.log(dashboardVerdi)