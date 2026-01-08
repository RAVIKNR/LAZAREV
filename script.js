
function locomotive(){

gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,


  // for tablet smooth
  tablet: { smooth: true },


  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }


  // follwoing line is not required to work pinning on touch screen


  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
locomotive()

function navAnimation() {
    let nav = document.querySelector('nav');

nav.addEventListener('mouseenter',()=>{
    
  let tl = gsap.timeline();

    tl.to(".bottom-nav",{
        height: "21.4vh",
        duration: 0.4
    });
    tl.to(".nav2 h5",{
        display: "block",
        duration: 0.2
    });
    tl.to(".nav2 h5 span",{
        y:0,
       
        stagger:{
            amount: 0.5
        }
    });
}); 
nav.addEventListener('mouseleave',()=>{
    
   let tl = gsap.timeline();
   
    tl.to(".nav2 h5 span",{
        y:25,
        stagger:{
            amount: 0.1
        }
    });
    tl.to(".nav2 h5",{
        display: "none",
        duration: 0.1
    });
   

    tl.to(".bottom-nav",{
        height: "0",
        duration: 0.2
    });
    
}); }

navAnimation();


function page2Transition(){

let rightEle = document.querySelectorAll('.right-ele');

rightEle.forEach((ele)=>{
    ele.addEventListener('mouseenter',()=>{
        gsap.to(ele.childNodes[3],{
            opacity: 1,
            scale: 1
        });
    });
    ele.addEventListener('mouseleave',()=>{
        gsap.to(ele.childNodes[3],{
            opacity: 0,
            scale: 0
        });
    });

    ele.addEventListener('mousemove',(dets)=>{
    gsap.to(ele.childNodes[3],{
        x: dets.x - ele.getBoundingClientRect().x-90 ,
        y: dets.y - ele.getBoundingClientRect().y-200
    });
});
});
}
page2Transition()


function page3Transition()
{

    let video = document.querySelector(".page3 video");
    pagecentre =  document.querySelector(".page3-centre")
    
    pagecentre.addEventListener('click',() => {
        console.log("sxijhxlas")
       video.play()
       gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:"0"
        
       })
    });

    video.addEventListener('click',() => {
        console.log("sxijhxlas")
       video.pause()
       gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
        
       })
    });
    
  
}

page3Transition();


function page4transition(){

// let video1 = document.querySelectorAll(".sec2 video")
let section = document.querySelectorAll(".sec2")

section.forEach((ele)=>{

ele.addEventListener("mouseenter",()=>{
    console.log("bb.s")
   
    ele.childNodes[3].play()
    ele.childNodes[3].style.opacity=1;
   

})

ele.addEventListener("mouseleave",()=>{

       ele.childNodes[3].load()
    ele.childNodes[3].style.opacity=0;
   
})

});

}

page4transition();




function circle(){
let circle =  document.querySelectorAll(".circle")
let sec = document.querySelectorAll(".sec2")

sec.forEach(ele => {
    ele.addEventListener("mouseenter",()=>{

        console.log(ele.children)
        gsap.to(ele.children[2],{
        opacity:1,
        duration:0.4
        })
    
});
    
    ele.addEventListener("mouseleave",()=>{
    gsap.to(ele.children[2],{
        opacity:0,
        duration:0.4
        })
});

   ele.addEventListener("mousemove",(dets)=>{

    gsap.to(ele.children[2],{
    x: dets.x - ele.getBoundingClientRect().x- 30,
    y: dets.y - ele.getBoundingClientRect().y - 260
    });
    
})
});

}

circle();

function mark(){


let toe = document.querySelector(".content")
let safed = document.querySelector(".content span i")

   toe.addEventListener(("click"),()=>{
    if(safed.style.color==="white"){
        safed.style.color="grey";
    }
    else{
        safed.style.color="white";
    }
});
    let arr = document.querySelector(".arrow")
    let saaf = document.querySelector(".arrow span i")
    
       arr.addEventListener(("click"),()=>{
        if(saaf.style.color==="grey"){
             saaf.style.color="white";
        }
        else{
            saaf.style.color="grey";
        }
});






}


mark();





function anisecanima(){

gsap.from(".anisec1 h5",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".anisec1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})




gsap.from(".anisec2 h5",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".anisec2",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})


gsap.from(".anisec3 h5",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".anisec3",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})

}
anisecanima();





gsap.from("#page-1",{
  transform:"scaleX(0.7) scaleY(0.2)"
  
})
