# JWT Challenge

Welcome to the JWT Challenge project! This README will guide you through the setup and usage of the project.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The JWT Challenge project is designed to demonstrate the implementation of JSON Web Tokens (JWT) for authentication and authorization in a web application. This project provides a secure and scalable way to manage user sessions.

## Features

- User authentication with JWT
- Secure password hashing
- Token-based authorization
- RESTful API endpoints
- Error handling and validation

## Installation

To get started with the JWT Challenge project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/bowman-crego/jwt-challenge.git
    ```

2. Navigate to the project directory:
    ```bash
    cd jwt-challenge
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```
    PORT=3000
    JWT_SECRET=your_jwt_secret
    DATABASE_URL=your_database_url
    ```

5. Run the application concurrently:
    ```bash
    npm run start:dev
    ```

## Usage

Once the application is running, you can use the following endpoints:


- `POST /auth/login` - Authenticate a user and receive a JWT
- `GET /api/tickets` - Access a protected route with a valid JWT

## Contributing

We welcome contributions to the JWT Challenge project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add your commit message"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
## Contact

For any questions or inquiries, please contact:

- GitHub: [bowman-crego](https://github.com/bowman-crego)
- Email: [bowmanccrego@gmail.com](mailto:bowmanccrego@gmail.com)