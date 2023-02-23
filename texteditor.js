
let textarea = document.querySelector("#textarea");

let bold = document.querySelector(".bold").addEventListener("click",function() {textarea.style.fontWeight="bold"})
let italic = document.querySelector(".italic").addEventListener("click",function() {textarea.style.fontStyle="italic"})
let underline = document.querySelector(".underline").addEventListener("click",function() {textarea.style.textDecoration="underline"})

let left = document.querySelector(".left").addEventListener("click",function() {textarea.style.textAlign="left"});
let center = document.querySelector(".center").addEventListener("click",function() {textarea.style.textAlign="center"});
let right = document.querySelector(".right").addEventListener("click",function() {textarea.style.textAlign="right"});
let justify = document.querySelector(".justify").addEventListener("click",function() {textarea.style.textAlign="justify"});


let size = document.getElementById("size");
size.addEventListener("change",function() {
    var value = size.value
    if (value>5) {
        size.value=0;
    }
    document.getElementById("textarea").style.fontSize=value+'rem';
    
});

let color = document.getElementById("color");
color.addEventListener("change",function() {
    let  value = color.value;
    document.getElementById("textarea").style.color = value;

});

let normal= document.getElementById("normal").addEventListener("click",function () {
    textarea.style.fontWeight="normal";
    textarea.style.fontStyle="normal";
    textarea.style.textDecoration="none";
    textarea.style.textAlign="left";
    textarea.style.fontSize="16px";
    textarea.style.color="black"

})


// let sizeChange = document.querySelector("size");
// let value= sizeChange.value;
// sizeChange.addEventListener("click",function(){

//     this.textarea.style.fontSize=`${value}px`
// })

