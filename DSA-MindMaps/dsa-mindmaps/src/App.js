/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import 'jsmind/style/jsmind.css';

// Load jsMind globally using a CDN
const jsMindScript = document.createElement('script');
jsMindScript.src = 'https://cdn.jsdelivr.net/npm/jsmind@0.4.6/js/jsmind.js';
document.head.appendChild(jsMindScript);
const dsaConcepts = [
  { id: 'root', topic: 'Data Structures & Algorithms', isroot: true },
  { id: 'arrays', topic: 'Arrays', parentid: 'root' },
  { id: 'linked_lists', topic: 'Linked Lists', parentid: 'root' },
  { id: 'stacks', topic: 'Stacks', parentid: 'root' },
  { id: 'queues', topic: 'Queues', parentid: 'root' },
  { id: 'trees', topic: 'Trees', parentid: 'root' },
  { id: 'graphs', topic: 'Graphs', parentid: 'root' },
  { id: 'sorting', topic: 'Sorting Algorithms', parentid: 'root' },
  { id: 'searching', topic: 'Searching Algorithms', parentid: 'root' },
]

const conceptDescriptions = {
  arrays: "Arrays are a fundamental data structure that store elements of the same type in contiguous memory locations.",
  linked_lists: "Linked Lists are a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.",
  stacks: "Stacks are a Last-In-First-Out (LIFO) data structure that supports push and pop operations.",
  queues: "Queues are a First-In-First-Out (FIFO) data structure that supports enqueue and dequeue operations.",
  trees: "Trees are hierarchical data structures with a root node and child nodes, commonly used for representing hierarchical relationships.",
  graphs: "Graphs are non-linear data structures consisting of vertices and edges, used to represent complex relationships between objects.",
  sorting: "Sorting algorithms arrange elements in a specific order, such as ascending or descending.",
  searching: "Searching algorithms are used to find specific elements within a data structure.",
}

const conceptCode = {
  arrays: `
// JavaScript array example
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1]); // Output: banana
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
`,
  linked_lists: `
// JavaScript linked list implementation
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}
`,
}

const quizData = {
  question: "What is the time complexity of accessing an element in an array by its index?",
  options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
  correctAnswer: 0
}

function Component() {
  const [currentView, setCurrentView] = useState('landing')
  const [selectedConcept, setSelectedConcept] = useState(null)
  const [showQuiz, setShowQuiz] = useState(false)
  const [jm, setJm] = useState(null)

  useEffect(() => {
    if (currentView === 'app') {
      initMindMap()
    }
  }, [currentView])

  function initMindMap() {
    const options = {
      container: 'jsmind_container',
      theme: 'orange',
      editable: true,
      support_html: true,
    }

    const mind = {
      meta: {
        name: 'DSA Concepts',
        author: 'Your Name',
        version: '1.0',
      },
      format: 'node_array',
      data: dsaConcepts,
    }

    const newJm = new jsMind(options)
    newJm.show(mind)

    newJm.add_event_listener((type, data) => {
      if (type === jsMind.event_type.select) {
        setSelectedConcept(data.node.id)
      }
    })

    setJm(newJm)
  }

  function handleNewMap() {
    if (jm) {
      jm.mind.name = 'New Mind Map'
      jm.mind.root = null
      jm.show()
    }
  }

  function handleSaveMap() {
    if (jm) {
      const data = jm.get_data()
      localStorage.setItem('savedMindMap', JSON.stringify(data))
      alert('Mind map saved successfully!')
    }
  }

  function handleLoadMap() {
    if (jm) {
      const savedData = localStorage.getItem('savedMindMap')
      if (savedData) {
        jm.show(JSON.parse(savedData))
      } else {
        alert('No saved mind map found.')
      }
    }
  }

  function renderLanding() {
    return (
      <div className="landing">
        <header>
          <nav>
            <div className="logo">DSA Mind Map</div>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><button className="cta-button" onClick={() => setCurrentView('app')}>Start Learning</button></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="hero">
            <h1>Visualize and Master Data Structures and Algorithms</h1>
            <p>Create interactive mind maps to learn and understand complex DSA concepts with ease.</p>
            <button className="cta-button" onClick={() => setCurrentView('app')}>Get Started</button>
          </section>

          <section id="features">
            <h2>Key Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>Interactive Mind Maps</h3>
                <p>Create and customize mind maps to visualize DSA concepts.</p>
              </div>
              <div className="feature-card">
                <h3>Pre-populated Concepts</h3>
                <p>Explore key DSA topics with pre-built mind maps.</p>
              </div>
              <div className="feature-card">
                <h3>Concept Descriptions</h3>
                <p>Access brief explanations for each DSA concept.</p>
              </div>
              <div className="feature-card">
                <h3>Example Code</h3>
                <p>View code snippets related to DSA concepts.</p>
              </div>
            </div>
          </section>

          <section id="about">
            <h2>About DSA Mind Map</h2>
            <p>DSA Mind Map is an interactive learning tool designed to help students and professionals master Data Structures and Algorithms through visual representation and hands-on practice.</p>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 DSA Mind Map. All rights reserved.</p>
        </footer>
      </div>
    )
  }

  function renderApp() {
    return (
      <div className="app">
        <header>
          <nav>
            <div className="logo">DSA Mind Map</div>
            <ul>
              <li><button onClick={handleNewMap}>New Map</button></li>
              <li><button onClick={handleSaveMap}>Save Map</button></li>
              <li><button onClick={handleLoadMap}>Load Map</button></li>
              <li><button onClick={() => setShowQuiz(true)}>Take Quiz</button></li>
              <li><button onClick={() => setCurrentView('landing')}>Home</button></li>
            </ul>
          </nav>
        </header>

        <main id="app-container">
          <aside id="concept-list">
            <h3>DSA Concepts</h3>
            <ul>
              {dsaConcepts.map(concept => (
                concept.id !== 'root' && (
                  <li key={concept.id} onClick={() => setSelectedConcept(concept.id)}>
                    {concept.topic}
                  </li>
                )
              ))}
            </ul>
          </aside>
          <section id="mind-map-container">
            <div id="jsmind_container"></div>
          </section>
          <aside id="concept-details">
            <h3>Concept Details</h3>
            <div id="concept-description">
              {selectedConcept && conceptDescriptions[selectedConcept]}
            </div>
            <div id="concept-code">
              {selectedConcept && conceptCode[selectedConcept] && (
                <pre><code>{conceptCode[selectedConcept]}</code></pre>
              )}
            </div>
          </aside>
        </main>

        {showQuiz && (
          <div className="modal">
            <div className="modal-content">
              <h2>Quiz</h2>
              <div id="quiz-question">{quizData.question}</div>
              <div id="quiz-options">
                {quizData.options.map((option, index) => (
                  <label key={index}>
                    <input type="radio" name="quiz-answer" value={index} />
                    {option}
                  </label>
                ))}
              </div>
              <button onClick={() => {
                const selectedAnswer = document.querySelector('input[name="quiz-answer"]:checked')
                if (selectedAnswer) {
                  if (parseInt(selectedAnswer.value) === quizData.correctAnswer) {
                    alert('Correct!')
                  } else {
                    alert('Incorrect. Try again!')
                  }
                } else {
                  alert('Please select an answer.')
                }
              }}>Submit</button>
              <button onClick={() => setShowQuiz(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <style>{`
        :root {
          --primary-color: #4a90e2;
          --secondary-color: #f5a623;
          --background-color: #f4f4f4;
          --text-color: #333;
        }

        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: var(--text-color);
          margin: 0;
          padding: 0;
          background-color: var(--background-color);
        }

        header {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-color);
        }

        nav ul {
          display: flex;
          list-style: none;
        }

        nav ul li {
          margin-left: 2rem;
        }

        nav ul li a, nav ul li button {
          text-decoration: none;
          color: var(--text-color);
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
        }

        .cta-button {
          background-color: var(--primary-color);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.3s ease;
          border: none;
          font-size: 1rem;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: #3a7bc8;
        }

        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        #hero {
          text-align: center;
          padding: 6rem 0 4rem;
        }

        #hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        #hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        #features, #about {
          padding: 4rem 0;
        }

        h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background-color: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .feature-card h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        footer {
          background-color: #333;
          color: #fff;
          text-align: center;
          padding: 1rem;
          margin-top: 2rem;
        }

        #app-container {
          display: flex;
          height: calc(100vh - 60px);
          margin-top: 60px;
        }

        #concept-list, #concept-details {
          width: 250px;
          background-color: #fff;
          padding: 1rem;
          overflow-y: auto;
        }

        #mind-map-container {
          flex-grow: 1;
          background-color: #f9f9f9;
          padding: 1rem;
        }

        #jsmind_container {
          width: 100%;
          height: 100%;
        }

        #concept-list ul {
          list-style: none;
          padding: 0;
        }

        #concept-list li {
          cursor: pointer;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          background-color: #f0f0f0;
          border-radius: 4px;
        }

        #concept-list li:hover {
          background-color: #e0e0e0;
        }

        #concept-description, #concept-code {
          margin-top: 1rem;
        }

        #concept-code pre {
          background-color: #f0f0f0;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        }

        .modal {
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        
        }

        .modal-content {
          background-color: #fff;
          padding: 2rem;
          border-radius: 8px;
          width: 80%;
          max-width: 600px;
        }

        #quiz-options {
          margin-top: 1rem;
        }

        #quiz-options label {
          display: block;
          margin-bottom: 0.5rem;
        }

        .modal-content button {
          margin-top: 1rem;
          margin-right: 1rem;
        }

        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            padding: 1rem;
          }

          nav ul {
            margin-top: 1rem;
          }

          nav ul li {
            margin-left: 0;
            margin-right: 1rem;
          }

          #hero {
            padding: 4rem 0 2rem;
          }

          #hero h1 {
            font-size: 2rem;
          }

          #hero p {
            font-size: 1rem;
          }

          #app-container {
            flex-direction: column;
          }

          #concept-list, #concept-details {
            width: 100%;
            height: auto;
          }

          #mind-map-container {
            height: 50vh;
          }
        }
      `}</style>
      {currentView === 'landing' ? renderLanding() : renderApp()}
    </>
  )
}

export default Component