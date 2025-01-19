const express = require('express');
const Book = require('../models/book');

const router = express.Router();

router.get('/getBooks', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/addBook', async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const newBook = await Book.create({
      author: req.body.author,
      title: req.body.title,
      publicationDate: req.body.publicationDate
    });
    res.json(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/deleteBook/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Book.destroy({ where: { id: id } });
    if (deletedBook) {
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/editBook/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const [updatedRows] = await Book.update(req.body, { where: { id: id } });
    if (updatedRows) {
      const updatedBook = await Book.findByPk(id);
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error('Error editing book:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/getBook/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByPk(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
