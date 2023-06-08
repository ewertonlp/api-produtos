const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const ProdutoSchema = require('./schemas/ProdutoSchema');
const UserSchema = require('./schemas/UserSchema');

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.souffus.mongodb.net/produtos?retryWrites=true&w=majority'
);

app.get('/', (request, response) => {
  return response.json({ Ping: 'Pong' });
});

//get all
app.get('/produtos', async (request, response) => {
  const res = await ProdutoSchema.find();
  return response.json(res);
});

//get by id
app.get('/produtos/:id', async (request, response) => {
  const id = request.params.id;

  const res = await ProdutoSchema.findById(id);

  if (!res) {
    return response.status(404).json({ message: 'item not found' });
  }
  return response.json(res);
});

// post
app.post('/produtos', async (request, response) => {
  const res = await ProdutoSchema.create(request.body);

  return response.status(201).json(res);
});

//delete
app.delete('/produtos/:id', async (request, response) => {
  const id = request.params.id;
  try {
    await ProdutoSchema.findByIdAndRemove(id);
    return response.status(204).json();
  } catch (error) {
    return response.status(500);
  }
});

//put
app.put('/produtos/:id', async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  try {
    const res = await ProdutoSchema.findByIdAndUpdate({ _id: id }, body);
    return response.json(res);
  } catch (error) {
    return response.status(500);
  }
});

// LOGIN

//get all
app.get('/user', async (request, response) => {
  const res = await UserSchema.find();
  return response.json(res);
});

//get by id
app.get('/user/:id', async (request, response) => {
  const id = request.params.id;

  const res = await UserSchema.findById(id);

  if (!res) {
    return response.status(404).json({ message: 'user not found' });
  }
  return response.json(res);
});

// post
app.post('/user', async (request, response) => {
  const res = await UserSchema.create(request.body);

  return response.status(201).json(res);
});

//delete
app.delete('/user/:id', async (request, response) => {
  const id = request.params.id;
  try {
    await UserSchema.findByIdAndRemove(id);
    return response.status(204).json();
  } catch (error) {
    return response.status(500);
  }
});

//put
app.put('/user/:id', async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  try {
    const res = await UserSchema.findByIdAndUpdate({ _id: id }, body);
    return response.json(res);
  } catch (error) {
    return response.status(500);
  }
});

app.listen(3333, () =>
  console.log('Servidor iniciado com sucesso em http://localhost:' + PORT)
);
