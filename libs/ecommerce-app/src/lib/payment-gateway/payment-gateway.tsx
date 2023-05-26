import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import Emailing from '../emailing/emailing';

import {  PaymentGatewayData } from '../Interfaces/Itemdata.interface'







const StyledPaymentGateway = styled.div``;

export function PaymentGateway(props: PaymentGatewayData) {
  const [carddata, setcardData] = useState<string>('');
  const [success, setSucess] = useState<boolean>(false);

  const onToken:any = (token: PaymentGatewayData) => {
    console.log('Token generated' + token);

    const {
      card: { funding },
    } = token;

    setcardData(funding);
    console.log('After destructure' + JSON.stringify(funding));

    setSucess(true);

    console.log('Akash tttt');
  };

  return (
    <StyledPaymentGateway>
      {success ? (
        ''
      ) : (
        <StripeCheckout
          name="Add card details"
          token={onToken}
          stripeKey="pk_test_51MzI9tSDsFvXK5oeoL5zoyqvWb80mVuR7CQgS2M7WXpkwyj6QTgzgJKx8eJEzrBbCuInv9llem4T2rVEeZDE3k1700aIKhGR9T"
        />
      )}

      {success ? <Emailing /> : ''}
    </StyledPaymentGateway>
  );
}

export default PaymentGateway;
