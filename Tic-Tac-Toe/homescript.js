let mb1=document.body.querySelectorAll(".markbtn")
let mb=Array.from(mb1)
let a1=document.body.querySelectorAll(".newgamebtna")
let a2=document.body.querySelectorAll(".newgamebtnapvp")
let a=a1[0]
let b=a2[0]
let k=1
let x=-1
function btnchange1(x){
    mb[x].setAttribute("style","background-color: rgb(175, 175, 175);color: rgb(21, 47, 56);")
}
function btnchange2(x){
    mb[x].removeAttribute("style","background-color: rgb(175, 175, 175);color: rgb(21, 47, 56);")
}
for(let i in mb){
    mb[i].addEventListener("click",function(){
        if(k%2==1){
            btnchange1(i)
            k++
        }else{
            btnchange2(i)
            k++
        }

        if(i==0){
            btnchange2(1)
            btnchange1(0)
        }
        if(i==1){
            btnchange2(0)
            btnchange1(1)
        }

        if (mb[0].hasAttribute("style","background-color: rgb(175, 175, 175);color: rgb(21, 47, 56);")==true){
            a.setAttribute("href","X.html")
            b.setAttribute("href","Xpvp.html")
        }else if (mb[1].hasAttribute("style","background-color: rgb(175, 175, 175);color: rgb(21, 47, 56);")==true){
            a.setAttribute("href","O.html")
            b.setAttribute("href","Opvp.html")
        }else{
            a.setAttribute("href","")
            b.setAttribute("href","")
        }
    })
}