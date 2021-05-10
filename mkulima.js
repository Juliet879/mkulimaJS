class Mkulima{
    constructor(){
        this.farmList = [];
        this.productList = [];
        this.orderList = []
    }
    addFarm(farmId,name,farmer,phone,address){
        let aFarm = {farmId:farmId,name:name,farmer:farmer,phone:phone,address:address}
        return this.farmList.push(aFarm)
    }
    getFarm(farmId){
        for(var i=0;i<this.farmList.length;i++){
            let myFarm = this.farmList[i] 
            if(myFarm.farmId == farmId){
                return myFarm
            }
        }
    }
    updateFarm(farmId,name,farmer,phone,address){
        let updatedFarm = {farmId:farmId,name:name,farmer:farmer,phone:phone,address:address}
        return updatedFarm

    }
    removeFarm(farmId){
        let rmvFarm = this.getFarm(farmId)
        let position = this.farmList.indexOf(rmvFarm)
        return this.farmList.splice(position,1)
    }

    // Product section
    addProduct(productId,name,price){
        let aProduct = {productId:productId,name:name,price:price}
        return this.productList.push(aProduct)
    }
    getProduct(productId){
        for(var i=0;i<this.productList.length;i++){
            let myProduct = this.productList[i] 
            if(myProduct.productId == productId){
                return myProduct
            }
        }
    }
    updateProduct(productId,name,price){
        let updatedProduct = {productId:productId,name:name,price:price}
        return updatedProduct

    }
    removeProduct(productId){
        let product = this.getProduct(productId)
        let position = this.productList.indexOf(product)
        return this.productList.splice(position,1)
      }
    printProducts(){
        return this.productList
    }
    calculateOrdersList(price,quantity){
            return `${price * quantity}`
        }
}

var farms = new Mkulima()
farms.addFarm(2,"Kilgoris","Michael","0726045932",231433)
farms.addFarm(96,"Kinangop","Angella","0785432376",9678)
farms.addFarm(3,"Mali","Sindet","0753412768",655465)
farms.addFarm(12,"Nashilo","Zedekiah","0712517864",64345)
console.log(farms.farmList)

console.log(farms.getFarm(12))
console.log(farms.getFarm(12))
console.log(farms.getFarm(12))

console.log(farms.updateFarm(44,"Landini","Sindeti","073255434",084728))
console.log(farms.updateFarm(96,"Kinangop","Angella","0785432376",9678))
console.log(farms.farmList)

farms.removeFarm(2)
farms.removeFarm(96)
console.log(farms.farmList)

console.log(farms.calculateOrdersList(20,40))




var products = new Mkulima()
products.addProduct(6,"Onions",450)
products.addProduct(4,"Banana",500)
products.addProduct(3,"Potatoes",500)
products.addProduct(1,"Ovacado",500)
console.log(products.productList)

console.log(products.getProduct(6))
console.log(products.getProduct(4))
console.log(products.getProduct(3))


products.updateProduct(17,"Maize",1200)
products.updateProduct(65,"Beans",780)
console.log(products.productList)

products.removeProduct(2)
products.removeProduct(1)
console.log(products.productList)


