import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Lista de usuários');
});

router.get('/:id', (req: Request, res: Response) => {
    res.send(`Detalhes do usuário com ID: ${req.params.id}`);
});

export default router;
