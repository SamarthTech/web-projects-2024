let g1=document.body.firstElementChild.getElementsByClassName("grid")
let r1=document.body.getElementsByClassName("result")
let g=g1[0].getElementsByClassName("gridboxes")
let result=r1[0]
result.setAttribute("style","visibility:hidden")
let d1=document.body.getElementsByClassName("darkbodyeffect")
let darkbodyeffect=d1[0]
let gridboxes=Array.from(g)
console.log("hello world")
// console.log(gridboxes)
let win=[]
let loss=[]
let tie=0
let winboolean=false
let multiarray=[[gridboxes[0],gridboxes[1],gridboxes[2]],[gridboxes[3],gridboxes[4],gridboxes[5]],[gridboxes[6],gridboxes[7],gridboxes[8]]]
// console.log(multiarray[1][2])
for(let i in gridboxes){
    gridboxes[i].innerHTML="✖"
    if(result.hasAttribute("style","visibility:hidden")==true){
        gridboxes[i].addEventListener("click", function(){
            if((win.includes(i)==false)&&(loss.includes(Number.parseInt(i))==false)){
                gridboxes[i].setAttribute("style","color:rgb(0, 170, 255);text-shadow:none;")
            // gridboxes.splice(i,1)
            win.push(i)
            win=win.sort()
            // console.log(win)
            function winchange(winarray){
                for(let i1=0;i1<3;i1++){
                    let wonindex=Number.parseInt(winarray[i1])
                    setTimeout(function(){
                        gridboxes[wonindex].setAttribute("style","color: rgb(36, 78, 93);background-color: rgb(0, 170, 255);")
                    },500)
                }
                winboolean=true
                setTimeout(function(){
                    result.setAttribute("style","visibility:visible")
                    result.firstElementChild.innerHTML="YOU WON!"
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
            if(winboolean==false){
                setTimeout(function(){
                    // let aicount=0
                    
                    function aihelp(worl,arr){
                        if((worl.includes(arr[0]))&&(worl.includes(arr[1]))&&(worl.includes(arr[2])==false)){
                            return arr[2]
                        }else if((worl.includes(arr[1]))&&(worl.includes(arr[2]))&&(worl.includes(arr[0])==false)){
                            return arr[0]
                        }else if((worl.includes(arr[2]))&&(worl.includes(arr[0]))&&(worl.includes(arr[1])==false)){
                            // console.log("hi")
                            return arr[1]
                        }else{
                            return -1
                        }
                        
                    }
                    function aibraindef(){
                        let winroute=[['0','4','8'],['2','4','6'],['0','3','6'],['1','4','7'],['2','5','8'],['0','1','2'],['3','4','5'],['6','7','8']]
                        // console.log(win)
                        // console.log(win.includes(winroute[0][0]))
                        let aino=-1
                        for(let wr=0;wr<winroute.length;wr++){
                            // console.log(aino)
                            if(aihelp(win,winroute[wr])!=-1){
                                aino=aihelp(win,winroute[wr])
                                // console.log(aino)
                                if(((gridboxes[aino].hasAttribute("style","color:rgb(255, 145, 0)")==false))){
                                    // console.log(wr)
                                    return aino
                                }else{
                                    aino=-1
                                }
                                // do{
                                //     aino=aihelp(winroute[wr])
                                // }while(((gridboxes[aino].hasAttribute("style","color:rgb(0, 170, 255)")==true)&&(gridboxes[aino].hasAttribute("style","color:rgb(255, 145, 0)")==true)))
                                // return aino
                            }                        
                        }
                        return aino
                    }

                    function aibrainoff(){
                        let lossroute=[[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8]]
                        // console.log(win)
                        // console.log(win.includes(winroute[0][0]))
                        let aino2=-1
                        for(let wr=0;wr<lossroute.length;wr++){
                            // console.log(aino2)
                            if(aihelp(loss,lossroute[wr])!=-1){
                                aino2=aihelp(loss,lossroute[wr])
                                // console.log(aino2)
                                if(((gridboxes[aino2].hasAttribute("style","color:rgb(0, 170, 255)")==false))){
                                    // console.log(wr)
                                    return aino2
                                }else{
                                    aino2=-1
                                }
                                // do{
                                //     aino=aihelp(winroute[wr])
                                // }while(((gridboxes[aino].hasAttribute("style","color:rgb(0, 170, 255)")==true)&&(gridboxes[aino].hasAttribute("style","color:rgb(255, 145, 0)")==true)))
                                // return aino
                            }                        
                        }
                        return aino2
                    }




                    
                    
                    let ain=Number.parseInt(aibrainoff())
                    if(ain==-1){
                        ain=Number.parseInt(aibraindef())
                    }else{
                        console.log("aioff")
                    }

                    if(ain==-1){
                        console.log("random")
                        let randomno=0.0
                        do{
                            randomno=Math.random()
                            if(randomno<=0.2){
                                ain=0
                            }else if(randomno<=0.4){
                                ain=2
                            }else if(randomno<=0.6){
                                ain=4
                            }else if(randomno<=0.8){
                                ain=6
                            }else{
                                ain=8
                            }
                        }while((gridboxes[ain].hasAttribute("style","color:rgb(0, 170, 255)")==true)&&(gridboxes[ain].hasAttribute("style","color:rgb(255, 145, 0)")==true))
                    }else{
                        console.log("aidef")
                    }
                    gridboxes[ain].setAttribute("style","color:rgb(255, 145, 0);text-shadow:none;")
                    // console.log(gridboxes[ain].hasAttribute("style","color:rgb(0, 170, 255)"))
                    gridboxes[ain].innerHTML="Ｏ"
                    loss.push(ain)
                    loss=loss.sort()
                    // console.log(loss)
                    function losschange(lossarray){
                    for(let i2=0;i2<3;i2++){
                        let lossindex=Number.parseInt(lossarray[i2])
                        setTimeout(function(){
                            gridboxes[lossindex].setAttribute("style","color: rgb(36, 78, 93);background-color: rgb(255, 145, 0);")
                        },500)
                    }
                        setTimeout(function(){
                            result.setAttribute("style","visibility:visible")
                            result.firstElementChild.innerHTML="YOU LOST"
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
                   
                },500)
                // console.log(loss)
            }
            
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
            
            
        }// gridboxes1.splice(ain,1) 
        )
    }
    
}

// function aibrain(){
                    //     let diag1try=0
                    //     let diag2try=0
                    //     let wintry=0
                    //     let wintryarr=[]
                    //     let wintry1=0
                    //     let wintryarr1=[]
                    //     let ifcount=0
                    //     if(ifcount=0){
                    //     for(let row=0;row<3;row++){
                    //         wintry=0
                    //         wintryarr=[]
                    //         for(let col=0;col<3;col++){
                    //             if((multiarray[row][col].hasAttribute("style","color:rgb(0, 170, 255)")==true)&&(multiarray[row][col].innerHTML=="✖")){
                    //                 wintry++
                    //                 wintryarr.push(col)
                    //             }
                    //         }
                    //         console.log(wintry)
                    //         console.log(wintryarr)
                    //         for(let col=0;col<3;col++){
                    //             if(wintry==2){
                    //                 if((wintryarr.includes(col)==false)&&(multiarray[row][col].innerHTML!="Ｏ")){
                    //                     let ain1=row*3+col
                    //                     console.log("row")
                    //                     ifcount++
                    //                     return ain1
                                        
                    //                     // aicount++
                    //                 }
                    //             }
                    //         }
                    //     }
                    //     }
                    //     if(ifcount=0){
                    //     for(let col=0;col<3;col++){
                    //         wintry1=0
                    //         wintryarr1=[]
                    //         for(let row=0;row<3;row++){
                                
                    //             if((multiarray[row][col].hasAttribute("style","color:rgb(0, 170, 255)")==true)&&(multiarray[row][col].innerHTML=="✖")){
                    //                 wintry1++
                    //                 wintryarr1.push(row)
                    //             }
                                
                    //         }
                    //         for(let row=0;row<3;row++){
                    //             if(wintry1==2){
                    //                 if((wintryarr1.includes(row)==false)&&(multiarray[row][col].innerHTML!="Ｏ")){
                    //                     let ain1=row*3+col
                    //                     console.log("col")
                    //                     ifcount++
                    //                     return ain1
                    //                 }
                    //             }
                    //         }
                    //     }
                    // }

                    //     let diag1=['0','4','8']
                    //     let diag2=['2','4','6']
                    //     if(ifcount=0){
                    //     for(let diag1i of diag1){
                    //         // console.log(diag1i)
                    //         // console.log(win.includes(diag1i.toString()))
                    //         if(win.includes(diag1i.toString())){
                    //             diag1try++
                    //             // console.log(diag1try)
                    //         }
                    //     }
                    //     if(diag1try==2){
                    //     for(let diag1i of diag1){
                            
                    //             if((win.includes(diag1i.toString())==false)&&(loss.includes(diag1i)==false)){
                    //                 let ain1=diag1i
                    //                 console.log("diag1")
                    //                 ifcount++
                    //                 return ain1
                    //             }
                    //         }
                    //     }}
                    //     if(ifcount=0){
                    //     for(let diag2i of diag2){
                    //         // console.log(diag1i)
                    //         // console.log(win.includes(diag1i.toString()))
                    //         if(win.includes(diag2i.toString())){
                    //             diag2try++
                    //             // console.log(diag1try)
                    //         }
                    //     }
                    //     if(diag2try==2){
                    //     for(let diag2i of diag2){
                            
                    //             if((win.includes(diag2i.toString())==false)&&(loss.includes(diag2i)==false)){
                    //                 let ain1=diag2i
                    //                 console.log("diag2")
                    //                 ifcount++
                    //                 return ain1
                    //             }
                    //         }
                    //     }}
                    //     if(ifcount=0){
                    //     if((gridboxes[4].hasAttribute("style","color:rgb(0, 170, 255)")==false)&&(gridboxes[4].hasAttribute("style","color:rgb(255, 145, 0)")==false)){
                    //         ifcount++
                    //         return 4
                    //     }}
                    //     let corners=[0,2,6,8]
                    //     if(ifcount=0){
                    //     var crn=Math.random()
                    //     if(crn<=0.25){
                    //         if((gridboxes[0].hasAttribute("style","color:rgb(0, 170, 255)")==false)&&(gridboxes[0].hasAttribute("style","color:rgb(255, 145, 0)")==false)){
                    //             ifcount++
                    //             return 0
                    //         }
                    //     }
                    //     else if(crn<=0.5){
                    //         if((gridboxes[2].hasAttribute("style","color:rgb(0, 170, 255)")==false)&&(gridboxes[2].hasAttribute("style","color:rgb(255, 145, 0)")==false)){
                    //             ifcount++
                    //             return 2
                    //         }
                    //     }
                    //     else if(crn<=0.75){
                    //         if((gridboxes[6].hasAttribute("style","color:rgb(0, 170, 255)")==false)&&(gridboxes[6].hasAttribute("style","color:rgb(255, 145, 0)")==false)){
                    //             ifcount++
                    //             return 6
                    //         }
                            
                    //     }else{
                    //         if((gridboxes[8].hasAttribute("style","color:rgb(0, 170, 255)")==false)&&(gridboxes[8].hasAttribute("style","color:rgb(255, 145, 0)")==false)){
                    //             ifcount++
                    //             return 8
                    //         }
                            
                    //     }}
                            
                    //     // do{
                            
                            

                    //     // }while((gridboxes[crn].hasAttribute("style","color:rgb(0, 170, 255)")==true)&&(gridboxes[crn].hasAttribute("style","color:rgb(255, 145, 0)")==true)&&(corners.includes(crn)==false))
                    //     // return crn
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
// // )
