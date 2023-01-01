console.log("hello world");

console.log(document.querySelector("h1").innerText);

// change the text of the h1 element



function changeText() {
    setTimeout(function () {
        document.querySelector("h1").innerText = "Goodbye";
      },0);
    document.body.style.backgroundColor = "red";
    // underline the h1 element
    document.querySelector("h1").style.textDecoration = "underline";
    // change the color of the h1 element
    document.querySelector("h1").style.color = "blue";
}
