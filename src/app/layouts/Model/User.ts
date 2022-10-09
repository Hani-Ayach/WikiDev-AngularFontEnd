export class User{
  constructor(
    public  Message:string,

    public  IsAuthenticated :boolean,

    public  UserName :string,

    public  Email :string,

    public  Roles :string[],

    public  Token :string,

    public  ExpirationDate :Date
  ){}

}
