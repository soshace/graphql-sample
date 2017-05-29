import * as graphql from 'graphql'
import ImpressionType from './impression'
import {default as mongoose} from 'mongoose'

const Impression = mongoose.model('Impression');

export default new graphql.GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            impressions: {
                type: new graphql.GraphQLList(ImpressionType),
                resolve: function () {
                    return new Promise(resolve => {
                        Impression.find({}).then(impressions => resolve(impressions));
                    })
                }
            }
        }
    }
});