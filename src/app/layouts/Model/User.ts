export class User{
  constructor(
  public id:string,
  public firstName:string,
  public lastName:string,
  public userName:string,
  public email:string,
  public career:string,
  public age:number,
  public sex:string,
  public dateOfRegister:Date,
  public role:string,
  public profilePhotoBase64:string
  ){}
}
