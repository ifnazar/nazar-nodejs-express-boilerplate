/**
 * Returns service status
 * @param  {!Request} req
 * @param  {!Response} res
 */
const statusHandler = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ status: 'up' });
  next();
};

export default statusHandler;
