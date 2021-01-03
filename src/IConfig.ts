import {Response} from 'express';
import IAuth from 'IAuth';

interface IConfig<TEncodedData = any> {
  secret: string;
  encode: (
    auth: IAuth,
    next: (error: any, data: TEncodedData) => Function | Response<any>
  ) => Function | Response<any>;
  decode: (
    token: TEncodedData,
    next: (error: Error | null, auth: IAuth) => Function | Response<any>
  ) => Function | Response<any>;
}

export default IConfig;
