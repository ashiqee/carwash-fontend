import { ReactNode } from "react";


export interface IServices{
    _id:string;
    name: string;
    images?:string;
    serviceLevel?:string;
    description:string;
    price:number;
    duration:number;
    isDeleted: boolean;
}


export type TRoute = {
    path: string;
    element: ReactNode;
  };
export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;


export interface TUserPath{
    name?: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
  };

  export interface CustomJwtPayload {
    role?:string;
    userEmail?:string;
  }