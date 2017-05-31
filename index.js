import {default as express} from 'express'
import {default as graphqlExpress} from 'express-graphql'
import {default as mongoose} from 'mongoose'
import './models/index'

const app = express();
mongoose.connect('mongodb://localhost:27017/graphqlimpressions');

import Schema from './graph_models/index'

app.use('/', graphqlExpress({ schema: Schema, pretty: true }));
app.listen(8080, () => console.log('Listen 8080 port!'));
