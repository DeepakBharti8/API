# Terms and Conditions API

This project is a simple API for managing a Terms and Conditions document. It provides endpoints to fetch and update the current terms and conditions.

## Project Structure

```
terms-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the business logic for handling requests
│   │   └── termsController.js
│   ├── routes                # Defines the API routes
│   │   └── termsRoutes.js
│   ├── middleware            # Contains middleware for validation
│   │   └── validation.js
│   └── models                # Defines the data model for terms and conditions
│       └── terms.js
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## API Endpoints

### GET /terms

Fetches the current terms and conditions.

**Response:**
- 200 OK: Returns the current terms and conditions.
- 404 Not Found: If the terms and conditions do not exist.

### PUT /terms

Updates the existing terms and conditions.

**Request Body:**
- `content`: The new content for the terms and conditions (required).

**Response:**
- 200 OK: Returns a success message if the update is successful.
- 400 Bad Request: If the request body is invalid or required fields are missing.
- 404 Not Found: If the terms and conditions do not exist.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd terms-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

The API will be running on `http://localhost:3000`.

## License

This project is licensed under the MIT License.