export interface Itemdata {
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
  
  export interface EmailingProps {
    name: string;
    email: string;
    message: string;
  }  


  export interface PaymentGatewayData {
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
  