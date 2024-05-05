export interface Usuario{
    id?:number;
    avatar: string | null;
    name:string;
    lastname:string;
    phone: string;
    username:string;
    password:string;
}

export interface Producto{
    id?:number;
    // UserProduct?: string | null
    productName:string;
    productImg:File | null;
    productDescriptionSimple: string;
    productDescription:string;
    price:number;
}
export interface Cotizacion{
    id?:number;
    userCt:string;
    nameProductCt:string;
    imgProductCt:File;
    valorCt:number;
}
export interface Contacto{
    id?:number;
    nameStore:string;
    cellPhone:string;
    email:string;
}