var h1s=document.querySelectorAll("h1");
var index=0;
document.querySelector("#main")
.addEventListener("click", function(){
    gsap.to(h1s[index],{
    top:'-=100%',
    duration:0.3,
    ease: Expo.easeInOut,
    onComplete: function(){
 gsap.set(this._targets[0], {top: '100%'});
    },
    });
    index == h1s.length-1 ? (index=0):index++;
    gsap.to(h1s[index],{
        top:'-=100%',
        duration:1,
        ease: Expo.easeInOut,
    });
});