import {GraphQLString, GraphQLNonNull, GraphQLList} from 'graphql'
import {ImpressionType} from './schema'
import {default as mongoose} from 'mongoose'

const ImpressionModel = mongoose.model('Impression');

export let Impressions = {
    type: new GraphQLList(ImpressionType),
    resolve: function () {
        return new Promise(resolve => {
            ImpressionModel.find({}).then(impressions => resolve(impressions));
        })
    }
};
export let Impression = {
    type: new GraphQLList(ImpressionType),
    args: {
        id: {
            name: 'Impression ID',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: function (root, args) {
        return new Promise(resolve => {
            ImpressionModel.find({_id: args.id}).then(impressions => resolve(impressions));
        })
    }
};

