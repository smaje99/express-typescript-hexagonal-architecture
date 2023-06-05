import { Router } from 'express';

import { userGetController, userPostController } from '../dependencies';

const userRouter = Router();

userRouter.get('/:id', userGetController.run.bind(userGetController));

userRouter.post('/:id/welcome', userPostController.run.bind(userPostController));

export { userRouter };
