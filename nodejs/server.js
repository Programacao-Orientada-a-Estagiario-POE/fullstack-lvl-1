const express = require('express');
const { Router } = require('express');
const { v4: uuid } = require('uuid');
const cors = require('cors');
const app = express();

const routes = Router();
app.use(cors());
app.use(express.json());

app.use('/animais', routes);

const animais = [
  {
    id: '0ce685e1-8fcc-4bd1-b08d-5507279381a9',
    animal: 'gato',
    qtd_patas: 4,
    idade: 2,
  },
  {
    id: '3ea53a48-3216-4107-98fb-4bc5e22944f2',
    animal: 'cachorro',
    qtd_patas: 4,
    idade: 3,
  },
  {
    id: '0ce685e1-8fcc-4bd1-b08d-550727',
    animal: 'cachorro baleia',
    qtd_patas: 4,
    idade: 3,
  },
];

routes.get('/', (request, response) => {
  const { animal } = request.query;
  if (animal) {
    const animaisEncontrados = animais.filter((animalItem) => {
      const fazParteDaString = animalItem.animal.search(animal);
      if (fazParteDaString == -1) {
        return false;
      }
      return true;
    });

    return response.status(200).json(animaisEncontrados);
  }

  response.status(200).json(animais);
});

routes.get('/:id', (request, response) => {
  const { id } = request.params;
  const animal = animais.filter((animal) => animal.id == id);
  if (!animal.length) {
    return response.status(404).json({
      message: 'Animal não encontrado',
    });
  }
  response.status(200).json({ animal: animal[0] });
});

routes.post('', (request, response) => {
  const { animal, qtd_patas, idade } = request.body;

  const novoAnimal = {
    id: uuid(),
    animal,
    qtd_patas,
    idade,
  };

  animais.push(novoAnimal);

  response.status(201).json(novoAnimal);
});

routes.patch('/:id', (request, response) => {
  const { id } = request.params;
  const { animal, qtd_patas, idade } = request.body;
  const indexAnimal = animais.findIndex((animal) => animal.id == id);

  if (!indexAnimal) {
    return response.status(404).json({
      message: 'Animal não encontrado',
    });
  }

  const animalEncontrado = animais[indexAnimal];
  const animalAtualizado = {
    id: animalEncontrado.id,
    animal,
    qtd_patas,
    idade,
  };
  animais[indexAnimal] = animalAtualizado;

  response.status(204).json(animalAtualizado);
});

routes.delete('/:id', (request, response) => {
  const { id } = request.params;

  const indexAnimal = animais.findIndex((animal) => animal.id == id);

  if (!indexAnimal) {
    return response.status(404).json({
      message: 'Animal não encontrado',
    });
  }

  animais.splice(indexAnimal, 1);

  response.status(204).json();
});

app.listen(3000, () => {
  console.log('Running on PORT: 3000');
});

/*
  request.body
    const { id, animal, qtd_patas, idade } = request.body

    {
      "id": 1,
      "animal": "gato",
      "qtd_patas": 4,
      "idade": 2
    }

  request.params
    const { id } = request.params
    http://localhost:3000/animais/1
    http://localhost:3000/animais/gato

  request.query
    http://localhost:3000/animais?animal=gato&qtd_patas=4
*/
