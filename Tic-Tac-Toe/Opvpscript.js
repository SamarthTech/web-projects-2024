let g1=document.body.firstElementChild.getElementsByClassName("grid")
let r1=document.body.getElementsByClassName("result")
let g=g1[0].getElementsByClassName("gridboxes")
let result=r1[0]
result.setAttribute("style","visibility:hidden")
let d1=document.body.getElementsByClassName("darkbodyeffect")
let darkbodyeffect=d1[0]
let gridboxes=Array.from(g)
console.log("hello")
console.log(gridboxes)
let win=[]
let loss=[]
let tie=0
let counter=2//for player 1=X
// let winboolean=false
for(let i in gridboxes){
    gridboxes[i].addEventListener("mouseenter", function(){
        if((win.includes(i)==false)&&(loss.includes(Number.parseInt(i))==false)&&(counter%2==1)){
            gridboxes[i].innerHTML="✖"
            gridboxes[i].setAttribute("style","text-shadow: 0 0 2px rgb(0, 221, 255), 0 0 2px rgb(0, 221, 255),0 0 2px rgb(0, 221, 255);")
        }
        if((win.includes(i)==false)&&(loss.includes(Number.parseInt(i))==false)&&(counter%2==0)){
            gridboxes[i].innerHTML="Ｏ"
            gridboxes[i].setAttribute("style","text-shadow: 0 0 2px rgb(255, 145, 0), 0 0 2px rgb(255, 145, 0),0 0 2px rgb(255, 145, 0);")
        }
    })
    gridboxes[i].addEventListener("mouseleave", function(){
        if((win.includes(i)==false)&&(loss.includes(Number.parseInt(i))==false)){
            gridboxes[i].setAttribute("style","text-shadow:none;")
        }
    })
    if(result.hasAttribute("style","visibility:hidden")==true){
        gridboxes[i].addEventListener("click", function(){
            if((win.includes(i)==false)&&(loss.includes(Number.parseInt(i))==false)&&(counter%2==1)){
                gridboxes[i].setAttribute("style","color:rgb(0, 221, 255);text-shadow:none;")
            // gridboxes.splice(i,1)
            win.push(i)
            win=win.sort()
            console.log(win)
            function winchange(winarray){
                for(let i1=0;i1<3;i1++){
                    let wonindex=Number.parseInt(winarray[i1])
                    setTimeout(function(){
                        gridboxes[wonindex].setAttribute("style","color: rgb(36, 78, 93);background-color: rgb(0, 221, 255);")
                    },500)
                }
                // winboolean=true
                setTimeout(function(){
                    result.setAttribute("style","visibility:visible")
                    result.firstElementChild.innerHTML="PLAYER 2 WINS!"
                    darkbodyeffect.setAttribute("style","visibility:visible")
                },1500)
            }
            if((win.includes('0'))&&(win.includes('3'))&&(win.includes('6'))){
                console.log("winner")
                // gridboxes[w1].setAttribute("style","color: rgb(36, 78, 93);background-color: rgb(0, 221, 255);")
                // gridboxes[w2].setAttribute("style","color: rgb(36, 78, 93);background-color: rgb(0, 221, 255);")
                // gridboxes[w3].setAttribute("style","color: rgb(36, 78, 93);background-color: rgb(0, 221, 255);")
                // let wonindex=-1
                //flaw:if someone wins after 4inputs 4 of them will change colour-*fixed*
                // winchange()
                console.log("winner")
                winchange([0,3,6])
            } else if((win.includes('1'))&&(win.includes('4'))&&(win.includes('7'))){
                console.log("winner")
                winchange([1,4,7])
            } else if((win.includes('2'))&&(win.includes('5'))&&(win.includes('8'))){
                console.log("winner")
                winchange([2,5,8])
            } else if((win.includes('0'))&&(win.includes('1'))&&(win.includes('2'))){
                console.log("winner")
                winchange([0,1,2])
            } else if((win.includes('3'))&&(win.includes('4'))&&(win.includes('5'))){
                console.log("winner")
                winchange([3,4,5])
            }else if((win.includes('6'))&&(win.includes('7'))&&(win.includes('8'))){
                console.log("winner")
                winchange([6,7,8])
            }else if((win.includes('0'))&&(win.includes('4'))&&(win.includes('8'))){
                console.log("winner")
                winchange([0,4,8])
            } else if((win.includes('2'))&&(win.includes('4'))&&(win.includes('6'))){
                console.log("winner")
                winchange([2,4,6])
            } else{
                tie++
            }
            // console.log(result.hasAttribute("style","visibility:visible"))
            
            
            // console.log(tie)
            if(tie>=7)
            {
                console.log("tie")
                setTimeout(function(){
                    result.setAttribute("style","visibility:visible")
                    result.firstElementChild.innerHTML="ITS A TIE"
                    darkbodyeffect.setAttribute("style","visibility:visible")
                },1500)
            }
            }

            if((win.includes(i)==false)&&(loss.includes(Number.parseInt(i))==false)&&(counter%2==0)){
                var ain=Number.parseInt(i)
                gridboxes[ain].setAttribute("style","color:rgb(255, 145, 0);text-shadow:none;")
            // gridboxes.splice(i,1)
            loss.push(ain)
        loss=loss.sort()
        console.log(loss)
        function losschange(lossarray){
        for(let i2=0;i2<3;i2++){
            let lossindex=Number.parseInt(lossarray[i2])
            setTimeout(function(){
                gridboxes[lossindex].setAttribute("style","color: rgb(36, 78, 93);background-color: rgb(255, 145, 0);")
            },500)
            }
            setTimeout(function(){
                result.setAttribute("style","visibility:visible")
                result.firstElementChild.innerHTML="PLAYER 1 WINS!"
                darkbodyeffect.setAttribute("style","visibility:visible")
            },1500)
        }
        if((loss.includes(0))&&(loss.includes(3))&&(loss.includes(6))){
            console.log("loser")
            losschange([0,3,6])
        } else if((loss.includes(1))&&(loss.includes(4))&&(loss.includes(7))){        //**Have to remove quotes */
            console.log("loser")
            losschange([1,4,7])
        } else if((loss.includes(2))&&(loss.includes(5))&&(loss.includes(8))){
            console.log("loser")
            losschange([2,5,8])
        } else if((loss.includes(0))&&(loss.includes(1))&&(loss.includes(2))){
            console.log("loser")
            losschange([0,1,2])
        } else if((loss.includes(3))&&(loss.includes(4))&&(loss.includes(5))){
            console.log("loser")
            losschange([3,4,5])
        }else if((loss.includes(6)&&loss.includes(7)&&loss.includes(8))){
            console.log("loser")
            losschange([6,7,8])
        }else if((loss.includes(0)&&loss.includes(4)&&loss.includes(8))){
            console.log("loser")
            losschange([0,4,8])
        } else if((loss.includes(2)&&loss.includes(4)&&loss.includes(6))){
            console.log("loser")
            losschange([2,4,6])
        }else{
            tie++
        }
            // console.log(result.hasAttribute("style","visibility:visible"))
            
            
            // console.log(tie)
            if(tie>=7)
            {
                console.log("tie")
                setTimeout(function(){
                    result.setAttribute("style","visibility:visible")
                    result.firstElementChild.innerHTML="ITS A TIE"
                    darkbodyeffect.setAttribute("style","visibility:visible")
                },1500)
            }
            }
            counter++
            
        }// gridboxes1.splice(ain,1) 
        )
    }
    
}