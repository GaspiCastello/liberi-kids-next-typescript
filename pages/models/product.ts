export interface ProductInt {
  id: string;
  name: string;
  description: string;
  url: string;
  price: string;
}
export interface ProductDataInt {
  name: string;
  description: string;
  url: string;
  price: string;
}
export interface ProductIntDb {
  _id: object;
  name: string;
  description: string;
  url: string;
  price: string;
}
