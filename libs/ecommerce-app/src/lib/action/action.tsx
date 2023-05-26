import { Itemdata } from '../Interfaces/Itemdata.interface'

export const ADD = (item: Itemdata) => {
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

export const REMOVE = (iteam:Itemdata) => {
  return {
    type: 'RMV_ONE',
    payload: iteam,
  };
};
