interface itemdata {
  id: number;
  rname: string;
  imgdata: string;
  address: string;
  delimg: string;
  somedata: string;
  price: number;
  rating: string;
  arrimg: string;
  qnty: number;
}

export const ADD = (item: itemdata) => {
  return {
    type: 'ADD_CART',
    payload: item,
  };
};

export const DLT = (id:number) => {
  return {
    type: 'RMV_CART',
    payload: id,
  };
};

export const REMOVE = (iteam:itemdata) => {
  return {
    type: 'RMV_ONE',
    payload: iteam,
  };
};
