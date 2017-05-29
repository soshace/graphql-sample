import {GraphQLObjectType} from 'graphql'
import ImpressionAdd from './impression'

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        impressionAdd: ImpressionAdd
    }
});