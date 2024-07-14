# NestJS Microservice with Prisma

This project is a microservice built with NestJS and Prisma ORM, using SQLite as the database.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone git@github.com:recypaid/products-ms.git
   cd products-ms
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the environment file:
   - Copy the `.env.example` file to `.env`:
     ```
     cp .env.example .env
     ```
   - Open the `.env` file and update the variables as needed:
     ```
     DATABASE_URL="file:./dev.db"
     JWT_SECRET="your-secret-key"
     PORT=3000
     ```

## Database Setup

1. SQLite database will be automatically created when you run the Prisma migrations:
   ```
   npx prisma migrate dev
   ```

2. (Optional) To view and manage your database, you can use Prisma Studio:
   ```
   npx prisma studio
   ```

## Running the Application

1. Start the application in development mode:
   ```
   npm run start:dev
   ```

2. The service will be available at `http://localhost:3000` (or the port you specified in the `.env` file).

## API Documentation

Once the application is running, you can access the Swagger API documentation at `http://localhost:3000/api`.

## Scripts

- `npm run start`: Start the application in production mode
- `npm run start:dev`: Start the application in development mode
- `npm run test`: Run tests
- `npm run prisma:studio`: Open Prisma Studio to manage your database

## Environment Variables

The following environment variables are required:

- `DATABASE_URL`: The path to your SQLite database file (e.g., "file:./dev.db")
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: The port on which the microservice will run

Make sure these are properly set in your `.env` file before running the application.

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.