interface User {
  _id: string;
  userName: string;
  userLastName: string;
  userFullName: string;
  userEmail: string;
  userPassword: string;

  userPhone: string;
  userSecQuestion?: string;
  userSecAnswer?: string;

  // address?: {
  //   street: string;
  //   city: string;
  // };
}

export default User;
