import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Q0kxIKvjK8DzKje6p9veCRMWSDMeqiZZVN7nCdGE8fxZ0S9ZeahBk6XrvEc6HafJzrHpxpZHmV3pvpJKjp7WpHJ009D9FzNNW');

export { stripePromise };
