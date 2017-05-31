import {GraphQLObjectType, GraphQLInputObjectType, GraphQLID, GraphQLString, GraphQLNonNull} from 'graphql'

export let ImpressionType = new GraphQLObjectType({
    name: 'impression',
    fields: function () {
        return {
            _id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },
            type: {
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                type: GraphQLString
            }
        }
    }
});

export let ImpressionInputType = new GraphQLInputObjectType({
    name: 'impressionInput',
    fields: function () {
        return {
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },
            type: {
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                type: GraphQLString
            }
        }
    }
})