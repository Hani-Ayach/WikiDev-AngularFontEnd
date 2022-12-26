export class UserAuthenticationResponse{
  constructor(
    public  message:string,

    public  isAuthenticated :boolean,

    public  userName :string,

    public  userId :string,

    public  email :string,

    public  roles :string[],

    public  token :string,

    public  expirationDate :Date
  ){}

}
