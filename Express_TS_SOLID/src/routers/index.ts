import { Router } from 'express';
import { createUserController } from 'src/modules/customer/useCases/CreateUser';

const router = Router();

router.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

export { router };
