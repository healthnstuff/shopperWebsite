"use strict";

const {
  db,
  models: { User, Address, UserPayment },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      email: "cody@gmail.com",
      password: "123",
      firstName: "Cody",
      lastName: "Martin",
      phoneNum: "293 219 9906",
    }),
    User.create({
      email: "murphy@gmail.com",
      password: "123",
      firstName: "Murphy",
      lastName: "Jones",
      phoneNum: "809 346-9238",
    }),
  ]);

  const addresses = await Promise.all([
    Address.create({
      addressLine: "2108  Hanifan Lane",
      city: "Roswell",
      postalCode: 30913,
      country: "USA",
    }),
  ]);

  const payments = await Promise.all([
    UserPayment.create({
      cardNum: 3029389202938181,
      expirationDate: new Date(2024, 2, 17),
      provider: "Bank of America",
      cvv: 290,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${addresses.length} addresses`);
  console.log(`seeded ${payments.length} user payments`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    addresses: {
      cody: addresses[0],
    },
    payments: {
      cody: payments[0],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
