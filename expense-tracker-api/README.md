# Expense Tracker API

This is a Node.js-based API for tracking personal expenses, built using **Express**, **PostgreSQL** (with **Prisma** ORM), and **JWT** for authentication. The API allows users to create accounts, log in, manage their expenses, and filter expenses by different time periods.

## Features

- User authentication (Sign up, Login, JWT token generation)
- Protected expense-related endpoints
- CRUD operations on expenses (Create, Read, Update, Delete)
- Expense filtering options:
  - Past week
  - Last month
  - Last 3 months
  - Custom date ranges
- Expense categories:
  - Groceries
  - Leisure
  - Electronics
  - Utilities
  - Clothing
  - Health
  - Others

## Installation

### Prerequisites

- **Node.js** (v14 or later)
- **Docker** and **Docker Compose**
- **PostgreSQL** (if not using Docker)

### Clone the repository

```bash
git clone https://github.com/MohakGupta2004/expenses-backend
cd expense-backend
```

### Install dependencies

```bash
npm install
```

### Setup environment variables

Create a `.env` file in the root of the project and fill in the following:

```env
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/your_database"
JWT_SECRET="your_secret_key"
```

### Run PostgreSQL with Docker

```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

### Setup Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### Start the server

```bash
npm run dev
```

## API Endpoints

### Authentication

- `POST /signup` - Create a new user
- `POST /login` - Login and get JWT token

### Expenses

- `GET /expenses` - List all expenses (with optional filters)
- `POST /expenses` - Add a new expense
- `PUT /expenses/:id` - Update an existing expense
- `DELETE /expenses/:id` - Delete an expense

## Filters

- Past week
- Last month
- Last 3 months
- Custom date range (start and end date)

## Technologies Used

- **Node.js**
- **Express**
- **PostgreSQL**
- **Prisma ORM**
- **JWT for Authentication**
- **Docker** (optional for PostgreSQL)

## License

This project is licensed under the MIT License.
