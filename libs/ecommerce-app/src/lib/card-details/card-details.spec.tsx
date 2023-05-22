import { render, within, screen } from '@testing-library/react';

import CardDetails from './card-details';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { type } from 'os';
export interface card {
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

describe('CardDetails', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<CardDetails />);
    expect(baseElement).toBeTruthy();
  });

  test('should render Items Details Page as text', () => {
    render(<CardDetails />);
    const { getByText } = within(screen.getByTestId('item-details-page'));
    expect(getByText('Items Details Page')).toBeInTheDocument();
  });

  //   test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {

  // const Cardsdata:card[] = [
  //   {
  //     id: 1,
  //     rname: 'Massala Theoryy',
  //     imgdata:
  //       'https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp',
  //     address: 'North Indian, Biryani, Mughlai',
  //     delimg:
  //       'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp',
  //     somedata: ' 1175 + order placed from here recently',
  //     price: 350,
  //     rating: '3.8',
  //     arrimg:
  //       'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp',
  //     qnty: 0,
  //   },
  //   {
  //     id: 2,
  //     rname: 'Jugaadi Adda',
  //     imgdata:
  //       'https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp',
  //     address: 'Street Food',
  //     delimg:
  //       'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp',
  //     somedata: ' 2525 + order placed from here recently',
  //     price: 25,
  //     rating: '3.9',
  //     arrimg:
  //       'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp',
  //     qnty: 0,
  //   }

  // ]

  // const mockStore = createStore<any, any, any, any>((state = { Cardsdata }, action) => {
  //   if (action.type === 'ADD_CART') {
  //     const IteamIndex = state.carts.findIndex(
  //       (iteam:any) => iteam.id === action.payload.id
  //     );

  //     if (IteamIndex >= 0) {
  //       state.carts[IteamIndex].qnty += 1;
  //       return {
  //         ...state,
  //         carts: [...state.carts],
  //       };
  //     } else {
  //       const temp = { ...action.payload, qnty: 1 };
  //       return {
  //         ...state,
  //         carts: [...state.carts, temp],
  //       };
  //     }
  //   return state;
  //   }});

  //     render(
  //       <Provider store={mockStore}>
  //           <CardDetails/>
  //      </Provider>
  // );

  // mockStore.dispatch({ type: 'ADD_CART', payload:  {
  //   id: 2,
  //   rname: 'Jugaadi Adda',
  //   imgdata:
  //     'https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp',
  //   address: 'Street Food',
  //   delimg:
  //     'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp',
  //   somedata: ' 2525 + order placed from here recently',
  //   price: 25,
  //   rating: '3.9',
  //   arrimg:
  //     'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp',
  //   qnty: 0,
  // }
  // });

  //     const logo = screen.getByRole('img');

  //     expect(logo).toHaveAttribute('alt', 'Image Logo');
  //     });

  test('', () => {
   const component =  render(<CardDetails/>);
    const table = component.findAllByRole("t");
    const row = table.find('tr');
    const node = table.find(Node);

    it('table grid', () => {
      expect(table).toHaveLength(1);
      expect(row).toHaveLength(1);
      expect(node).toHaveLength(1);
    });
  });
});
function mount(arg0: JSX.Element) {
  throw new Error('Function not implemented.');
}

