var box = document.querySelectorAll('.box');
var image = document.getElementsByClassName('overlay_img');
var count = 1;
var point = 0;
var srcA, srcB, imageA, imageB, selectedA, selectedB, actualA, actualB;


var gameDisp = document.getElementById('game_disp');
console.log(gameDisp);
// var levels = [];

var buttonsLev = document.querySelector(".play_game");
var levels = document.querySelectorAll(".play_game button");
console.log(levels);
console.log(levels[1]);

[].forEach.call(levels, function(levels) {
    
    levels.addEventListener('click', function(){
        buttonsLev.style.display = 'none';
        console.log(levels);
        var klasa = levels.getAttribute('class');
        // gameDisp.style.display = 'block';
        // levels.style.display = 'none';
            console.log(klasa);

        if(klasa === "easy"){
            gameDisp.style.display = 'block';
            buttonsLev;
        }else if(klasa === "medium"){
            console.log('ups');
            buttonsLev;
        }else if(klasa === "hard"){
            console.log('ojoj');
            buttonsLev;
        }
        
    });
});

// add click to all boxes
[].forEach.call(box, function(box) {
    box.addEventListener('click', function(e){
        e.preventDefault();
        if(count === 1){
            // show iamge after click
            box.id = "show_image";
            // take actual img
            selectedA = box.className.substring(4);
            console.log(selectedA);
            // url of img
            imageA = document.querySelector('.'+selectedA+' .overlay_img img');
            srcA = imageA.getAttribute('src').toString();
            actualA = box;
        }
        else if (count === 2){
            box.id += "show_image";
            selectedB = box.className.substring(4);
            console.log(selectedB);
            imageB = document.querySelector('.'+selectedB+' .overlay_img img');
            srcB = imageB.getAttribute('src').toString();
            actualB = box;
            if(srcA == srcB){
                function hideClassBox(){
                    actualA.className += " good";
                    actualB.className += " good";
                    count=1;
                    point++;
                    actualA.removeAttribute("id");
                    actualB.removeAttribute("id");
                    if(point === 8){
                        var newDiv = document.createElement("div");
                        newDiv.className = "winner"
                        newDiv.innerHTML = "<div class='winner_box'>You win!</div>";
                        document.querySelector(".memory_game").appendChild(newDiv);
                    }
                }
                window.setTimeout(hideClassBox, 650, true)
            }else{
                function removeClassBox(){
                    actualA.removeAttribute("id");
                    actualB.removeAttribute("id")
                    count=1;
                }
                window.setTimeout(removeClassBox, 650, true)
            }
        }
        count++;
    })
});