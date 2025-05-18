import { Router } from 'express';
import Place from './model.js';
import { JWTVerify } from '../../../utils/jwt.js';
import { connectDb } from '../../../config/db.js';

const router = Router();
connectDb();

router.post('/', async (req, res) => {
  const {
    title,
    address,
    fotos,
    perks,
    description,
    extras,
    price,
    checkin,
    checkout,
    convidados,
  } = req.body;

  try {
    const { _id: owner } = await JWTVerify(req);
    const newPlaceDoc = await Place.create({
      owner,
      title,
      address,
      perks,
      fotos,
      description,
      extras,
      price,
      checkin,
      checkout,
      convidados,
    });
    res.json(newPlaceDoc);
  } catch (error) {
    console.log(error);
    res.status(500).json('Deu error ao criar o novo lugar');
  }
});

export default router;
