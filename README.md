# NodeJS Server

This is a NodeJS server that provides RESTful API endpoints for managing tasks. It uses the Express framework and interacts with various modules and files to handle different aspects of the application.

## Project Structure

The project structure is as follows:
```plaintext
NodeTS-server
├── src
│   ├── .configs
│   │   ├── allowedOrigins.ts
│   │   ├── corsOptions.ts
│   │   └── dbConn.ts
│   ├── .controllers
│   │   └── tasksController.ts
│   ├── .middlewares
│   │   ├── credentials.ts
│   │   ├── schemaValidator.ts
│   │   └── validateParams.ts
│   ├── .repositories
│   │   └── tasksRepository.ts
│   ├── .schemas
│   │   └── tasksSchema.ts
│   ├── .services
│   │   └── tasksServices.ts
│   ├── .utils
│   |   └── interfaces.ts
|   └── server.ts
├── .env (You need to create this file and add DATABASE_URL and PORT)
├── .gitignore
├── package.json
├── package-lock.json (Auto-generated after npm install)
├── README.md
└── tsconfig.json
```

- `.configs`: Contains configuration files related to allowed origins, CORS options, and database connection.
- `.controllers`: Contains the `tasksController.ts` file, which defines the route handlers for the task-related endpoints.
- `.middlewares`: Contains middleware functions for handling credentials, schema validation, and parameter validation.
- `.repositories`: Contains the `tasksRepository.ts` file, which interacts with the database to perform CRUD operations on tasks.
- `.schemas`: Contains the `tasksSchema.ts` file, which defines the schema for validating task data.
- `.services`: Contains the `tasksServices.ts` file, which provides functions for handling business logic related to tasks.
- `.utils`: Contains the `interfaces.ts` file, which defines custom interfaces for error handling.

## Endpoint ('/tasks')

### GET '/'
Retrieves all tasks.

### GET '/:id'
Retrieves a specific task by ID.

### POST '/'
Creates a new task.

### DELETE '/:id'
Deletes a task by ID.

### PATCH '/:id'
Updates a task by ID.

## Usage

1. Install dependencies: `npm install`
2. Configure the necessary files:
   - Create a `.env` file in the root directory of the project.
   - Set the `DATABASE_URL` variable in the `.env` file to specify the URL or connection string for your database.
   - Set the `PORT` variable in the `.env` file to specify the desired port for the server.
3. Start the server: `npm start`
4. Access the endpoints using a REST client or browser.

Make sure to replace `DATABASE_URL` with the actual URL or connection string of your database, and `PORT` with the desired port number for the server.

## Configuration

In the `.env` file, you need to set the following variables:

- `DATABASE_URL`: The URL or connection string for your database.
- `PORT`: The port number on which the server will run.

Example `.env` file:
```plaintext
DATABASE_URL=mongodb://localhost:27017/mydatabase
PORT=3000
```

## Running the Server

To start the server, run the following command:
```powershell
    npm start
```

The server will be accessible at 'http://localhost:PORT', where PORT is the value you set in the .env file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
