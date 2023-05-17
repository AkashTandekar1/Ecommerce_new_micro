import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import Emailing from '../emailing/emailing';

export interface PaymentGatewayProps {
  id: string;
  object: string;
  card: {
    address_city?: string | null;
    address_country?: string | null;
    address_line?: string | null;
    address_line1_check?: string | null;
    address_line2: string | null;
    address_state: string | null;
    address_zip: string | null;
    address_zip_check: string | null;
    brand: string;
    country: string;
    cvc_check: string;
    dynamic_last4: string | null;
    exp_month: number;
    exp_year: number;
    funding: string;
    id: string;
    last4: number;
    name: string;
    object: string;
    tokenization_method: string | null;
    wallet?: string | null;
  };
  client_ip: string;
  created: number;
  email: string;
  livemode: boolean;
  type: string;
  used: boolean;
}






const StyledPaymentGateway = styled.div``;

export function PaymentGateway(props: PaymentGatewayProps) {
  const [carddata, setcardData] = useState<string>('');
  const [success, setSucess] = useState<boolean>(false);

  const onToken = (token: PaymentGatewayProps) => {
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
