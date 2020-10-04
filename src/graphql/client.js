import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://allowing-kingfish-73.hasura.app/v1/graphql'
})

export default client;