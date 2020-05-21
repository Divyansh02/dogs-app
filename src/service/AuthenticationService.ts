import * as AuthenticationApi from "mock-authentication-api";

  const netWorkLatency:number = 1000;
  const userStore = [
    { id: 1, username: "User1", password: "pass1" },
    { id: 2, username: "User2", password: "pass2" },
  ];

  AuthenticationApi.configure(netWorkLatency, userStore);

  // authenticating user
  export const login=async(username:string, password:string):Promise<any>=>{
   return await AuthenticationApi.authenticate(username, password);
  }
  