const express = require('express');
const bodyParser = require('body-parser');

const { PORT, CONFIRMATION } = require('./config');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => {
  const { body } = req;
  switch (body.type) {
    case 'confirmation':
      console.log(body.type);
       console.log(body.group_id);
      res.end(CONFIRMATION);
      break;

    case 'message_new':
      console.log(body);
      res.end('ok');
      break;

    default:
      res.end('ok');
      break;
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

/*
{ type: 'message_new',
  object:
   { id: 2,
     date: 1530616850,
     out: 0,
     user_id: 453773759,
     read_state: 0,
     title: '',
     body: 'test' },
  group_id: 165364631 }
*/
