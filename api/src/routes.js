const expres = require('express');

const routes = expres.Router();

routes.get('/', (req, res) => {
  return res.json({ message: "Hello world!" })
});

routes.get('/messages', (req, res) => {

  const messages = [
    { message: 'message 1' },
    { message: 'message 2' },
    { message: 'message 3' },
    { message: 'message 4' },
    { message: 'message 5' },
  ]

  return res.json(messages);
})

routes.post('/message', (req, res) => {
  const {message} = req.body;
  if (!message) {
    return res.status(500).json({ err: 'No menssage sent' })
  }
  return res.json({message: message});
})

module.exports = routes;