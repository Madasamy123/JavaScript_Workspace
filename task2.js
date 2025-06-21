

// shoping Cart amazon
// classes

// 1. products
// 2. cartItems
// 3. cart


// behavious


//    addItem
//    updateItemQuantity
//    removeItem
//    getTotalAmount
//    listItems


class Product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
        
    }

}

class cartItem{
    constructor(product,quantity){
        this.product=product;
        this.quantity=quantity;
    }

    getTotalPrice(){
        return this.product.price*this.quantity;
    }


}


class cart{
    constructor(){
        this.items=[];
    }


    addItem(product,quantity){
        const existing=this.items.find(item=>item.product.id===product.id);

        if(existing){
            existing.quantity+=quantity;
        }
        else{
            return this.items.push(new cartItem(product,quantity));
        }
    }

    updateItemQuantity(productId, newQuantity) {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
        item.quantity = newQuantity;
    }
}


    removeItem(ProductId){
       this.items=this.items.filter(item=>item.product.id!=ProductId);

    }

    getTotalAmount(){
        let total=0;

        for(let i=0;i<this.items.length;i++){
            total+=this.items[i].getTotalPrice();
        }
          return total;
    }

    listItems(){
       return this.items;
    }



}

 const prd1=new Product(1,"IPhone",56000);
 const prd2=new Product(2,"Charger",900);
 const prd3=new Product(3,"HeadPhone",1500);



 const cart1=new cart()
 cart1.addItem(prd1,2);
 cart1.addItem(prd2,2);
  cart1.addItem(prd3,1);

cart1.updateItemQuantity(1,5);

  cart1.removeItem(3);
  
console.log("item removed")

 console.log(cart1.listItems())

console.log(cart1.getTotalAmount());






 



