function test (clients, str){
    clients = {
        city: "Moscow",
        typeofcard:"Visa, Mastercard, МИР",
        };
    str = "it's OK";
    console.log('city' in clients);  
}
test();