var box = document.querySelectorAll('.box');
var image = document.getElementsByClassName('overlay_img');
var count = 1;
var point = 0;
var srcA, srcB, imageA, imageB, selectedA, selectedB, actualA, actualB;

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
                window.setTimeout(hideClassBox, 350, true)
            }else{
                function removeClassBox(){
                    actualA.removeAttribute("id");
                    actualB.removeAttribute("id")
                    count=1;
                }
                window.setTimeout(removeClassBox, 350, true)
            }
        }
        count++;
    })
});