import { fireEvent, render, screen } from '@testing-library/react';

import Cards from './cards';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from 'apps/ecommerce/src/app/app';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes, Route, MemoryRouter } from 'react-router';
import * as router from 'react-router';

const Cardsdata = [
  {
    id: 1,
    rname: 'Massala Theoryy',
    imgdata:
      'https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp',
    address: 'North Indian, Biryani, Mughlai',
    delimg:
      'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp',
    somedata: ' 1175 + order placed from here recently',
    price: 350,
    rating: '3.8',
    arrimg:
      'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp',
    qnty: 0,
  },
  {
    id: 2,
    rname: 'Jugaadi Adda',
    imgdata:
      'https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp',
    address: 'Street Food',
    delimg:
      'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp',
    somedata: ' 2525 + order placed from here recently',
    price: 25,
    rating: '3.9',
    arrimg:
      'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp',
    qnty: 0,
  },
];

let navigate = jest.fn();

describe('Cards', () => {
  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Cards />);
    expect(baseElement).toBeTruthy();
  });

  it('Clicking add to cart to add the items in the cart', () => {
    const mockStore = configureStore();
    let store;

    store = mockStore(Cardsdata);
    render(
      // <Provider store={store}>
      //     <Cards/>
      // </Provider>

      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <StrictMode>
            <Cards />
          </StrictMode>
        </MemoryRouter>
      </Provider>
    );

    const Addtocartbutton = screen.getByTestId('custom-element')
    fireEvent.click(Addtocartbutton);
    expect(screen.findByText('Item has been added in the cart!')).toBeInTheDocument();
  });



  it("do pagination", () => {
    const posts = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15"
    ];
    const expectedRes1 = ["1", "2", "3", "4", "5", "6"];
    const expectedRes2 = ["7", "8", "9", "10", "11", "12"];
    const expectedRes3 = ["13", "14", "15"];
    
    expect(Cards()).toEqual(expectedRes1);
    expect(Cards()).toEqual(expectedRes2);
    expect(Cards()).toEqual(expectedRes3);
    
    expect(getPages(posts, 6)).toEqual([0, 1, 2]);
    });
  

    
//   it("do pagination", () => {
  
//     const prevButton = screen.getByRole("button", { name: /Prev/ });
//     const separator = screen.queryByRole("radio", { name: "..." });
//     expect(pageButton).toBeInTheDocument();
//     const onChangePageNo = vi.fn();
// ...
// userEvent.click(nextButton);
// ...
// expect(onChangePageNo).toHaveBeenCalledTimes(1);
// });

 
    });
  
    