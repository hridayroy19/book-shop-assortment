// import { Model } from "mongoose";

export type TBook = {
  title: string;
  author: string;
  price: number;
  category: string
  image: string;
  description: string;
  quantity: number;
  inStock: boolean;
  rating?: number;
  discount?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
