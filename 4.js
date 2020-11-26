function ElectricalItems (name){
    this.name = name;
    this.material= 'Алюминий';
    this.color = 'white';
}

ElectricalItems.prototype.turnOn = function(name){
    console.log(`Прибор ${this.name} включен, работает исправно`);
};

ElectricalItems.prototype.turnOff = function(){
    console.log(`Прибор ${this.name} выключен`);
};

function TradeMarkElectricalItems(name, trademark){
    this.name = name;
    this.trademark = trademark;
    }

    TradeMarkElectricalItems.prototype = new ElectricalItems() ;
    TradeMarkElectricalItems.prototype.getPower = function(name, power){
        this.name = name;
        this.power = power;
        console.log(`SourcePower of ${this.name} is ${this.power} Vt/h`);
    };
    const computer = new TradeMarkElectricalItems ();
    const fridge = new TradeMarkElectricalItems('flake')

computer.getPower('Vector', 500);
fridge.turnOn();