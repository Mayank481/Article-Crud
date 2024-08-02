module.exports.sourceVerification = (req, res, next) => {
  const allowedSources = ["Quokka_Labs"];
  const requestSource = req.headers["x-request-source"];

  if (!requestSource || !allowedSources.includes(requestSource)) {
    return res.status(403).json({ error: "Forbidden: Invalid source" });
  }

  next();
};
