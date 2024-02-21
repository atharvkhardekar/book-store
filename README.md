# Book Store Project using MERN Stack

This is a full-stack web application for a book store built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse through a collection of books, search for specific titles, view details of each book, add them to their cart for purchase, create new books, edit existing books, and delete books.

## Features
1. **Show Books:** Browse through a collection of books using cards and tables.
2. **Create New Books:** Add new books to the collection.
3. **Edit Existing Books:** Modify details of existing books.
4. **Delete Books:** Remove books from the collection.
5. **Show Description:** View detailed description of each book.

## Installation
1. Clone the repository to your local machine:
    ```
    git clone https://github.com/yourusername/book-store.git
    ```

2. Navigate to the project directory:
    ```
    cd book-store
    ```

3. Install dependencies for both frontend and backend:
    ```
    npm install
    cd ./frontend
    npm install
    ```

4. Create a `.env` file in the root directory of the project:

    ```
    PORT=3000
    mongoDBURL=your_mongodb_url
    ```

    Replace `your_mongodb_url` with the URL of your MongoDB database.

5. Change the axios url in `frontend/src/pages`
    
    ```https://book-store-b8k4.onrender.com``` replace this with ```http://localhost:3000``` in all files in ```frontend/src/pages ```


5. Start the server:
    ```
    npm run dev
    ```

6. Start the client:
    ```
    cd frontend
    npm run dev
    ```

7. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage
- As a user, you can browse through the collection of books using cards and tables, view detailed descriptions of each book, and add them to your cart for purchase.
- If you are an admin, you can access the admin panel by logging in with your credentials. From there, you can manage books by creating new ones, editing existing ones, or deleting books.

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js

## Contributors
- [atharvkhardekar](https://github.com/atharvkhardekar)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.