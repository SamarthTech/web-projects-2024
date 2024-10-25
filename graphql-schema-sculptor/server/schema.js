// server/schema.js
const { gql } = require('apollo-server-express');

// Define your GraphQL schema
const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(name: String!, email: String!): User
    }
`;

// Sample data
let users = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
];

// Define your resolvers
const resolvers = {
    Query: {
        users: () => users,
    },
    Mutation: {
        addUser: (parent, { name, email }) => {
            const user = { id: String(users.length + 1), name, email };
            users.push(user);
            return user;
        },
    },
};

module.exports = { typeDefs, resolvers };
