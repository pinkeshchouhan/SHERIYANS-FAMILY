
var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursorblur")
 document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30 + "px"
    crsr.style.top = dets.y +  "px"
    blur .style.left = dets.x - 150 +"px"
    blur .style.top = dets.y - 150 + "px"
    
})

var h4all = document.querySelectorAll(".nav h4")
    h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #befd12b9"
        crsr.style.backgroundColor = "#befd12b9"
        
    })

})

gsap.to(".nav",{
    backgroundColor:"black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
    trigger :".nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end: "top -11%",
    scrub:1,
    }
})

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
    trigger:".main",
    scroller:"body",
    // markers:true,
    start:"top-25%",
    end:"top -75%",
    scrub:2
    }

})

gsap.to (".aboutus img,#aboutusin",{
    y:50,
    opacity:0,
    duration:0.30,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }

})

gsap.to (".card",{
    scale:0.8,
    opacity:0,
    duration:0.30,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }

})

gsap.to("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    }
})


gsap.to("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    }
})

gsap.to(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 75%",
        scrub:3

    }
})




