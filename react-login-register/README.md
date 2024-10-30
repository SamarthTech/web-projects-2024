# React Login/Register App

A modern, clean React application featuring a seamless authentication flow with switchable login and registration forms.

## 🚀 Features

- **Dynamic Form Switching**: Smooth transitions between login and registration forms
- **Modern React Practices**: Built using React Hooks and functional components
- **Clean UI**: Minimalist design focusing on user experience
- **State Management**: Efficient state handling using React's useState hook
- **Component-Based Architecture**: Modular design with reusable components

## 🛠️ Technologies Used

- React.js
- CSS
- Modern JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/react-login-register.git
```

2. Navigate to the project directory:
```bash
cd react-login-register
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## 🏗️ Project Structure

```
react-login-register/
├── src/
│   ├── App.js            # Main application component
│   ├── Login.js          # Login form component
│   ├── Register.js       # Registration form component
│   ├── App.css           # Application styles
│   └── logo.svg          # React logo asset
├── public/
│   └── index.html        # HTML template
└── package.json          # Project dependencies and scripts
```

## 💡 Usage

The application allows users to:
- Switch between login and registration forms
- Input credentials for authentication
- Navigate between forms with a single click

Example usage in code:
```jsx
<Login onFormSwitch={toggleForm} />
<Register onFormSwitch={toggleForm} />
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## ✨ Acknowledgments

- Built with React.js
- Inspired by modern authentication flows
- Thanks to all contributors who participate in this project