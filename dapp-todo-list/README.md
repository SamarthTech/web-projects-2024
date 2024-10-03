# Blockchain-Based To-Do List

## Overview
This project is a **Blockchain-based To-Do List** built using **Node.js** and **Ethereum blockchain**. It allows users to manage tasks in a decentralized manner, ensuring data immutability, transparency, and security. Each task is recorded as a transaction on the blockchain.

## Features
- Add new tasks to the to-do list.
- Mark tasks as complete.
- View the list of tasks with their statuses.
- All tasks are stored immutably on the Ethereum blockchain.
- Decentralized task management with smart contracts.
  
## Technologies Used
- **Node.js**: Backend development.
- **Express.js**: Web framework for Node.js.
- **Web3.js**: Interacting with the Ethereum blockchain.
- **Solidity**: Smart contract programming language.
- **Truffle**: Development framework for Ethereum.
- **Ganache**: Local Ethereum blockchain for development and testing.
- **MetaMask**: Ethereum wallet for managing accounts and transactions.
  
## Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v14+)
- **Truffle** (v5.0.0+)
- **Ganache** (or any Ethereum testnet)
- **MetaMask** browser extension

## Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/KoustavDeveloper/dapp-todo-list.git
cd blockchain-todo-list
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Compile and Deploy the Smart Contract:
Ensure that Ganache or a test Ethereum network is running, then compile and migrate the smart contract using Truffle:
```bash
truffle compile
truffle migrate
```

### 4. Configure MetaMask:
- Open MetaMask in your browser.
- Connect MetaMask to the Ethereum test network (e.g., Ganache).
- Import the account with the private key from Ganache.

### 5. Run the Application:
Start the Node.js server to interact with the blockchain:
```bash
npm start
```

The app will be accessible at `http://localhost:3000`.

## Smart Contract Details
The smart contract is written in **Solidity** and handles the following functions:
- **addTask(string memory task)**: Adds a new task to the blockchain.
- **markTaskComplete(uint taskId)**: Marks a task as completed.
- **getTasks()**: Returns the list of tasks along with their statuses.

## Usage
1. Open the application in your browser.
2. Connect your MetaMask wallet to interact with the Ethereum blockchain.
3. Add tasks to the to-do list using the form.
4. Mark tasks as complete. Each action will prompt MetaMask to sign the transaction.

## Testing
To run unit tests for the smart contract:
```bash
truffle test
```

## License
This project is licensed under the MIT License.

## Acknowledgements
- [Ethereum](https://ethereum.org/)
- [Web3.js](https://web3js.readthedocs.io/)
- [Truffle Suite](https://www.trufflesuite.com/)

---