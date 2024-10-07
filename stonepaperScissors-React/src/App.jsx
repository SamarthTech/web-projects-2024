import React, { useEffect, useState } from "react";

const App = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const [playeroption, setplayeroption] = useState("");
  const [compoption, setcompoption] = useState("");

  const [userScore, setuserScore] = useState(0);
  const [compScore, setcompScore] = useState(0);

  const [tie, settie] = useState("");

  const [loader, setloader] = useState(true)

  useEffect(()=>{

    const timer=setTimeout(() => {
      setloader(false)
    }, 2000);

    return () => clearTimeout(timer);
  },[])

  const handleclick = (userchoice) => {
    settie("")
    const computerchoice = options[Math.floor(Math.random() * options.length)];
    winner(userchoice, computerchoice);

    setplayeroption(userchoice);
    console.log(playeroption);

    setcompoption(computerchoice);
    console.log(compoption);

  };

  const winner = (player, computer) => {
    
    if (player == computer) {
      console.log("It's a tie!");
      settie("It's a tie!");
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    ) {
      console.log("Player Wins!");
      setuserScore(userScore + 1);
    } else {
      console.log("Computer Wins!");
      setcompScore(compScore + 1);
    }
  };

  if(loader){
    return(
      <div className="h-screen w-full bg-[url('./background.jpg')] bg-cover object-contain  overflow-hidden relative ">
          

          
          <h1 className="md:text-5xl text-sm text-white absolute top-[50%] left-[10%] font-Sixtyfour md:text-nowrap">Let's Play Rock Paper Scissors....</h1>
      </div>
    )
  }

  return (
    <main className='h-screen w-full bg-[url("./background.jpg")] bg-cover object-contain  overflow-hidden'>
      <button
        onClick={() => handleclick("Scissors")}
        className="scissor relative left-[30%] md:top-[-60px] top-[170px] cursor-pointer"
      >
        <img className="h-32 md:h-auto" src="./scissors.png" alt="" />
      </button>
      {userScore===0 && compScore===0 ?(<h1 className="text-blue-400 md:text-4xl text-base relative md:left-[34%] left-[12%]  bottom-[-400px] md:bottom-[-10%] font-semibold">Please Select a choice to start Playing</h1>):( <div>
        <div className="computer relative">
        <h1 className="text-white font-bold md:text-5xl text-base absolute md:left-[34%] left-[20%] bottom-[-400px] md:bottom-[0px]">
          Computer's Selection is {compoption }
        </h1>
        
      </div>
        {tie && <h2 className="text-violet-600 font-bold md:text-3xl text-base  absolute md:left-[48%] left-[40%] md:top-[52%] top-[70%] ">{tie}</h2>}
      <div className="score relative">
        <div className="scores text-white font-bold md:text-3xl text-sm absolute md:left-[40%] left-[32%]  md:top-32 bottom-[-460px] md:bottom-[10px] flex justify-between items-center md:w-[20%] w-[40%]  ">
          <h1 className="z-[999]">You : {userScore}</h1>
          <h1 className="z-[999]">Computer: {compScore}</h1>
        </div>
      </div>
      </div>)}
      
      <div className="flex justify-between items-center">
        <div
          onClick={() => handleclick("Rock")}
          className="rock rotate-[27deg] relative md:right-16 cursor-pointer  top-52 md:top-0"
        >
          <img className="h-32 md:h-auto" src="./stone.png" alt="" />
        </div>
        <div
          onClick={() => handleclick("Paper")}
          className="paper cursor-pointer relative top-52 md:top-0"
        >
          <img className="h-32 md:h-auto" src="./paper.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default App;
