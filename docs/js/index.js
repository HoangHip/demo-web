// let  message = 'Welcome to my website'
//  const is unchanged var
// const welcome = function() {
//     alert(message)
// }

// const sum = function(a, b) {
//     return a+b;
// }
// const sum2 = (a, b) =>a + b

// const handleClick = () => {
//     alert('Click')
// }

// let string = 'abc'

// window.onclick = handleClick
// let count = 0

// function handleClick() {
//     count++
//     console.log(count)
// }
// window.onclick = handleClick
// Obj trong js
// alt+shift+f tự căn chỉnh clean code
// // console.log là in mọi thứ ra màn hình console
// const array = [1, 2, 3]
// let count = 0

// const clickEvent = {
//     handleClick: function () {
//         // console.log(array[0] + array[1] + array[2])
//         count++
//         if (count == 1) {
//             console.log("first click")
//         } else if (count == 2) {
//             console.log("second click")
//         } else {
//             console.log("count: " + count)
//         }
//         switch (count) {
//             case 1: {
//                 console.log("first click")
//                 break
//             }
//             case 2: {
//                 console.log("second click")
//                 break
//             }
//             default: {
//                 console.log("count: " + count)
//             }
//         }

//     }
// }

// window.onclick = clickEvent.handleClick

// const components = {
//     header: `
//     <h1>Website</h1>
//     `,
//     content: `
//     <p> Website content </p>
//     `
// }

// window.onload = init

// function init() {
//     document.getElementById('app').innerHTML = components.header
// }

window.onload = init

function init() {
    controller.initAuth()
}
