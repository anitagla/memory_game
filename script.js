var box = document.querySelectorAll('#game_box button');
var image = document.getElementsByClassName('overlay_img');
var count = 1;
var point = 0;
var clicks = 0, wrong = 0;
var srcA, srcB, imageA, imageB, selectedA, selectedB, actualA, actualB;


var gameDisp = document.getElementById('game_disp');
var generate = [16, 64, 80];
// console.log(gameDisp);
// var levels = [];

var buttonsLev = document.querySelector(".play_game");
var levels = document.querySelectorAll(".play_game button");
// console.log(levels);
// console.log(levels[1]);
var seconds = document.getElementById("seconds");


// random
var srcFiles = [
    'alpaca.png',
    'camel.png',
    'crocodile.png',
    'deer.png',
    'dolphin.png',
    'egret.png',
    'elephant.png',
    'fox.png',
    'giraffe.png',
    'goat.png',
    'gorilla.png',
    'hippopotamus.png',
    'kangaroo.png',
    'koala.png',
    'lion.png',
    'meerkat.png',
    'monkey.png',
    'ostrich.png',
    'owl.png',
    'parrot.png',
    'penguin.png',
    'polar_bear.png',
    'rabbit.png',
    'raccoon.png',
    'rhino.png',
    'sea_lion.png',
    'sloth.png',
    'squirrel.png',
    'zebra.png'
];
var srcElement = document.querySelectorAll(".box img");
srcElement.ondragstart = function() { return false; };


function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // return;
}

function generateNumbers(limit){
    var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
    ranNums = [],
    j = 0;

    while (limit--) {
        j = Math.floor(Math.random() * (nums.length));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }
    return ranNums;
}
var generatedTable = generateNumbers(8);

function duplicateTable(tab){
    return tab.map(function(item) {
        return [item, item];
    }).reduce(function(a, b) { return a.concat(b) });
}
var duplicated = duplicateTable(generatedTable);
shuffle(duplicated);
// console.log(duplicated);

var p=0;
[].forEach.call(srcElement, function(srcElement) {
// console.log(srcFiles.length);
    // var randomNumber = Math.floor(Math.random()*srcFiles.length);
    // console.log(randomNumber);
    // console.log(randomNumber);
    
    var newNumb = duplicated[p];
    // console.log(newNumb);
    p++;
    var newSrc = "./zoo/" + srcFiles[newNumb];
    // console.log(newSrc);
    srcElement.setAttribute('src', newSrc);
    // console.log(newSrc);
    
        // console.log(srcFiles.length);
    
});
// ---------

[].forEach.call(levels, function(levels) {
    
    levels.addEventListener('click', function(){
        var countUp = function() {
            var currentTime = parseFloat(seconds.textContent);
            seconds.textContent = currentTime + 1; 
        };
        var timer = window.setInterval(countUp, 1000);

        buttonsLev.style.display = 'none';
        var klasa = levels.getAttribute('class');
        // gameDisp.style.display = 'block';
        // levels.style.display = 'none';
        // console.log(klasa);

        if(klasa === "easy"){
            gameDisp.style.display = 'block';
            // console.log(document.getElementById("game_box"));
            // for(var i=0;i<16;i++){
            //     document.getElementById("game_box").innerHTML += '<div class="box box_4"><div class="overlay_img"><img src="./zoo/crocodile.png" width="60" height="60" alt=""></div></div>';
            // }
            buttonsLev;
            // console.log('last');
            // / add click to all boxes
            // console.log(clicks);
            [].forEach.call(box, function(box) {
                // console.log('lol');
                box.addEventListener('click', function(e){
                    e.preventDefault();
                    if(count === 1){
                        // show iamge after click
                        box.id = "show_image";
                        // take actual img
                        selectedA = box.className.substring(4);
                        // console.log(selectedA);
                        // url of img
                        imageA = document.querySelector('.'+selectedA+' .overlay_img img');
                        srcA = imageA.getAttribute('src').toString();
                        actualA = box;
                    }
                    else if (count === 2){
                        box.id += "show_image";
                        selectedB = box.className.substring(4);
                        // console.log(selectedB);
                        imageB = document.querySelector('.'+selectedB+' .overlay_img img');
                        srcB = imageB.getAttribute('src').toString();
                        actualB = box;
                        if(srcA == srcB){
                            clicks++;
                            function hideClassBox(){
                                actualA.className += " good";
                                actualA.setAttribute("disabled", "")
                                actualB.className += " good";
                                actualB.setAttribute("disabled", "")
                                count=1;
                                point++;
                                actualA.removeAttribute("id");
                                actualB.removeAttribute("id");
                                if(point === 8){
                                    window.clearInterval(timer);
                                    var points;
                                    if(wrong === 0){
                                        points = 100;
                                    }else{
                                        points = (10-(wrong/clicks))*10;
                                        points = Math.round(points)
                                    }
                                    // summary of game
                                    document.querySelector(".winner").style.display = "block";
                                    document.querySelector(".clicks").innerHTML = "All checks: " + clicks;
                                    document.querySelector(".wrong").innerHTML = "Wrong: " + wrong;
                                    document.querySelector(".time").innerHTML = "Total time: " + timer;
                                    document.querySelector(".points").innerHTML = "Points: " + points;
                                    function myScript(){
                                        location.reload()
                                    }
                                    document.getElementById("reset").addEventListener("click", myScript);
                                }
                            }
                            window.setTimeout(hideClassBox, 150, true)
                        }else{
                            wrong++;
                            clicks++;
                            function removeClassBox(){
                                actualA.removeAttribute("id");
                                actualB.removeAttribute("id")
                                count=1;
                            }
                            window.setTimeout(removeClassBox, 500, true)
                        }
                    }
                    count++;
                })
            });
        }else if(klasa === "medium"){
            console.log('ups');
            buttonsLev;
        }else if(klasa === "hard"){
            console.log('ojoj');
            buttonsLev;
        }
        
    });
});
// function clickBox(e){
//     console.log('lol');
//         e.preventDefault();
//         if(count === 1){
//             // show iamge after click
//             box.id = "show_image";
//             // take actual img
//             selectedA = box.className.substring(4);
//             console.log(selectedA);
//             // url of img
//             imageA = document.querySelector('.'+selectedA+' .overlay_img img');
//             srcA = imageA.getAttribute('src').toString();
//             actualA = box;
//         }
//         else if (count === 2){
//             box.id += "show_image";
//             selectedB = box.className.substring(4);
//             console.log(selectedB);
//             imageB = document.querySelector('.'+selectedB+' .overlay_img img');
//             srcB = imageB.getAttribute('src').toString();
//             actualB = box;
//             if(srcA == srcB){
//                 function hideClassBox(){
//                     actualA.className += " good";
//                     actualB.className += " good";
//                     count=1;
//                     point++;
//                     actualA.removeAttribute("id");
//                     actualB.removeAttribute("id");
//                     if(point === 8){
//                         var newDiv = document.createElement("div");
//                         newDiv.className = "winner"
//                         newDiv.innerHTML = "<div class='winner_box'>You win!</div>";
//                         document.querySelector(".memory_game").appendChild(newDiv);
//                     }
//                 }
//                 window.setTimeout(hideClassBox, 650, true)
//             }else{
//                 function removeClassBox(){
//                     actualA.removeAttribute("id");
//                     actualB.removeAttribute("id")
//                     count=1;
//                 }
//                 window.setTimeout(removeClassBox, 650, true)
//             }
//         }
//         count++;
// }
// add click to all boxes
// [].forEach.call(box, function(box) {
    
    // box.addEventListener('click', function(e){
    //     e.preventDefault();
    //     if(count === 1){
    //         // show iamge after click
    //         box.id = "show_image";
    //         // take actual img
    //         selectedA = box.className.substring(4);
    //         console.log(selectedA);
    //         // url of img
    //         imageA = document.querySelector('.'+selectedA+' .overlay_img img');
    //         srcA = imageA.getAttribute('src').toString();
    //         actualA = box;
    //     }
    //     else if (count === 2){
    //         box.id += "show_image";
    //         selectedB = box.className.substring(4);
    //         console.log(selectedB);
    //         imageB = document.querySelector('.'+selectedB+' .overlay_img img');
    //         srcB = imageB.getAttribute('src').toString();
    //         actualB = box;
    //         if(srcA == srcB){
    //             function hideClassBox(){
    //                 actualA.className += " good";
    //                 actualB.className += " good";
    //                 count=1;
    //                 point++;
    //                 actualA.removeAttribute("id");
    //                 actualB.removeAttribute("id");
    //                 if(point === 8){
    //                     var newDiv = document.createElement("div");
    //                     newDiv.className = "winner"
    //                     newDiv.innerHTML = "<div class='winner_box'>You win!</div>";
    //                     document.querySelector(".memory_game").appendChild(newDiv);
    //                 }
    //             }
    //             window.setTimeout(hideClassBox, 650, true)
    //         }else{
    //             function removeClassBox(){
    //                 actualA.removeAttribute("id");
    //                 actualB.removeAttribute("id")
    //                 count=1;
    //             }
    //             window.setTimeout(removeClassBox, 650, true)
    //         }
    //     }
    //     count++;
    // })
// });