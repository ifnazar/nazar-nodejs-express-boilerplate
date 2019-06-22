/**
 * Returns service status
 * @param  {!Request} req
 * @param  {!Response} res
 */
const statusHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ status: 'up' });
};

export default statusHandler;
