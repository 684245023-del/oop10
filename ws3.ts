class Product{
    constructor(public name: string,public price: number,public quantity: number){}
    getSubtotal():number{
        return this.price*this.quantity;
    }
}
class Order{
    private products: Product[] =[];
    addProduct(p:Product):void{
        this.products.push(p);
        console.log(`${p.name} - ${p.price} x ${p.quantity} = ${p.getSubtotal()} บาท`);
    }
    calculateTotal():number {
        let total=0;
        for(const p of this.products){
            total += p.getSubtotal();
        }
        return total;
    }
    calculateDiscount(rate:number):number{
        return this.calculateTotal()* rate/100;
    }
    calculatNetTotal(rate:number):number{
        return this.calculateTotal()-this.calculateDiscount(rate);
    }
}
const order1 = new Order();
const p1 = new Product("Laptop",25000,4);
const p2 =new Product("Mouse",200,10);
const p3 = new Product("Scanner",12500,2);

order1.addProduct(p1);
order1.addProduct(p2);
order1.addProduct(p3);
const dise :number = 10;
console.log(`รวมเป็นเงิน ${order1.calculateTotal()} บาท`)
console.log(`ได้รับส่วนลด ${dise}% เป็นเงิน ${order1.calculateDiscount(dise)}`);
console.log(`ยอดที่ต้องชำระ ${order1.calculatNetTotal(dise)} บาท`)



