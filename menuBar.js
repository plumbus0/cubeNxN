homeBarTagEl = document.getElementsByTagName("insertBar")
DarkLightTagEl = document.getElementsByTagName("insertD-L")

if(homeBarTagEl.length > 0){
    
    homeBarTagEl[0].innerHTML='<div class="outer-box" onmouseenter="startMenuanimation()"><div class="rotate"><div id="imgCon"><img class="imglogo" src="img/logo.png"></div><div id="link-home" class="innerline"><div class="inner-text" >Home<div class="underline red"></div></div><div class="line redAdd"></div></div><div id="link-dash" class="innerline"><div class="inner-text" >Dashboard<div class="underline blue"></div></div><div class="line blueAdd"></div></div><div id="link-tu" class="innerline"><div class="inner-text" >Tutorials<div class="underline green"></div></div><div class="line greenAdd"></div></div></div></div>';

    document.getElementById("link-home").addEventListener('click', function() {
        if(openMenu==true){
            window.location.href = 'index.html';
        }
    });
    
    document.getElementById("link-dash").addEventListener('click', function() {
        if(openMenu==true){
            window.location.href = 'Dashboard.html';
        }
    });
    
    document.getElementById("link-tu").addEventListener('click', function() {
        if(openMenu==true){
            window.location.href = 'tutorials.html';
        }
    });
}

if(DarkLightTagEl.length > 0){
    DarkLightTagEl[0].innerHTML='<div onclick="toggleDark()" class = "outterContainLD toggleDark" > <div class="backLD toggleDark"> <div class="lightSide side toggleDark"> </div>  <div class="darkSide side toggleDark"> </div></div> </div>';
}

// add in darkMode and make page dark on load
function setUp(){
    if(localStorage.getItem("darkMode") == null){
        localStorage.setItem("darkMode","false")
    }
    if(localStorage.getItem("darkMode") == "true"){
        //add a small delay to wait for element to load in        
        setTimeout(()=>{updateMode()},1)

    }
}

function updateMode(){
    elementsDarks = document.getElementsByClassName("toggleDark");
    for(let i=0;i<elementsDarks.length;i++){
        elementsDarks[i].classList.toggle("dark");
    }
}

JSON.parse(localStorage.getItem("darkMode"))

function toggleDark(){
    if(localStorage.getItem("darkMode") == "false"){
        localStorage.setItem("darkMode","true")
        updateMode()
    }else{
        localStorage.setItem("darkMode","false")        
        updateMode()
    }
}

window.onload = setUp()

//-------------------------------------------------------------------
var openMenu = false;


function startMenuanimation(){
    if(openMenu == false){

        document.getElementsByClassName("rotate")[0].classList.add("stage1-rotate")
        setTimeout(() => {
            document.getElementsByClassName("outer-box")[0].classList.add("stage2-wide")
        }, 120);
        setTimeout(() => {
            document.getElementById("imgCon").classList.add("stage3-imgShow")            
            for (let i = 0; i < 3; i++) {
                document.getElementsByClassName("inner-text")[i].classList.add("stage3-text")            
            }
        }, 500);
        setTimeout(() => {
            openMenu = true
        }, 1000)
            
    }
}

document.addEventListener('mousemove', (event) => {
    y = event.clientY;
    if(y>300){
        if(openMenu == true){
            endMenuanimation()
        }
    }
});

function endMenuanimation(){

    //create a delay
    document.getElementById("imgCon").classList.remove("stage3-imgShow");
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("inner-text")[i].classList.remove("stage3-text");
    }
    setTimeout(() => {
        document.getElementsByClassName("outer-box")[0].classList.remove("stage2-wide");
    }, 200);
    setTimeout(() => {
        //the Menu may get closed during the animation piriod 
        if(openMenu == true){
            document.getElementsByClassName("rotate")[0].classList.remove("stage1-rotate");
        }
        openMenu = false
    }, 1000);
}