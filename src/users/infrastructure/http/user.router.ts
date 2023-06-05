import { Router } from 'express';

import { userController } from '../dependencies';

const userRouter = Router();

userRouter.post(
  '/:id/welcome',
  userController.runWelcomeEmailSender.bind(userController)
);

userRouter.get('/:id', userController.runUserByIdFinder.bind(userController));

export { userRouter };
