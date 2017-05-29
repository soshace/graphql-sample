import ImpressionType from '../schemas/impression'
import {GraphQLNonNull, GraphQLString} from 'graphql'
import {default as mongoose} from 'mongoose'
const Impression = mongoose.model('Impression')

export default {
    type: ImpressionType,
    description: 'Add Impression',
    args: {
        title: {
            name: 'Title',
            type: new GraphQLNonNull(GraphQLString)
        },
        type: {
            name: 'Type',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, args) => {
        const impression = new Impression({
            title: args.title,
            type: args.type
        });

        return new Promise((resolve, reject) => {
            impression.save().then(ent => resolve(ent));
        })
    }
}