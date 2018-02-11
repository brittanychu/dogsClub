const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./server/api');
const path = require('path');
const {db} = require('./server/models/dogs');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));

app.use('/api', api);

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public'))
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
});

db.sync({force:false})
  .then( ()=> {
    app.listen(3000, ()=>{
      console.log('Server is litening on port 3000...')
    })
  })
  .catch(()=>{
    console.log('Something weird happened')
  })

