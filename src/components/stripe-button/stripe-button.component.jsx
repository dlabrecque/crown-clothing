import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GxHFnDS3E4cgYx8FGnZdw4jSDHKEVXtiAS9bl4SCv2zWkKfpY8Nn08hsKpPnPtoq0rgWz153zxjk75S8LCH6Z9W00rvqaHvDr'

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='crown clothing ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;