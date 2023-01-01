// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);

// let arr = document.body.childNodes;
// for (let i = 0; i < arr.length; i++) {
    // console.log(arr);

    let arr = Array.from(document.body.childNodes); // convert to array
    console.log(arr);
    arr.forEach(function (element) {
        console.log(element);
    });

