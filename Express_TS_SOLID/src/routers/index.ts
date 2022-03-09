import { Router } from 'express';
import { createUserController } from 'src/useCases/CreateUser';

const router = Router();

router.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

export { router };
