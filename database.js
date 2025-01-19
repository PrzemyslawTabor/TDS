const { db, checkAndCreateDatabase } = require('./db');
const Book = require('./models/book');

async function initializeDatabase() {
  await checkAndCreateDatabase();
  await db.sync();
  await seedDatabase();
}

async function seedDatabase() {
  const count = await Book.count();
  if (count === 0) {
    const books = [
      { author: 'Harper Lee', title: 'To Kill a Mockingbird', publicationDate: '1960-07-11' },
      { author: 'George Orwell', title: '1984', publicationDate: '1949-06-08' },
      { author: 'Jane Austen', title: 'Pride and Prejudice', publicationDate: '1813-01-28' },
      { author: 'F. Scott Fitzgerald', title: 'The Great Gatsby', publicationDate: '1925-04-10' },
      { author: 'Herman Melville', title: 'Moby-Dick', publicationDate: '1851-10-18' }
    ];

    for (const book of books) {
      await Book.create(book);
    }

    console.log('Database seeded!');
  } else {
    console.log('Database already seeded!');
  }
}

module.exports = {
  initializeDatabase,
  seedDatabase
};
