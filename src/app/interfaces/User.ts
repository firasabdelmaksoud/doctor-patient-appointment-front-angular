import { UserType } from "./UserType";

export interface User {
  userId: string; 
  email: string ;
  password:string ;
  type: UserType ;
  confirmed:boolean  ;
  referralId:number ;
    
  }