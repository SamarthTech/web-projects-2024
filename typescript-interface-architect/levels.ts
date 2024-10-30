export const levels = [
    {
        description: "Define an interface for a 'User' object.",
        example: {
            name: "John Doe",
            age: 30,
            email: "johndoe@example.com",
        },
        interface: `
        interface User {
            name: string;
            age: number;
            email: string;
        }`,
    },
    {
        description: "Define an interface for a 'Product' object.",
        example: {
            id: 101,
            name: "Laptop",
            price: 899.99,
            inStock: true,
        },
        interface: `
        interface Product {
            id: number;
            name: string;
            price: number;
            inStock: boolean;
        }`,
    },
];
