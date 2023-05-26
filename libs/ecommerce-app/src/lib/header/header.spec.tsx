import { render } from '@testing-library/react';

import Header from './header';


describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header/>);
    expect(baseElement).toBeTruthy();
  });



//   const testProps = {
//     items: [
//       {
//         id: "0",
//         label: "foo"
//       },
//       {
//         id: "1",
//         label: "bar"
//       }
//     ],
//     onDelete: jest.fn()
// }

//       test("delete item", async () => {
//         const { findAllByRole, queryByText } = render(<Items{...testProps} />);
    
//         expect(queryByText("foo")).toBeInTheDocument();
    
//         const deleteButton = await findAllByRole("button", {name: /remove/i})
//         userEvent.click(deleteButton[0]);
    
    
//         expect(testProps.onDelete).toHaveBeenCalledTimes(1)
    
//         await waitForElementToBeRemoved(
//           expect(queryByText('')).not.toBeInTheDocument()
//         );
//       })
});
