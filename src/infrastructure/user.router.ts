import { Router } from 'express';

import { userController } from './dependencies';

const userRouter = Router();

userRouter.post('/:id/welcome', userController.run.bind(userController));

export { userRouter };
