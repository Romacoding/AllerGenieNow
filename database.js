const MongoClient = require("mongodb").MongoClient;
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const uri = `mongodb+srv://${username}:${password}@cluster0-5gade.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
  dataRequest: function (
    {displayLocation,
    pollenIndex,
    triggerOne,
    triggerTwo,
    triggerThree}, 
    date, callback) {
    const instance = new MongoClient(uri, { useUnifiedTopology: true });
    instance.connect((err, client) => {
      if (err) console.log(err);
      else {
        console.log('---connected to MongoDB---')
        const collection = client.db("pollen").collection("visits");
        collection.insertOne({
          location: displayLocation,
          index: pollenIndex,
          triggers: [triggerOne, triggerTwo, triggerThree],
          timestamp: date
        }, (err, result) => {
          if (err) { console.log(err) }
          collection
            .countDocuments()
            .then(function (visits) {
              callback(null, visits);
            });
        });
      }
    }); 
    instance.close();
  }
};