// backend/server.js
require('dotenv').config(); // Carica le variabili d'ambiente da .env
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // La tua chiave segreta di Stripe
const app = express();

app.use(cors());
app.use(express.json()); // Per poter leggere il body in formato JSON

// Endpoint per creare la sessione di checkout
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body; // Ci aspettiamo un array di prodotti

    // Trasforma i prodotti nel formato richiesto da Stripe
    const line_items = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // converte in centesimi
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      // Imposta le URL di successo e annullamento (aggiorna i domini se in produzione)
      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Errore nella creazione della sessione:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server in esecuzione sulla porta ${PORT}`));
