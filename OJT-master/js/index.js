let store = document.getElementById(`store`);
let user = document.getElementById("user");
let relog = document.getElementById("relog");

let products = [
    {
        id: 1,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsecqat4nkqsc4`,
        name: `Áo Thun DSQ2 Phối Khóa Kéo Ngang Ngực Chữ DSQUARED2 - Áo Phông Chất Cotton Dày Dặn Cao Cấp`,
        price: 130,
        stock: 999,
    },
    {
        id: 2,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsnks8jtfkxwb2`,
        name: `Giày Nike_LV Xám Trắng Nam Nữ,Giày AF1 LV Xám Trắng Hàng Hót Trend 2024 Full Box Bill`,
        price: 234,
        stock: 999,
    },
    {
        id: 3,
        image: `https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lrfa33k4vy5p5d`,
        name: `Pin sạc dự phòng trong suốt dung lượng lớn 50000mah Sạc nhanh, với cổng sạc nhanh 2 22,5w và sạc nhanh hai chiều 20W PD`,
        price: 219,
        stock: 999,
    },
    {
        id: 4,
        image: `https://down-vn.img.susercontent.com/file/6935cce9aa5dda4497244859eaf40d4f`,
        name: `Mũ Lưỡi Trai Nón Lưỡi Trai Thời Trang Hàn Quốc EDIKO`,
        price: 45,
        stock: 999,
    },
    {
        id: 5,
        image: `https://down-vn.img.susercontent.com/file/sg-11134201-7rbmh-lm7ikm5a8ml6e4`,
        name: `Quần jean nam ống rộng VOCKOO 2023 DS07202`,
        price: 199,
        stock: 999,
    },
    {
        id: 6,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lotmq9dew16z3e`,
        name: `Lắc tay bạc TLEE cuff nam nữ đeo cá tính TleeJewelry LT0137`,
        price: 427,
        stock: 999,
    },
    {
        id: 7,
        image: `https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lsuryywh5w4dc7`,
        name: `Flower Knows Son Lì Hình Thiên Thần Nhỏ 3.5g`,
        price: 430,
        stock: 999,
    },
    {
        id: 8,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq8v5xv4sjlj28`,
        name: `Quần Skinny Jeans Biker Nam FNOS Streetwear Màu Mid Indigo Wash Rách NZ55 - Local Brand Chính Hãng`,
        price: 780,
        stock: 999,
    },
    {
        id: 9,
        image: `https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lib5yr34oewm9f`,
        name: `Túi đeo vai MOYYI vải oxford cỡ lớn chống mòn không thấm nước thời trang cho nam`,
        price: 88,
        stock: 999,
    },
    {
        id: 10,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfccz51dxvudc4`,
        name: `Bóp Da Nam Cao Cấp Hàng Hiệu POLO MEISDO `,
        price: 999,
        stock: 999,
    },
    
];
        
localStorage.setItem("products", JSON.stringify(products));
        
function render() {
    let data='';
    for(let i=0;i<products.length;i++){
        data += `
                <a href="../pages/product-detail.html?id=${products[i].id}" id="product" class="products-content" style="padding: 5px; text-decoration: none; color: black; max-width: 210px;">
                <img style="width: 200px; height: 200px;" src="${products[i].image}">
                <p class="product-name">${products[i].name}</p>
                <p style="color: red;">${products[i].price}.000 <u>đ</u></p>
                </a>
                `
    }
    store.innerHTML = data;
}
render();
        
let userLogin = JSON.parse(localStorage.getItem("users"))||[];
let renderUser = JSON.parse(localStorage.getItem("login"))||[];
        
setTimeout(checkUser, 2000);
        
function checkUser() {
    if(renderUser==""){
        relog.style.display = "block";
        user.innerHTML = "";
        window.location.href = "../pages/login.html";
    }
}
if(renderUser!=""){
    relog.style.display = "none";
    for(let i=0;i<userLogin.length;i++){
        if(renderUser==userLogin[i].email){
            user.innerHTML = `
                            <div class="userInfor">
                                <a href="#">
                                <img style="width: 20px; height: 20px;" src="../assets/images/avt.png">
                                <t>${userLogin[i].name}</t>
                                </a>
                                <div class="userDown">
                                    <a href="#">Tài khoản của tôi</a>
                                    <a href="#">Đơn mua</a>
                                    <a href="../pages/login.html" onclick="logout(event)">Đăng xuất</a>
                                </div>
                            </div>
                            `
        }
    }
}
function logout(event) {
    localStorage.removeItem("login");
    relog.style.display = "block";
    user.innerHTML = "";
}

let cartCount = document.getElementById("count");
        
for (let i = 0; i < userLogin.length; i++) {
    if(userLogin[i].cart != ""){
        cartCount.style.display = "block";
        cartCount.innerHTML = userLogin[i].cart.length;
        break;
    }else{
        cartCount.style.display = "none";
    }
}