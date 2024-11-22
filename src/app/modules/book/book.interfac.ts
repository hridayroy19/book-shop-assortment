// import { Model } from "mongoose";

export type TBook = {
  id: string;
  title: string;
  author: string;
  price: number;
  category: 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious';
  description: string;
  quantity: number;
  inStock: boolean;
};

// export interface BookMedel extends Model<TBook> {
//     isBookExistis(id:string): Promise<TBook | null>;
// }
