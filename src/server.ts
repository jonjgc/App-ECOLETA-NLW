import express, { response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); //COMO SE COLOCASSE UM PLUGIN NO EXPRESS, A FORMA QUE EXPRESS CONSEGUE ENTENDER O CORPO DA NOSSA REQUISIÇÃO NO FORMATO JSON
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..', 'uploads'))),

app.listen(3333);

