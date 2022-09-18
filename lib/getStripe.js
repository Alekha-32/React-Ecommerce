import React from 'react'
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe("pk_test_51Liub9CtIcn4i5PiHL3MPxTnyD4iiYZloJKXre3eJFg6WRU2amy54LOk58qSzqSdkPx3JWAxkTGaXqlx5tn8FWgS009NdBgy0m")
    }
  return stripePromise;
}

export default getStripe;
