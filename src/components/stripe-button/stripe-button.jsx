import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Hco3tBfyGABHavlc5HMlW43h4VALIcYbCicebCtnS8ccE12AIR9lGUkAV0Zh9jrthlucDGq7acXBzqxFMS569z500AuNqhrxJ"

    const onToken = token => {
        console.log(token)
        alert("Payment Successfull")
    }
    return(
        <StripeCheckout
            label="Pay Now"
            name="ROYAL Clothing Ltd"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        
        
        />
    )

} 

export default StripeCheckoutButton