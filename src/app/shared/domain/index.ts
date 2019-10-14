export interface TabItem {
  title: string;
  icon: string;
  link: string;
  selectedIcon: string;
}
export interface Ad {
  imageUrl: string;
  link: string;
}

export interface Product {
  id:number;
  imgUrl:string;
  title:string;
  tags:string;
  price:number;
  priceDesc:string;
  buyerAvatars:string[];
}
