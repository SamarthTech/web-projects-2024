# React Firebase Chat Application

This project is a real-time chat application built with React JS for the frontend and Firebase for the backend and database.

## Features

- Real-time messaging
- User authentication
- Message history

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.0 or later)
- npm or yarn package manager
- A Firebase account and project set up

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/ritaban06/react-firebase-chat.git
   ```

2. Navigate to the project directory:
   ```
   cd react-firebase-chat
   ```

3. Install the dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

4. Replace the contents of  `.env` file in the root directory and add your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

## Usage

To start the development server:

```
npm start
```

or with yarn:

```
yarn start
```

The application will be available at `http://localhost:3000`.

## Firebase Setup

1. Create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Authentication and choose your preferred sign-in method.
3. Create a Firestore database for storing chat messages.
4. Set up Firebase security rules to protect your data.

## Project Structure

```
src/
|-- components/
|   |-- Chat.js
|   |-- Message.js
|   |-- Login.js
|-- services/
|   |-- firebase.js
|-- App.js
|-- index.js
```

## Demo
You can view a live demo of the application at [https://real-time-chat-47a7b.web.app/]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Under  the MIT License. See [LICENSE] for details.

## Contributing

Feel free to fork the repository, submit issues, or make pull requests. All contributions are welcome!