export class Policy{
    id:number = 0;
    policyHolderName:string = "";
    policyAmount:number = 0;
    emiAmount:number = 0;
    nomineeName:string = "";

    constructor(id:number, policyHolderName:string, policyAmount:number, emiAmount:number, nomineeName:string){
        this.id = id;
        this.policyHolderName = policyHolderName;
        this.policyAmount = policyAmount;
        this.emiAmount = emiAmount;
        this.nomineeName = nomineeName;
    }
}