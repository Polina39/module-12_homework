class ElectricalItems {
    constructor (name){
    this.name = name;
    this.material= 'Алюминий';
    this.color = 'white';
}

turnOn (){
    console.log(`Прибор ${this.name} включен, работает исправно`);
}

turnOff (){
    console.log(`Прибор ${this.name} выключен`);
}
}

class TradeMarkElectricalItems extends ElectricalItems {
    constructor (name, trademark){
   super();
   this.name = name;
   this.trademark = trademark;
    }
    getPower (name, power){
        this.name = name;
        this.power = power;
        console.log(`SourcePower of ${this.name} is ${this.power} Vt/h`);
    }
}
       
    const computer = new TradeMarkElectricalItems ();
    const fridge = new TradeMarkElectricalItems('flake');

computer.getPower('Vector', 500);
fridge.turnOn();