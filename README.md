# User Roles Management System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)

## Introduction

This project is designed to help users understand middleware and user role management in a Node.js application. It features two types of roles: Basic and Admin. Basic users can view only their projects, while Admin users can view all projects. The project demonstrates how to use middleware to manage user access based on their roles.

## Features

- User authentication (login)
- Role-based access control using middleware
  - Basic user: Can view their projects
  - Admin user: Can view all projects
- Simple and clean REST API

## Technologies Used

- Backend: Node.js, Express
- Database: MongoDB
- Other Libraries: Mongoose, bcrypt



## Endpoints

- `POST /api/register`: Register a new user
- `POST /api/login`: Login a user
- `GET /`: View home page
- `GET /dashboard`: View user dashboard
- `GET /admin`: View admin page (Admin role required)
- `GET /:projectId`: View a specific project


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
