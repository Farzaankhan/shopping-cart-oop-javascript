let btn = document.getElementById("addbtn");
let btn2 = document.getElementById("addbtn2");
let btn3 = document.getElementById("addbtn3");
let rev = document.getElementById("revbtn");
let ul = document.getElementById("ull");
let total = document.getElementById("total");
let discount = document.getElementById("discount");


class product {
    constructor(name,price,stock) {
        this.name= name;
        this.price = price;
        this.stock = stock;
    }
}

class Cart {
    constructor() {
        this.item = [];
    }
    addproduct(products){
       this.item.push(products);
       let list  = document.createElement("li");
       list.textContent = `${products.name} Rs ${products.price}`;
       list.classList.add("listo");
       ul.prepend(list);
      
      this.calculate();
   
    }
    removeproduct(){
        if (this.item.length >0) {
            this.item.splice(0,1);
            ul.firstElementChild.remove();
            this.calculate();
        }else{
            alert("there are no items to remove ");
        }
    }
    calculate(){
    let sum = 0;
    let dis =  0;

    this.item.forEach(item => {
        sum += item.price;
    });
 
    total.textContent = `Total: Rs. ${sum}`;
    if (sum >= 10000) {
    dis = sum * 0.10;
    let final = sum - dis;
    discount.textContent = `After discount Rs. ${final}`;
} else {
    discount.textContent = `No discount. Total Rs. ${sum}`;
}

    }
}
let  cart = new Cart();
const shirt = new product("poloShirt",1500,400);
const shoes = new product("NikiAura7",3000,400);
const watch = new product("t2",2500,400);

btn.addEventListener("click",()=>{
    cart.addproduct(shirt);
   
});
console.log(shirt);

btn2.addEventListener("click", () => {
    cart.addproduct(shoes);
});

btn3.addEventListener("click", () => {
    cart.addproduct(watch);
});

rev.addEventListener("click", () => {
    cart.removeproduct();
});