let chooseElement;
let chooseMixture;
let container = document.getElementById("elementSpace");


const move = function(element){
  const elements = document.querySelectorAll(".primaryElement");
 
  elements.forEach(element => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      
      chooseElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseElement.style.left = x + "px";
        chooseElement.style.top  = y + "px";

        if(fire.style.top == water.style.top || fire.style.left == water.style.left){
          let steamy = document.getElementById("steam");
          steamy.style.opacity = 100;
          container.appendChild(steamy);
          container.style.position ="absolute";
          
        }
        if(fire.style.top == air.style.top || fire.style.left == air.style.left){
          let smoke = document.getElementById("smoke");
          smoke.style.opacity = 100;
          container.appendChild(smoke);
          container.style.position ="absolute";
        }
        if(water.style.top == earth.style.top || earth.style.left == water.style.left){
          let mud = document.getElementById("mud");
          mud.style.opacity = 100;
          container.appendChild(mud);
          container.style.position ="absolute";
        }
        if(mud.style.top == fire.style.top || mud.style.left == fire.style.left ||  fire.style.left == mud.style.left){
          let brick = document.getElementById("brick");
          brick.style.opacity = 100;
          container.appendChild(brick);
          container.style.position ="absolute";
        }
        if(fire.style.top === earth.style.top || fire.style.left === earth.style.left ){
          let lava = document.getElementById("lava");
          lava.style.opacity = 100;
          container.appendChild(lava);
          container.style.position ="absolute";
        }

        
      }
    })
  })

    document.onmouseup = function(e){
      chooseElement=null;
    }
}



  












  //add dragging to combined elements
const moveMixture = function(mixture){
  const mixtures = document.querySelectorAll(".mixture");
 
  mixtures.forEach(mixture => {
    mixture.addEventListener("mousedown", () => {
      mixture.style.position = "absolute";
      chooseMixture = mixture;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseMixture.style.left = x + "px";
        chooseMixture.style.top  = y + "px";
      }
    })
  })

  document.onmouseup = function(e){
    chooseMixture=null;
    chooseElement=null;
  }
}


let hintButton = document.querySelector("#cheatSheetButton");
hintButton.addEventListener("click", function(){
  let hintPage = document.getElementById("hintPage");
  hintPage.style.display = "flex";
 
});


let exitHintButton = document.querySelector("#exitHintButton");
exitHintButton.addEventListener("click", function(){
  let hintPage = document.getElementById("hintPage");
  hintPage.style.display = "none";
});

let rulesButton = document.querySelector("#rulesButton");
rulesButton.addEventListener("click", function(){
  let rulesPage = document.getElementById("rulesPage");
  rulesPage.style.display = "flex";
});

let exitRulesButton = document.querySelector("#exitRulesButton");
exitRulesButton.addEventListener("click", function(){
  let rulesPage = document.getElementById("rulesPage");
  rulesPage.style.display = "none";
});

let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function(){
  location.reload();
});

let darkModeButton = document.querySelector("#dark");
darkModeButton.addEventListener("click", function(){
  resetButton.style.backgroundColor = "";
  rulesButton.style.backgroundColor = "";
  cheatSheetButton.style.backgroundColor = "";
  rulesButton.style.backgroundColor = "";
  darkModeButton.style.backgroundColor = "";
  lightModeButton.style.backgroundColor = "#04ff8a";
});

let lightModeButton = document.querySelector("#light");
lightModeButton.addEventListener("click", function(){
  resetButton.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
  rulesButton.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
  cheatSheetButton.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
  rulesButton.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
  darkModeButton.style.backgroundColor = "#04ff8a";
  lightModeButton.style.backgroundColor = "black";
  darkModeButton.style.width = "35%";
  lightModeButton.style.width = "15%";
});




let scorePoints = 50;


let scoreBoard = document.querySelector("#scoreBoard");

scoreBoard.addEventListener("click", function(){
  scorePoints = scorePoints + 1;
})

prompt(scorePoints);

let clues = [
  [ fire.png + "+" + air.png],
  [water.png + "+" + air.png],
  [  mud.png + "+" + fire.png],

];

