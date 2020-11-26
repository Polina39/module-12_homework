const clients = {
    city: "Moscow",
    typeofcard:"credit card",
    };
const customer = Object.create(clients);
customer.creditline = 'tru';

for (let key in customer) {
    if(customer.hasOwnProperty(key)){
        console.log(key +': ' + customer[key]);
    }
}