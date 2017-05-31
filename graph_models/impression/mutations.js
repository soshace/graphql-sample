import {GraphQLNonNull, GraphQLID} from 'graphql'
import {ImpressionInputType, ImpressionType} from './schema'
import {default as mongoose} from 'mongoose'
const ImpressionModel = mongoose.model('Impression')

export let AddImpression = {
    type: ImpressionType,
    description: 'Add Impression',
    args: {
        impression: {
            name: 'Impression Object',
            type: ImpressionInputType
        }
    },
    resolve: (root, args) => {
        const impression = new ImpressionModel(args.impression);

        return new Promise((resolve, reject) => {
            impression.save().then(ent => resolve(ent));
        })
    }
};

export let UpdateImpression = {
    type: ImpressionType,
    description: 'Update Impression',
    args: {
        id: {
            name: 'Impression ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        impression: {
            name: 'Impression Object',
            type: ImpressionInputType
        }
    },
    resolve: (root, args) => {
        return new Promise(resolve => {
            ImpressionModel.findOne({_id: args.id}).update(args.impression).then((err) => resolve());
        });
    }
};