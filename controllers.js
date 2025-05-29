let books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 2, title: "1984", author: "George Orwell" }
];

exports.getAllBooks = (req, res) => res.json(books);
exports.addBook = (req, res) => {
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
};
exports.updateBook = (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index !== -1) {
        books[index] = { id: parseInt(req.params.id), ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};
exports.deleteBook = (req, res) => {
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.json({ message: "Book deleted" });
};
