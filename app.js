const connect = require('connect');
const connectMarkdown = require('connect-markdown');

var app = connect();

app.use('/docs', connectMarkdown({
  root: __dirname + '/docs'
}));

app.listen(80);