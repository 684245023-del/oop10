export{};
class CPU{
    constructor(private brand: string,private cors: number){}
    proces(){
        this.showInfo();
        console.log("CPU กำลังทำงาน");
    }
    showInfo(){
        console.log(`CPU - ${this.brand} ${this.cors} cors`)
    }
}
class RAM{
    constructor(private capacity: number){}
    load(){
        this.showInfo();
        console.log(`RAM กำลังโหลดข้อมูล`);
    }
    showInfo(){
        console.log(`RAM - ${this.capacity} GB`)
    }
    

}
class Storage{
    constructor(private _capacity: number,private type:string){}
    readData(){
        this.showInfo();
        console.log(`Storage กำลังโหลดข้อมูล`)
    }
    showInfo(){
        console.log(`Storage - SSD ${this.type} Capacity ${this._capacity}`)
    }
}
class Computer{
    private cpu:CPU;
    private ram: RAM;
    private storage:Storage;
    constructor(brand:string,cors:number,capacity:number,type:string,_capacity:number){
        this.cpu = new CPU(brand,cors);
        this.ram = new RAM(capacity);
        this.storage = new Storage(_capacity,type);
    }
    boot():void{
        this.cpu.proces();
        this.ram.load();
        this.storage.readData();
    }
}
const pc1 = new Computer("Intel",8,16,"SSD",512);
pc1.boot();