# Healthcare Backend API

A backend system for a healthcare application built with Node.js, Express.js, and PostgreSQL. This API supports user registration, login with JWT authentication, and management of patients, doctors, and their mappings.

---

## Features

- User authentication with JWT (register and login)
- Patient management (CRUD operations)
- Doctor management (CRUD operations)
- Assign doctors to patients and manage mappings
- Secure endpoints with authentication middleware
- Database interaction with Sequelize ORM
- Environment variables management using dotenv
- Error handling and validation

---

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT (JSON Web Token)
- dotenv

---

## Getting Started

### Prerequisites

- Node.js installed (v14+ recommended)
- PostgreSQL installed and running
- Postman or any API client for testing

### Installation

1. Clone the repository

```bash
git clone https://github.com/Mohan-8/Health-care-backend.git
cd healthcare-backend
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
DB_HOST=localhost
DB_USER=username
DB_PASSWORD=password
DB_NAME=your_database_name
DB_PORT=5432
JWT_SECRET=your_jwt_secret_key
```

Replace `username`, `password`, `your_database_name`, and `your_jwt_secret_key` accordingly.

4. Run database migrations (using Sequelize CLI)

```bash
npx sequelize db:migrate
```

5. Start the server

```bash
npm start
```

Server will run on `http://localhost:5000`

---

## API Endpoints

### Authentication

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login and receive JWT |

### Patient Management (Authenticated)

| Method | Endpoint            | Description               |
| ------ | ------------------- | ------------------------- |
| POST   | `/api/patients`     | Add a new patient         |
| GET    | `/api/patients`     | Get all patients for user |
| GET    | `/api/patients/:id` | Get details of a patient  |
| PUT    | `/api/patients/:id` | Update patient details    |
| DELETE | `/api/patients/:id` | Delete a patient record   |

### Doctor Management (Authenticated)

| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| POST   | `/api/doctors`     | Add a new doctor        |
| GET    | `/api/doctors`     | Get all doctors         |
| GET    | `/api/doctors/:id` | Get details of a doctor |
| PUT    | `/api/doctors/:id` | Update doctor details   |
| DELETE | `/api/doctors/:id` | Delete a doctor record  |

### Patient-Doctor Mapping (Authenticated)

| Method | Endpoint                   | Description                         |
| ------ | -------------------------- | ----------------------------------- |
| POST   | `/api/mappings`            | Assign a doctor to a patient        |
| GET    | `/api/mappings`            | Get all patient-doctor mappings     |
| GET    | `/api/mappings/:patientId` | Get all doctors assigned to patient |
| DELETE | `/api/mappings/:id`        | Remove doctor from a patient        |

---

## Testing

Use Postman or any API client to test the endpoints. Make sure to include the JWT token in the `Authorization` header for all authenticated routes:

```

Authorization: Bearer \<your\_jwt\_token>

```

You can also import and test the full API collection directly from Postman here:

[Postman Collection - Healthcare Backend API](https://mohan-1052920.postman.co/workspace/Mohan's-Workspace~8a8680f1-b1be-4ac3-82a7-1b74eb92a8f2/collection/45696052-2a93fb10-5486-487b-ab53-5db75d7ff505?action=share&creator=45696052)


Authorization: Bearer <your_jwt_token>

```

---

## Project Structure
.
├── controllers
│ ├── authController.js
│ ├── patientController.js
│ ├── doctorController.js
│ └── mappingController.js
├── middleware
│ └── authMiddleware.js
├── models
├── migrations
├── routes
│ ├── auth.js
│ ├── patients.js
│ ├── doctors.js
│ └── mappings.js
├── config
│ └── config.js
├── .env
├── app.js
├── package.json
└── README.md

```

---

## Notes

- Passwords are hashed before storing.
- JWT tokens expire after a set duration (configurable).
- Sequelize handles SQL injection prevention and data sanitization.
- Make sure to configure your `.env` file properly.

---
```
