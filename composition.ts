class Engine{
    constructor(private type: string){}
    start():void{
        console.log(`เครื่องยนตร์ ${this.type} กำลงัทำงาน`);
    }
    stop():void{
        console.log(`เครื่องยนตร์ ${this.type} หยุดทำงาน`);
    }
    showInfo():void{
        console.log(`เครื่องยนต์ชนิด ${this.type}`)
    }
}
class Battery{
    constructor(private capacity: number){}
    charge():void{
        this.showInfo();
        this.capacity =100;
        console.log(`ชาร์จเรียบร้อย`)
        this.showInfo();

    }
    showInfo():void{
        console.log(`ขณะนี้เเบตเตอร์รี่คงเหลือ ${this.capacity}% `);
    }
}

class Car{
    private engine: Engine;
    private battery: Battery;
    constructor(type: string,capacity: number){
        this.engine = new Engine(type);
        this.battery = new Battery(capacity);
    }
    startCar():void{
        this.engine.start();
    }
    stopCar():void{
        this.engine.stop();
    }
    chargeBattery():void{
        this.battery.charge();
    }
    showCarInfo():void{
        this.engine.showInfo();
        this.battery.showInfo();
    }
}
const car1 = new Car("v6",10);
car1.startCar();
car1.showCarInfo();
car1.chargeBattery();
car1.stopCar();