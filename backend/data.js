import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Toochko',
      email: 'admin1@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Uuganaa',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Rubiks cube',
      slug: 'Rubiks-cube',
      category: 'Cube',
      image: '/images/p1.jpeg', // 679px × 829px
      price: 75000,
      countInStock: 20,
      brand: 'Rubiks',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Gan cube',
      slug: 'Gan cube',
      category: 'Cube',
      image: '/images/p2.jpeg',
      price: 55000,
      countInStock: 0,
      brand: 'Gan',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Yuxin cube',
      slug: 'Yuxin-cube',
      category: 'Cube',
      image: '/images/p3.png',
      price: 65000,
      countInStock: 15,
      brand: 'Yuxin',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: '4x4 cube',
      slug: '4x4-cube',
      category: 'Cube',
      image: '/images/p4.jpeg',
      price: 90000,
      countInStock: 0,
      brand: 'Gan',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
