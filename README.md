# Role Based Authentication

## Description
This porject is simply an implementation of role based authentication and authorization of user , manager and admin. 

For example:
> This is a backend application built using the MongoDB, Express.js, Node.js for a user authentication system. It allows users to register, log in, and stores authentication tokens.

## Features
- User registration and login with JWT authentication
- Password hashing using bcryptjs
- Secure user authentication
- RESTful API for authentication operations (login, register)
- Error handling and validation

## Technologies Used
- **Backend**: Node.js, Express.js, JWT
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens), bcryptjs
- **Other**: dotenv (for environment variables)

## Installation

### Prerequisites
Before you begin, ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (>= 14.x.x)
- [MongoDB](https://www.mongodb.com/) (if using a local MongoDB instance) or a cloud-based MongoDB solution (e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com:rohitkumar4826/Role_based_authentication.git
   ```
   
   ```bash
   cd backend
   ```

   ```bash
   npm install
   ```

   ```bash
   npm run dev
   ```


   ### Screenshots

   ## User Login/Register
   ### User can access itself only
   
   ![reg1](https://github.com/user-attachments/assets/7d784eb9-57b1-4b10-a914-de4e92034554)

   ![reg2](https://github.com/user-attachments/assets/810a6eb0-b862-4e4c-bd4e-376d3f315d3a)

   ![reg3](https://github.com/user-attachments/assets/dd5a011f-2d41-44ac-804c-c2143e4aa453)

   ![reg4](https://github.com/user-attachments/assets/408fd059-4c99-4ed3-843c-23bcce467b5d)

   ![reg5](https://github.com/user-attachments/assets/9ae5822c-9676-4f29-be7e-2ce5092b2ded)

   ![reg6](https://github.com/user-attachments/assets/5b3b023c-c276-4b48-87ca-656b6568d142)

   ![reg7](https://github.com/user-attachments/assets/61e3828d-5f56-4a0f-ab97-1574d3e3486d)

   ## Manager Login/Register
   ### Manager has access to both manager and user

   ![reg8](https://github.com/user-attachments/assets/ba564ddf-b171-48d2-858d-8538ccab5670)

   ![reg9](https://github.com/user-attachments/assets/dd1db7a4-8246-4376-82df-f2a547eb82ae)

   ![reg10](https://github.com/user-attachments/assets/701c06b7-a930-4f2a-9059-8fa301bbb574)

   ![reg11](https://github.com/user-attachments/assets/2575b426-dcc3-4da1-a3f9-170940f149d3)

   ![reg12](https://github.com/user-attachments/assets/91a96651-8a98-48b3-bbf4-82e77f145cf2)

   ![reg13](https://github.com/user-attachments/assets/fc0ac5ed-4564-41cc-903c-4233006d6498)

   ![reg14](https://github.com/user-attachments/assets/d4ce96c7-9003-4a95-a2f2-bdabea876e0a)

   ## Admin Login/Register
   ### Admin can access all ( Admin, Manager and User )

   ![reg15](https://github.com/user-attachments/assets/7c53a9d9-1eae-442c-92cf-3fe663b7780e)

   ![reg16](https://github.com/user-attachments/assets/dc29d9fd-7b56-46d2-89e7-7c6fa83ea543)

   ![reg17](https://github.com/user-attachments/assets/0414548f-b948-47bd-8a16-9d29776f9a81)

   ![reg18](https://github.com/user-attachments/assets/d287e0f6-0b40-4b4e-849f-527847322325)
















