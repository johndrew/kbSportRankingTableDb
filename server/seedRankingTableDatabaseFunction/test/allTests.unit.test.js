var context = require.context('./unit', true, /.js$/);
context.keys().forEach(context);
module.exports = context;
