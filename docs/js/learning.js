// variable
// let, const
// int number = 1;
// char* str;

// int, char, double, boolean... ~ let (const)
// let ~ local variable : biến chỉ có td trong 1 phạm vi rất nhỏ
// function sum(a, b) {
// let total = a + b
// return total
// }
// const ~ big scope local variable, global variable : dùng được ở nhiều nơi (e.g: các file khác nhau)
// và không thể thay đổi
// const view

// function

// funtion async : hàm bất đồng bộ
// Promise ( tra GG-sama)

//callback chạy hàm bất đồng bộ nhưng vẫn tạo luồng như mong muốn : loaded -> hiển thị
// function loadImage(callback) {
//     let url = 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?auto=format&fit=crop&w=1600&h=500&q=60'
//     let image = new Image()
//     image.src = url
//     image.onload = imageLoadHandler
//     image.onerror = errorHandler

//     function imageLoadHandler() {
//         console.log('Loaded image!!')
//         callback(null, image)
//     }

//     function errorHandler(error) {
//         callback(error)
//     }
// }

// Promise : tra GG-sama

// function loadImage() {
//     return new Promise(function (resolve, reject) {
//         let url = 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?auto=format&fit=crop&w=1600&h=500&q=60'
//         let image = new Image()
//         image.src = url
//         image.onload = imageLoadHandler
//         image.onerror = errorHandler

//         function imageLoadHandler() {
//             console.log('Loaded image!!')
//             resolve(image)
//         }

//         function errorHandler(error) {
//             reject(error)
//         }
//     })
// }

// function display() {
//     console.log("hello user!")
// }

// function process() {
//     loadImage()
//     display()
// }
// function process() {
//     loadImage(loadImageCallback)

//     function loadImageCallback(error, data) {
//         // những giá trị tính là flase trong if/else : undefined, null, NaN(not a number), flase, 0, ""        
//         if (error) {
//             console.log('Error!')
//         } else {
//             display()
//             console.log(data)
//         }
//     }
// }
// async function process() {
//     // loadImage > return Promise
//     // try-catch để test lỗi (gần như các ngôn ngữ có)
//     try {
//         let image = await loadImage()
//         // muốn dùng await phải khai báo async đầu function
//         display()
//         console.log(image)
//     } catch(error) {
//         console.log(error)
//     }
// }

// process()



// // object
// attributes, methods

var obj = {
    fistname: "Ta Hoang",
    lastname: "Linh",
    saySomething: function {
        console.log(obj.firstname + "" + obj.lastname)
    }
}

var keys = Object.keys(obj)
var values = Object.values(obj)
var entries = Object.entries(obj)
// array

var arr = [1, 2, "aa", obj, true, console]
var arr2 = []
arr2.push(1)
arr2.push(2)
arr2.push("aa")

// trả ra kết quả là 1 array mới, không thay đổi arr được ghi
// map
// filter
// sort
// concat

// sửa trực tiếp arr được gọi
// splice

// string, number

// type of

function getStringLength(str) {
    if(typeof str == 'string') {
        return str.length
    }
    return -1
}

getStringLength(0)
getStringLength([])
getStringLength("abc")

// substring cắt chuỗi (start, end)

// parseInt('1') convert string -> int