# Node API Builder

A simple REST API implementation built with Node.js and Express.js that provides basic CRUD operations for managing items.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository:
```bash
git clone [your-repository-url]
cd node-api-builder
```

2. Install dependencies:
```bash
npm install
```

## Usage

To start the server:
```bash
npm start
```

The server will run on `http://localhost:3000` by default. You can modify the port by setting the `PORT` environment variable.

## API Endpoints

### Get all items
- **URL:** `/api/items`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** Array of items
```json
[
    {
        "id": 1,
        "name": "Item name",
        "description": "Item description"
    }
]
```

### Get specific item
- **URL:** `/api/items/:id`
- **Method:** `GET`
- **URL Params:** `id=[integer]`
- **Success Response:**
  - **Code:** 200
  - **Content:** Item object
- **Error Response:**
  - **Code:** 404
  - **Content:** `"Item not found"`

### Create new item
- **URL:** `/api/items`
- **Method:** `POST`
- **Data Params:**
```json
{
    "name": "Item name",
    "description": "Item description"
}
```
- **Success Response:**
  - **Code:** 201
  - **Content:** Created item object

### Update item
- **URL:** `/api/items/:id`
- **Method:** `PUT`
- **URL Params:** `id=[integer]`
- **Data Params:**
```json
{
    "name": "Updated name",
    "description": "Updated description"
}
```
- **Success Response:**
  - **Code:** 200
  - **Content:** Updated item object
- **Error Response:**
  - **Code:** 404
  - **Content:** `"Item not found"`

### Delete item
- **URL:** `/api/items/:id`
- **Method:** `DELETE`
- **URL Params:** `id=[integer]`
- **Success Response:**
  - **Code:** 200
  - **Content:** Deleted item object
- **Error Response:**
  - **Code:** 404
  - **Content:** `"Item not found"`

## Project Structure

```
node-api-builder/
├── index.js         # Main application file with API implementation
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## Features

- Express.js web framework
- In-memory data storage
- RESTful API endpoints
- JSON request/response format
- Basic error handling
- Customizable port configuration

## Dependencies

- `express`: Web framework for Node.js
- `body-parser`: Middleware for parsing JSON request bodies

## Development

This project uses an in-memory array to store data, which means all data will be lost when the server restarts. For production use, consider implementing a persistent database solution.

## License

This project is open-source and available under the MIT License.