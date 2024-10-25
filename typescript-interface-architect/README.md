# TypeScript Interface Architect 🏗️

A fun, interactive web game to master TypeScript interfaces! Test and improve your TypeScript skills by writing interfaces that match given object structures.

## 🎮 Game Overview

TypeScript Interface Architect is an educational game that challenges players to write correct TypeScript interfaces based on provided JavaScript objects. Perfect for:
- TypeScript beginners learning interface syntax
- Developers wanting to practice type definitions
- Coding instructors teaching TypeScript basics

## ✨ Features

- Progressive difficulty levels
- Real-time feedback on your solutions
- Clean, intuitive interface
- Immediate validation of your TypeScript interfaces
- Multiple challenges covering different object structures

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/typescript-interface-architect.git
cd typescript-interface-architect
```

2. Open `index.html` in your browser to start playing!

## 🎯 How to Play

1. Each level presents you with a JavaScript object
2. Write the corresponding TypeScript interface in the editor
3. Click "Check Solution" to verify your answer
4. Progress through increasingly challenging levels

Example Level:
```typescript
// Given object:
{
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
}

// Your task: Write the correct interface
interface User {
    name: string;
    age: number;
    email: string;
}
```

## 🛠️ Technical Stack

- HTML5
- CSS3
- TypeScript/JavaScript
- Modern ES Modules

## 📁 Project Structure

```
typescript-interface-architect/
├── index.html          # Main game interface
├── style.css          # Game styling
├── script.js          # Game logic
├── levels.ts          # Level definitions
└── README.md         # This file
```

## 🎨 Customization

Want to add your own levels? Edit `levels.ts`:

```typescript
export const levels = [
    {
        description: "Your level description",
        example: {
            // Your example object
        },
        interface: `
        // Expected interface solution
        `
    }
    // Add more levels...
];
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new levels
- Improve the UI/UX
- Fix bugs
- Enhance the validation logic

## 📄 License

MIT License - feel free to use this project for learning and teaching purposes!

## 🎓 Learning Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Interface Documentation](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

Happy coding! 🚀 Remember, mastering TypeScript interfaces is a crucial skill for any modern JavaScript developer.