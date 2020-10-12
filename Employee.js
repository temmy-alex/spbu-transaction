class Employee extends Person {
    constructor(name) {
        super(name);
        this.status = false;
        this.transaction = [];
    }

    isEmployee(){
        return this.status;
    }

    setStatusEmployee(status){
        this.status = status;
    }

    setTransaction(name, fuel, transaction) {
        this.transaction.push({
            name: name,
            fuel: fuel,
            transaction: transaction
        })
    }

    getTransaction(){
        return this.transaction;
    }

    activationMember(customer){
        customer.setActiveMember()
        console.log('Member is active');
    }

    removeMember(customer){
        customer.setActiveMember(false);
        console.log('Member is not active');
    }

    refilGasoline(customer, petrol, station){
        const price = 10000;
        const total = price * petrol;
        const discount;

        if(this.isEmployee())
        {
            if(customer.getTankInfo() > customer.getMaxTank())
            {
                console.log(`Fuel is full`)
            }else{
                customer.addPetrol();

                if(customer.activeMember())
                {
                    if(total >= 100000){
                        discount = 0.1 * total;
                        total -= discount;
                        console.log('get 10% discount');
                    }else if(total >= 20000){
                        discount = 0.025 * total;
                        total -= discount;
                        console.log('get 2.5% discount');
                    }
                }

                if(customer.getReload() >= 3)
                {
                    this.activationMember(customer);
                }

                this.setTransaction(customer.getName(), petrol, total);
            }
        }else{
            console.log(`You must privileges from owner`)
        }
    }
}