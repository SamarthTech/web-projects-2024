# Multi-Step Form Application

A dynamic React application that implements a user-friendly, multi-step form with progress tracking. Perfect for surveys, questionnaires, or any sequential data collection process.


## ✨ Features

- **Progressive Form Navigation**: Intuitive next/previous navigation between form steps
- **Visual Progress Tracking**: Real-time progress bar showing current step
- **State Management**: Efficient form state handling using React hooks
- **Persistent Answers**: Maintains user responses across navigation
- **Responsive Design**: Built with React Bootstrap for a mobile-friendly experience
- **Completion Handling**: Clean submission process with restart capability

## 🚀 Getting Started

### Prerequisites

- Node.js (v12.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/multi-step-form.git
cd multi-step-form
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## 🛠️ Usage

### Form Configuration

Questions are configured in `Questions.js`. Each question should follow this structure:

```javascript
{
  id: number,
  question: string,
  type: string,
  options?: string[]  // For multiple choice questions
}
```

### Component Structure

- `App.js`: Main application container
- `MultiStepProgressBar`: Visual progress indicator
- `MultiStepForm`: Form renderer and state manager

### Key Features Implementation

#### Progress Management
```javascript
const [index, setIndex] = useState(1);
const totalPagesCount = questions?.length || 0;
```

#### Answer Storage
```javascript
const [pagesAnswers, setPagesAnswers] = useState({});
const onPageAnswerUpdate = (step, answersObj) => {
  setPagesAnswers({...pagesAnswers, [step]: answersObj});
}
```

## 📝 Props & Components

### MultiStepForm
| Prop | Type | Description |
|------|------|-------------|
| list | Array | Array of question objects |
| step | Number | Current form step |
| onPageUpdate | Function | Callback for answer updates |
| pagesAnswers | Object | Current form state |

### MultiStepProgressBar
| Prop | Type | Description |
|------|------|-------------|
| step | Number | Current progress step |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Built with [React Bootstrap](https://react-bootstrap.github.io/)
- Progress bar styling inspired by [Bootstrap](https://getbootstrap.com/)

## 🐛 Known Issues

- Form validation not yet implemented
- No persistent storage between sessions
- Progress bar may need adjustment for more than 3 steps

## 📫 Support

For support, email [Koustav Singh](koustavsinghcollege@gmail.com) or open an issue in the repository.