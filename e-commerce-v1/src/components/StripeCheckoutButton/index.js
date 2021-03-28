import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IZxFMHe0sLvWC4iYwaoFTFGnk9YmyPP257Mi7sHNMiSfmrcAeDeHLAjA0fm5T2bZvX96hwgKUa04vQ6Fupfu74500Scsuuy4C';
    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name='Aso Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
