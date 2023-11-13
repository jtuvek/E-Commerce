# E-Commerce Back End

This project provides the back end for an e-commerce website, allowing users to manage categories, products, and tags. It utilizes Express.js and Sequelize to create a RESTful API that interacts with a MySQL database. The goal is to empower businesses in the electronics industry to efficiently engage in online buying and selling.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Environment Variables](#environment-variables)
  - [Starting the Application](#starting-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)

## Features

- Provides a functional Express.js API.
- Utilizes Sequelize to interact with a MySQL database.
- Supports CRUD operations for categories, products, and tags.
- Implements associations between models for seamless data retrieval.
- Follows RESTful conventions for API design.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MySQL database server

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-backend.git
   ```
2. ```bash
   cd e-commerce-backend
   ```
3. ```bash
   npm install
   ```

### Database Setup

1. Run the following command in your MySQL shell to create the database:
    ```sql
    source db/schema.sql;
    ```

### Environmental Variables

Create a .env file in the project root and set the following environment variables:

    ```.env
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    ```

### Starting the Application

Run the following command to start the server:

    ```bash
    npm start
    ```

## Usage

The API provides endpoints for managing categories, products, and tags. Refer to the API Endpoints section for details on available routes and operations.

## API Endpoints

* Categories:
    * GET `/api/categories`
    * GET /api/categories/:id
    * POST /api/categories
    * PUT /api/categories/:id
    * DELETE /api/categories/:id
* Products:

    * GET /api/products
    * GET /api/products/:id
    * POST /api/products
    * PUT /api/products/:id
    * DELETE /api/products/:id
* Tags:

    * GET /api/tags
    * GET /api/tags/:id
    * POST /api/tags
    * PUT /api/tags/:id
    * DELETE /api/tags/:id

## Walkthrough Video

[Link to Walkthrough Video](https://drive.google.com/file/d/1euaBKDxNAFZSyynjGxCPCDwv06XZ-wrj/view)

Please refer to the walkthrough video for a demonstration of the application's functionality and to ensure all acceptance criteria are met.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or create a pull request.


