// src/styles/ChatStyles.js

const ChatStyles = {
  container: "flex flex-col h-screen bg-black",
  header: "bg-gray-800 text-white p-4 text-xl font-bold",
  chatBox: "flex-1 overflow-y-auto p-4 space-y-4",
  messageContainer: "flex flex-col",
  message: "max-w-xs mx-2 p-3 rounded-lg",
  sentMessage: "self-end bg-blue-500 text-white",
  receivedMessage: "self-start bg-gray-700 text-white",
  inputContainer: "bg-gray-800 p-4 border-t border-gray-700",
  form: "flex space-x-2",
  input: "flex-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
  button: "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
  loginContainer: "flex flex-col items-center justify-center h-screen bg-black",
  loginHeader: "text-3xl font-bold mb-8 text-white",
  loginButton: "bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1",
};

export default ChatStyles;