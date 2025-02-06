import Stripe from 'stripe';

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");


  // ✅ Gestire richieste preflight per CORS
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    console.log("API Checkout Session: richiesta ricevuta", req.method);

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Metodo non consentito' });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("La chiave STRIPE_SECRET_KEY non è stata trovata nell'ambiente.");
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

    const { items } = req.body;
    console.log("Elementi ricevuti:", items);

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Nessun prodotto fornito' });
    }

    const line_items = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    console.log("Line items:", line_items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://aqua-di-sibari.vercel.app/'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://aqua-di-sibari.vercel.app/'}/cancel`,
    });

    console.log("Sessione creata con successo:", session);

    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Errore nella creazione della sessione:', error.message);
    return res.status(500).json({ error: error.message });
  }
}
