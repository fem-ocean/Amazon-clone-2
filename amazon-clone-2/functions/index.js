const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51K1DHWLhOHYOsVTeKs3bew1UscOI5HuLV673E0FyBP9yt6eW4P1gKgIBw2wZbqUDpqje69VmQkyf6M8HrSBFGXtO00OoCnkkS7')

// - API



// - App Config
const app = express();


// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send
('Hello World'))

// app.get('/femi', (request, response) => response.status(200).send
// ('Hello Femi...You are a full stack developer'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log('Payment Request received!!! for this amount>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app)



// http://localhost:5001/clone-2-46594/us-central1/api