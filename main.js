//Ex1
let ex1 = document.getElementById('content')
function test(e) {
    //console.log(e.target);
    e.target.style.border = '2px solid red'
}
ex1.addEventListener('click', test)

