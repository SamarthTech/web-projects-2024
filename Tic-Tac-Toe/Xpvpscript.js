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
let counter=1//for player 1=X
// let winboolean=false
for(let i in gridboxes){
    // if(counter%2==1){
    //     gridboxes[i].innerHTML="✖"
    // }else{
    //     console.log("hiii")
    //     gridboxes[i].innerHTML="Ｏ"
    // }
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
                    result.firstElementChild.innerHTML="PLAYER 1 WINS!"
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
                result.firstElementChild.innerHTML="PLAYER 2 WINS!"
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



// if(winboolean==false){
//     setTimeout(function(){
//         do{
//             var ain=Math.trunc(Math.random()*(gridboxes.length-1)+0)
//         }while((gridboxes[ain].hasAttribute("style","color:rgb(0, 170, 255)")==true)&&(gridboxes[ain].hasAttribute("style","color:rgb(255, 145, 0)")==true))
//                 gridboxes[ain].innerHTML="Ｏ"
//         loss.push(ain)
//         loss=loss.sort()
//         console.log(loss)
//         function losschange(lossarray){
//         for(let i2=0;i2<3;i2++){
//             let lossindex=Number.parseInt(lossarray[i2])
//             gridboxes[lossindex].setAttribute("style","color: rgb(36, 78, 93);background-color: rgb(255, 145, 0);")
//             }
//             setTimeout(function(){
//                 result.setAttribute("style","visibility:visible")
//                 result.firstElementChild.innerHTML="YOU LOST"
//                 darkbodyeffect.setAttribute("style","visibility:visible")
//             },1000)
//         }
//         if((loss.includes(0))&&(loss.includes(3))&&(loss.includes(6))){
//             console.log("loser")
//             losschange([0,3,6])
//         } else if((loss.includes(1))&&(loss.includes(4))&&(loss.includes(7))){        //**Have to remove quotes */
//             console.log("loser")
//             losschange([1,4,7])
//         } else if((loss.includes(2))&&(loss.includes(5))&&(loss.includes(8))){
//             console.log("loser")
//             losschange([2,5,8])
//         } else if((loss.includes(0))&&(loss.includes(1))&&(loss.includes(2))){
//             console.log("loser")
//             losschange([0,1,2])
//         } else if((loss.includes(3))&&(loss.includes(4))&&(loss.includes(5))){
//             console.log("loser")
//             losschange([3,4,5])
//         }else if((loss.includes(6)&&loss.includes(7)&&loss.includes(8))){
//             console.log("loser")
//             losschange([6,7,8])
//         }else if((loss.includes(0)&&loss.includes(4)&&loss.includes(8))){
//             console.log("loser")
//             losschange([0,4,8])
//         } else if((loss.includes(2)&&loss.includes(4)&&loss.includes(6))){
//             console.log("loser")
//             losschange([2,4,6])
//         }else{
//             tie++
//         }
       
//     },500)
//     // console.log(loss)
// }
    //     if(c==3)
    // {
    //     console.log("ok")
    //     function html2(x){
    //         var html1=gridboxes[x].innerHTML
    //         return html1
    //     }
    
    //     if((html2(i)==html2(i+3)==html2(i+6))||(html2(i)==html2(i-3)==html2(i+3))||(html2(i)==html2(i-3)==html2(i-6))){
    //         console.log("winner")} 
            // else if((html(i)==html(i+1)==html(i+2))||(html(i)==html(i-1)==html(i+1))||(html(i)==html(i-1)==html(i-2))){
            //     console.log("winner")
            // } else if((html(i)==html(i+4)==html(i+8))||(html(i)==html(i-4)==html(i+4))||(html(i)==html(i-4)==html(i-8))){
            //     console.log("winner")
            // }
    
    // }
    
    





// for(let j=1;j<4;j++)
// {
        // for(let i=0;i<gridboxes.length;i++){
        //     let elemobj=gridboxes[i].getElementsByClassName("element")
        //     let elem=Array.from(elemobj)
            
        //     // async function f1(){  
        //     // let p1=new Promise(()=>{
        //     //     gridboxes[i].addEventListener("mouseover", mousehover)
        //     //     gridboxes[i].addEventListener("mouseout", mouseout)
        //     //     gridboxes[i].addEventListener("click", function(){
        //     //     elem[0].setAttribute("style","display:inline-block")
        //     //     gridboxes[i].removeEventListener("mouseover", mousehover)
        //     //     gridboxes[i].removeEventListener("mouseout", mouseout)
        //     // })})
        //     // console.log("awaited")
        //     // let p1r=await p1
            
        //     // return p1r
           
        //     // }
        //     // f1()
        //     // gridboxes[i].addEventListener("mouseover", mousehover)
        //     // gridboxes[i].addEventListener("mouseout", mouseout)

        //     gridboxes[i].addEventListener("click", function(){
        //         elem[0].setAttribute("style","display:inline-block")
        //         // gridboxes[i].removeEventListener("mouseover", mousehover)
        //         // gridboxes[i].removeEventListener("mouseout", mouseout)
        //         gridboxes.splice(i-1,1)
        //         console.log(gridboxes.length)
        //         let aielem=Math.trunc(Math.random()*(gridboxes.length-1)+0)
        //         console.log(aielem)
        //         let elemobjai=gridboxes[aielem].getElementsByClassName("element")
        //         let elem1=Array.from(elemobjai)
        //         elem1[0].setAttribute("style","display:inline-block")
        //         // gridboxes[aielem].removeEventListener("mouseover", mousehover)
        //         // gridboxes[aielem].removeEventListener("mouseout", mouseout)
        //         gridboxes.splice(aielem,1)
    //})
// }
// let userelem=-1
// let aielem=-1    
//     console.log("work")
//     for(let i=0;i<gridboxes.length;i++)
//     {

//         let elemobj=gridboxes[i].getElementsByClassName("element")
//             let elem=Array.from(elemobj)
//             console.log(elem)
//             console.log(aielem)
            
//         async function mousehover(){
//                 new Promise((resolve)=>
//                 elem[0].setAttribute("style","display:inline-block")
//                 resolve(56))
//                 console.log("hello")
//             }
//         async function mouseout(){
//                 new Promise(elem[0].setAttribute("style","display:none"))
//                 console.log("hello")
//             }

//         gridboxes[i].addEventListener("click", function(){
//             elem[0].setAttribute("style","display:inline-block")
//             gridboxes[i].removeEventListener("mouseover", mousehover)
//             gridboxes[i].removeEventListener("mouseout", mouseout)
//             gridboxes.splice(i,1)
//             userelem=i
//             console.log(gridboxes.length)
//             aielem=Math.trunc(Math.random()*(gridboxes.length-1)+0)
//             console.log(aielem)
//             let elemobjai=gridboxes[aielem].getElementsByClassName("element")
//             let elem1=Array.from(elemobjai)
//             elem1[0].setAttribute("style","display:inline-block")
//             gridboxes[aielem].removeEventListener("mouseover", mousehover)
//             gridboxes[aielem].removeEventListener("mouseout", mouseout)
//             gridboxes.splice(aielem,1)
//         })
//         // if((i!=aielem)&&(i!=userelem)){
//             gridboxes[i].addEventListener("mouseover", mousehover)
//             gridboxes[i].addEventListener("mouseout", mouseout)
//         // }
        
//     }



// //console.log(j)
// //let elemobjai=gridboxes[j].getElementsByClassName("element")
// //elem=Array.from(elemobjai)
// //mousehover()

// // async function(()=>{
// //     await mousehover1(){
// //         console.log("awaoted")
// //     }
// //     }
// // 