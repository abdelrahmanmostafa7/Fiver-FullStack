# Fiverr FullStack Clone

This project is a full-stack application built using the MERN (MongoDB, Express, React, Node.js) stack. It replicates the core functionalities of the Fiverr platform, enabling users to explore services, create gigs, manage orders, and communicate with other users.

## Features

### 1. **Home Page**
- **Header Section**: A visually appealing header with a search bar and popular categories for quick navigation.
- **Trusted By Section**: Displays logos of trusted companies like Facebook, Google, Netflix, etc.
- **Category Cards**: Showcases various service categories such as AI Artists, Logo Design, WordPress, etc., using the [`cards`](client/src/data.js) data.
- **Features Section**: Highlights the platform's benefits, such as budget-friendly services, quick delivery, secure payments, and 24/7 support.

### 2. **Authentication**
- **Register**: Users can create an account by providing details like username, email, password, profile picture, and country. Sellers can activate their seller account and add a description.
- **Login**: Users can log in using their credentials. The login system uses JWT for secure authentication.
- **Logout**: Users can securely log out, clearing their session.

### 3. **Gigs**
- **Create Gig**: Sellers can create new gigs by providing details like title, category, description, delivery time, revisions, features, and price.
- **View Gigs**: Users can browse gigs with filters for budget, categories, and sorting options (e.g., Best Selling, Newest).
- **Gig Details**: Each gig displays detailed information, including the seller's profile, reviews, and pricing.

### 4. **Orders**
- **View Orders**: Users can view their orders, including details like the gig title, price, and buyer/seller information.
- **Contact Buyer/Seller**: Users can contact the other party directly from the orders page.

### 5. **Messages**
- **Inbox**: Users can view and manage their messages with other users.
- **Message Details**: Displays the conversation history between the buyer and seller, with options to send new messages.

### 6. **Reviews**
- **Add Reviews**: Buyers can leave reviews for gigs, including a star rating and description.
- **View Reviews**: Gigs display reviews from previous buyers, helping users make informed decisions.

## Technologies Used

### Frontend
- **React.js**: For building the user interface.
- **React Router**: For client-side routing.
- **SASS**: For styling components.
- **Axios**: For making API requests.
- **React Query**: For data fetching and caching.

### Backend
- **Node.js**: For building the server-side application.
- **Express.js**: For creating RESTful APIs.
- **MongoDB**: For storing user, gig, order, and message data.
- **Mongoose**: For modeling and interacting with the database.
- **JWT**: For secure authentication.
- **Bcrypt**: For hashing passwords.

### Development Tools
- **Vite**: For fast frontend development.
- **Nodemon**: For automatic server restarts during development.
- **ESLint**: For maintaining code quality.

## Project Structure
