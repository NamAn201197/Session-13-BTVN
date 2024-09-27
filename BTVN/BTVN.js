/*  BT-01
    Viết chương trình khai báo đối tượng information 
    có các thuộc tính id, name, phone, address.
    Yêu cầu người dùng nhập vào thông tin cá nhân,
    lưu thông tin nhận được vào đối tượng và in ra màn hình.
*/

// let id = prompt("mời nhập id");
// let names = prompt("mời nhập tên");
// let phone = prompt("mời nhập sđt");
// let address = prompt("mời nhập địa chỉ");

// function information(id, name, phone, address) {
//   this.id = id;
//   this.name = name;
//   this.phone = phone;
//   this.address = address;
// }
// let info = new information(id, names, phone, address);
// console.log(info);

/*  BT-2
    Viết chương trình khai báo đối tượng information 
    có các thuộc tính id, name, phone, address.
    Tiến hành xóa thuộc tính address và thêm thuộc tính email cho đối tượng 
    và in đối tượng ra màn hình.
*/

// let info = {
//   id: "001",
//   name: "An",
//   phone: "070460",
//   address: "201/b",
// };

// // in đối tượng ban đầu
// // console.log("Thông tin ban đầu", info);

// //xóa thuộc tính trong đối tượng
// delete info.address;

// //thay đổi thuộc tính mới
// info.email = "...@gmail.com";

// //in đối tượng với thông tin mới
// console.log("Thông tin mới", info);

/*  BT-3
    Viết chương trình yêu cầu người dùng nhập vào
    số lượng sinh viên và thông tin của mỗi sinh viên
    Đối tượng sinh viên chỉ có 2 thuộc tính id và name.
    Tất cả sinh viên sẽ được lưu vào một mảng, in mảng các sinh viên ra màn hình.
*/

//tạo đối tượng là sinh viên
// function Student(id, name) {
//   this.id = id;
//   this.name = name;
// }

// //tạo mảng chứa số lượng sinh viên
// let studentList = [];

// //tạo 1 bảng thu thập thông tin
// let numberOfStudent = +prompt("Nhập số lượng sinh viên");

// // tạo vòng lặp để nhập thông tin sv
// for (let i = 0; i < numberOfStudent; i++) {
//   //nhập thông tin sv
//   let id = prompt("nhập id sv", i + 1);
//   let name = prompt("nhập tên sv", i + 1);

//   //tạo đối tượng sv mới
//   let student = new Student(id, name);
//   //đưa đối tượng sv vào mảng có sẵn
//   studentList.push(student);
// }
// console.log("danh sách sinh viên", studentList);

/*  BT-4 
    Viết chương trình khai báo đối tượng product bao gồm 
    các thuộc tính id, name, price, quantity.
    Tiến hành in tất cả các thuộc tính của product
    và giá trị của thuộc tính đó ra màn hình.
*/

//tạo đối tượng

// let product = {
//     id: 01,
//     name: "lenovo",
//     price: "22tr",
//     quantity: "none"
// }
// console.log(product);

/*  BT-5
    Viết chương trình khai báo mảng gồm nhiều đối tượng 
    Book có hai thuộc tính author và name
    Yêu cầu người dùng nhập tên Auth từ bàn phím thông qua hàm prompt()
    Sau đó tiến hành tìm kiếm thông tin sách theo tác giả
    Nếu tìm thấy thì in ra ngoài màn hình đối tượng Book tìm được, 
    nếu không tìm thấy thì in ra “Không tìm thấy sách”
*/

//tạo mảng chứa đối tượng
// let arr = [
//   {
//     author: "a",
//     name: "book1",
//   },
//   {
//     author: "b",
//     name: "book2",
//   },
//   {
//     author: "c",
//     name: "book3",
//   },
// ];
// // tạo vòng lập duyệt mảng và để ng nhập tìm kiếm
// let auth = prompt("Mời nhập tên tác giả");
// let result = [];

// // hàm tìm kiếm
// function findBook() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].author.indexOf(auth) != -1) {
//       result.push(arr[i]);
//     }
//   }
// }
// // gọi hàm tìm kiếm
// findBook();

// // in ra màn hình
// console.log("kết quả tìm kiếm", result);

/*  BT-6 
    Cho một mảng products chứa các đối tượng product gồm các thông tin sau
    Id, product_name, price.
    Xây dựng hàm để sắp xếp danh sách products tăng dần và 
    in ra mảng đã được sắp xếp ra 
*/

//tạo mảng
// let arr = [
//   {
//     id: 1,
//     name: "iphone 12",
//     price: 2000,
//   },
//   {
//     id: 2,
//     name: "iphone 11",
//     price: 1000,
//   },
//   {
//     id: 4,
//     name: "iphone 11",
//     price: 3000,
//   },
//   {
//     id: 3,
//     name: "note 10",
//     price: 5000,
//   },
// ];

// // tạo mảng rổng chứa kết quả:
// let product = [];

// //tạo hàm sắp xếp
// function sortByPrice(id, name, price) {
//     //(a,b) - là 2 đối tượng đầu trong mảng 
//     //(a.price) - là thuộc tính có trong đối tượng a
//   product = arr.sort((a, b) => a.price - b.price);
// }
// // gọi hàm
// sortByPrice();
// console.log("Sắp xếp giá trị tăng dần", product);
