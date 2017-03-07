/**
 * Created by Hiren on 06-03-2017.
 */
export interface Hotel{
  name:string;
  star:number;
  rooms:Room[];
}

export interface Room{
  name:string;
  price:number;
  services:string[];
}
