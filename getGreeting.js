const greeting = process.env.GREETING || 'Hello';
const name = process.env.NAME || 'Guest';

module.exports = function() {
  return `${greeting}, ${name}!`;
};