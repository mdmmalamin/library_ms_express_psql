# Library Management System - Backend API

This project provides a backend API for managing library operations such as managing books, memberships, and borrowing activities. It is built using **Node.js**, **Express.js**, **Prisma ORM**, and **PostgreSQL**, with **TypeScript** for type safety.

---

## Table of Contents

- [Purpose](#purpose)
- [Technologies Used](#technologies-used)
- [Database Schema](#database-schema)
  - [Book Table](#book-table)
  - [Member Table](#member-table)
  - [BorrowRecord Table](#borrowrecord-table)
- [Features and Endpoints](#features-and-endpoints)
  - [Book CRUD Operations](#book-crud-operations)
  - [Member CRUD Operations](#member-crud-operations)
  - [Borrow & Return Books](#borrow--return-books)
  - [Bonus Features](#bonus-features)
- [Error Handling](#error-handling)
- [Installation](#installation)
- [License](#license)

---

## Purpose

The **Library Management System API** is designed to:

- Automate routine library management tasks.
- Provide a user-friendly system for managing books, memberships, and borrowing activities.
- Enhance operational efficiency and resource management.
- Track overdue books and notify users.

---

## Technologies Used

- **Prisma ORM**: For database management and schema modeling.
- **Node.js**: Backend runtime environment.
- **Express.js**: Backend web framework.
- **PostgreSQL**: Database system.
- **TypeScript**: Ensures type safety and code quality.

---

## Database Schema

### Book Table

| Field             | Type   | Description                             |
| ----------------- | ------ | --------------------------------------- |
| `bookId`          | UUID   | Unique identifier for each book         |
| `title`           | String | Title of the book                       |
| `genre`           | String | Genre or category of the book           |
| `publishedYear`   | Int    | Year the book was published             |
| `totalCopies`     | Int    | Total copies of the book in the library |
| `availableCopies` | Int    | Number of copies currently available    |

### Member Table

| Field            | Type     | Description                        |
| ---------------- | -------- | ---------------------------------- |
| `memberId`       | UUID     | Unique identifier for each member  |
| `name`           | String   | Name of the library member         |
| `email`          | String   | Member’s email (unique)            |
| `phone`          | String   | Member’s contact number            |
| `membershipDate` | DateTime | Date the member joined the library |

### BorrowRecord Table

| Field        | Type     | Description                                |
| ------------ | -------- | ------------------------------------------ |
| `borrowId`   | UUID     | Unique identifier for each borrow record   |
| `borrowDate` | DateTime | Date when the book was borrowed            |
| `returnDate` | DateTime | Date when the book was returned (nullable) |
| `bookId`     | UUID     | Foreign key referencing Book               |
| `memberId`   | UUID     | Foreign key referencing Member             |

---

## Features and Endpoints

### Book CRUD Operations

1. **Create Book**  
   **POST** `/api/books`  
   Creates a new book record.  
   Request and response examples provided in the [Features Section](#).

2. **Read All Books**  
   **GET** `/api/books`  
   Retrieves all books in the library.

3. **Read Book by ID**  
   **GET** `/api/books/:bookId`  
   Fetches details of a book by its ID.

4. **Update Book**  
   **PUT** `/api/books/:bookId`  
   Updates the information of a specific book.

5. **Delete Book**  
   **DELETE** `/api/books/:bookId`  
   Deletes a book from the library.

### Member CRUD Operations

1. **Create Member**  
   **POST** `/api/members`  
   Adds a new library member.

2. **Read All Members**  
   **GET** `/api/members`  
   Retrieves all library members.

3. **Read Member by ID**  
   **GET** `/api/members/:memberId`  
   Fetches details of a member by their ID.

4. **Update Member**  
   **PUT** `/api/members/:memberId`  
   Updates information of a specific member.

5. **Delete Member**  
   **DELETE** `/api/members/:memberId`  
   Deletes a library member.

### Borrow & Return Books

1. **Borrow a Book**  
   **POST** `/api/borrow`  
   Records a borrow event for a specific book and member.

2. **Return a Book**  
   **POST** `/api/return`  
   Marks a book as returned.

3. **Overdue Borrow List**  
   **GET** `/api/borrow/overdue`  
   Retrieves a list of overdue books with borrower details.

---

## Installation Guideline

**Prerequisites**
Before setting up the project, ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- Psql (locally or a cloud instance like Render)
- Git (for cloning the repository)
- npm or yarn (for managing dependencies)

**Step 1: Clone the Repository**
Clone the Library MS project repository from GitHub to your local machine:

```base
git clone https://github.com/mdmmalamin/library_ms_express_psql.git
```

Navigate into the project directory:

```base
cd library_ms_express_psql
```

**Step 2: Install Dependencies**
Use npm or yarn to install all the necessary dependencies for the project.

With npm:

```base
npm install
```

Or with yarn:

```base
yarn install
```

**Step 3: Configure Environment Variables**

Create a .env file in the root directory of your project to store environment variables.

```base
touch .env
```

Add the following variables in your .env file (replace the placeholders with your actual configurations) or check .env.example file:

```base
# Local URL
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

**Step 4: Start the Development Server**
Once everything is set up, start the development server using npm or yarn:

With npm:

```base
npm run dev
```

With yarn:

```base
yarn dev
```

The app will now be running at http://localhost:3000 (or the port specified in your .env file).

**Step 5: Access the Application**
Open your browser and navigate to http://localhost:3000 to view the frontend.
You can use Postman or another API client to test the backend endpoints (e.g., room booking, user management).

### Prerequisites

- cookie-parser
- cors
- express
- zod

or run:

```base
npm i
```
