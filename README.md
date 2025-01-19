# Books API

Books API is a simple application for managing books, allowing you to add, edit, delete, and retrieve information about books.

## Requirements

To run this application, you need:
- Node.js (version 14 or later)
- PostgreSQL (installed and running)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
2. Install dependencies
   ```bash
   npm install
3. Install dependencies
   ```bash
   Configure the database - update your user data in config/config.json
   ```

## Running the Application

Start the server:

```bash
node app.js

The application will run at http://localhost:3000
```

## Endpoints
### Get All Books
```
URL: /api/getBooks
```
Method: GET

Description: Retrieves all books.

#### Example response:
```
json
[
  {
    "id": 1,
    "author": "Harper Lee",
    "title": "To Kill a Mockingbird",
    "publicationDate": "1960-07-11T00:00:00.000Z"
  },
  ...
]
```

### Add a New Book
```
URL: /api/addBook
```
Method: POST

Description: Adds a new book.

#### Body (JSON):
```
json
{
  "author": "J.K. Rowling",
  "title": "Harry Potter and the Philosopher's Stone",
  "publicationDate": "1997-06-26"
}
```
#### Example response:
```
json
{
  "id": 1,
  "author": "J.K. Rowling",
  "title": "Harry Potter and the Philosopher's Stone",
  "publicationDate": "1997-06-26T00:00:00.000Z"
}
```

### Delete a Book
```
URL: /api/deleteBook/:id
```
Method: DELETE

Description: Deletes a book with the given id.

#### Example response:

```
json
{
  "message": "Book deleted successfully"
}
```
### Edit a Book
```
URL: /api/editBook/:id
```
Method: PUT

Description: Edits a book with the given id.

#### Body (JSON):

```
json
{
  "author": "New Author",
  "title": "New Title",
  "publicationDate": "2025-01-01"
}
```
#### Example response:
```
json
{
  "id": 1,
  "author": "New Author",
  "title": "New Title",
  "publicationDate": "2025-01-01T00:00:00.000Z"
}
```
### Get a Specific Book
```
URL: /api/getBook/:id
```
Method: GET

Description: Retrieves a book with the given id.

#### Example response:
```
json
{
  "id": 1,
  "author": "J.K. Rowling",
  "title": "Harry Potter and the Philosopher's Stone",
  "publicationDate": "1997-06-26T00:00:00.000Z"
}
```
