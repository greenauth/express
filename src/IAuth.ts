interface IAuth {
  uid: string | number;
  roles?: Array<string>;
  user: any;
}

export default IAuth;
