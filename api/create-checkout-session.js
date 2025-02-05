// /api/create-checkout-session.js

// Carica le variabili d'ambiente; su Vercel non serve chiamare dotenv in quanto le variabili
// vengono gestite dal pannello di Vercel.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Esporta la funzione handler (funzione serverless)
export default async function handler(req, res) {
  // Consenti solo il metodo POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo non consentito' });
  }
  
  try {
    const { items } = req.body; // Ci aspettiamo un array di prodotti

    // Controlla che items esista
    if (!items) {
      return res.status(400).json({ error: 'Nessun prodotto fornito' });
    }

    // Trasforma i prodotti nel formato richiesto da Stripe
    const line_items = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100), // converte in centesimi
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      // Nota: in ambiente di sviluppo potresti lasciare localhost, ma in produzione usa una variabile ambiente.
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/cancel`,
    });

    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Errore nella creazione della sessione:', error);
    return res.status(500).json({ error: error.message });
  }
}
