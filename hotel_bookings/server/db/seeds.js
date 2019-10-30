use hotel;

db.dropDatabase();

db.guests.insertMany([
  {
    name: "Norman Bates",
    email: "normanbates2001@gmail.com",
    checked_in: true
},

  {
    name: "Holden Caufield",
    email: "holdzey38@AOL.com",
    checked_in: false
},

]);
