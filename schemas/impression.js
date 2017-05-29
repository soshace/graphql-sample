import * as graphql from 'graphql'

export default new graphql.GraphQLObjectType({
    name: 'impression',
    fields: function () {
        return {
            _id: {
                type: graphql.GraphQLID
            },
            title: {
                type: graphql.GraphQLString
            },
            type: {
                type: graphql.GraphQLString
            },
            description: {
                type: graphql.GraphQLString
            }
        }
    }
});