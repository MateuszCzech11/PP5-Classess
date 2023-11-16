
//function client(){
//    this.companyName="";
//    this.nip="";
//    this.city="";
//    this.street="";
//    this.houseNo="";
//    this.flatNo="";
//    this.postCode="";
//    this.comments="";
//    this.companyIndustry="";
//    this.active="";
//}
//                          NO ES6 ^^^^^^^^^^^


class Client{
    constructor(){}
    companyName="";
    nip="";
    city="";
    street="";
    houseNo="";
    flatNo="";
    postCode="";
    comments="";
    companyIndustry="";
    active="";

    getClientAddress=function(){
        
    }
}

class Supplier extends Client{
    constructor(accountNo){
        super();
        this.accountNo=accountNo;
    }
    invoices=[];
    action = function(){
        console.log(city,street,houseNo,flatNo,postCode);
    }
}