import "./index.css"
import Button from './Components/Button'
import Meme from './Components/Meme'

function App() {
  return (
    <>
      <div className='p-12 flex flex-col gap-4 items-center justify-center sm:pt-4 sm:px-4 pb-8'>
        <Meme/>
      </div>
      <footer className="text-gray-300 text-center mb-2 absolute bottom-0 w-full">Made By <a href="https://github.com/subhadeeproy3902" className="text-sky-300">Subhadeep Roy</a></footer>
    </>
  )
}

export default App
