# Piano Game

This project is a simple web-based piano game where users can interact with a virtual piano by clicking on the keys or using specific keys on the keyboard to play notes. Each key corresponds to a specific musical note, and pressing the keys will trigger sounds associated with that note.

## Features

- **Interactive Piano Interface**: A user-friendly interface that visually mimics a real piano.
- **Clickable Keys**: Users can click on the white and black keys to play corresponding notes.
- **Keyboard Support**: Users can also use their keyboard keys to play the notes, which correspond to specific white and black keys on the piano.
- **Audio Playback**: Each piano key plays the corresponding audio file for its note.
- **Key Animations**: When a key is pressed, a visual effect highlights the key, and it reverts to normal when the note ends.

## Technologies Used

- **HTML**: Structure of the piano game interface.
- **CSS**: Styling for the piano keys and overall layout.
- **JavaScript**: Handles the interactivity, such as playing audio and responding to user input (both mouse and keyboard).
- **Audio Files**: Pre-recorded `.mp3` files for each musical note.

## How to Play

1. **Play with Mouse**: 
   - Click on any of the white or black keys on the piano to play the note associated with that key.
2. **Play with Keyboard**:
   - Press the following keys on your keyboard to play the notes:
     - **White Keys**:  
       `Z` - C  
       `X` - D  
       `C` - E  
       `V` - F  
       `B` - G  
       `N` - A  
       `M` - B
     - **Black Keys**:  
       `S` - Db  
       `D` - Eb  
       `G` - Gb  
       `H` - Ab  
       `J` - Bb

When a key is pressed, the associated note is played, and the key will temporarily change color to indicate it is active.

## Project Structure

```plaintext
├── index.html           # Main HTML file
├── styles.css           # CSS file for styling the piano and layout
├── script.js            # JavaScript file for game logic and interactivity
└── notes/               # Folder containing audio files for each note
    ├── C.mp3
    ├── Db.mp3
    ├── D.mp3
    ├── Eb.mp3
    ├── E.mp3
    ├── F.mp3
    ├── Gb.mp3
    ├── G.mp3
    ├── Ab.mp3
    ├── A.mp3
    ├── Bb.mp3
    └── B.mp3
```

### HTML

- The main structure of the piano keys is defined in the `index.html` file, with each key having a `data-note` attribute that corresponds to the note being played.

### CSS

- The `styles.css` file defines the appearance of the piano, including the white and black keys.
- The layout uses flexbox to center the piano on the page.
- CSS variables are used to define the dimensions of the keys, and the active state is styled to show a pressed effect.

### JavaScript

- The `script.js` file adds functionality to the piano, including:
  - Event listeners for both click and keydown events to play the corresponding note.
  - Functions to play the audio associated with each key and reset the visual state when the note ends.

## How to Run

1. Clone or download this repository.
2. Make sure all the necessary files (`index.html`, `styles.css`, `script.js`, and the audio files in the `notes/` folder) are in place.
3. Open `index.html` in your web browser.
4. Start interacting with the piano using either mouse clicks or your keyboard.

## Future Improvements

- **Mobile Touch Support**: Currently, the piano works well on desktop. Adding support for mobile touch events could improve accessibility.
- **Octave Range**: Implement additional octaves to increase the piano's range of notes.
- **Visual Effects**: Add more dynamic animations or effects to enhance the user experience.