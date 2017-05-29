import * as graphql from 'graphql'
import QueryType from './query'
import MutationType from '../mutations/index'

export default new graphql.GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});