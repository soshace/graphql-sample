import {default as mongoose} from 'mongoose'
const Schema = mongoose.Schema;

export default new Schema({
    title: String,
    type: String,
    description: String
});