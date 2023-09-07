const db = require('./connection');
const { Menu, Roles, Shift, Table, Employee, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Appetizers' },
        { name: 'Main Courses' },
        { name: 'Desserts' },
        { name: 'Beverages' },
    ]);
    
    console.log('Categories Seeded');

    await Roles.deleteMany();

    const roles = await Roles.insertMany([
        { name: 'Waiter', hourlyRate: 10 },
        { name: 'Chef', hourlyRate: 15 },
        { name: 'Bartender', hourlyRate: 12 },
    ]);
    
    console.log('Roles Seeded');

    await Shift.deleteMany();

    const shifts = await Shift.insertMany([
        { clockIn: new Date(), clockOut: new Date(), breakStart: null, breakEnd: null },
        { clockIn: new Date(), clockOut: new Date(), breakStart: null, breakEnd: null },
        // Add more shifts as needed
    ]);
    
    console.log('Shifts Seeded');

    await Table.deleteMany();

    const tables = await Table.insertMany([
        { tableNum: 1, order: [], orderStatus: false, tip: 0, tableStatus: true },
        { tableNum: 2, order: [], orderStatus: false, tip: 0, tableStatus: true },
        { tableNum: 3, order: [], orderStatus: false, tip: 0, tableStatus: true },
        { tableNum: 4, order: [], orderStatus: false, tip: 0, tableStatus: false },
        { tableNum: 5, order: [], orderStatus: false, tip: 0, tableStatus: false },
        { tableNum: 6, order: [], orderStatus: false, tip: 0, tableStatus: true },
        // Add more tables as needed
    ]);

    console.log('Tables Seeded');
    
    await Menu.deleteMany();

    const menuItems = await Menu.insertMany([
        {
        item: 'Mozzarella Sticks',
        price: 7.99,
        ingredients: ['Mozzarella cheese', 'Breadcrumbs', 'Marinara sauce'],
        inStock: true,
        quantity: 100,
        category: categories[0], // You can set the category reference later
        },
        {
        item: 'Spaghetti Carbonara',
        price: 12.99,
        ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan cheese'],
        inStock: true,
        quantity: 50,
        category: categories[1], // You can set the category reference later
        },
        {
        item: 'Coke',
        price: 3.99,
        ingredients: ['Coke'],
        inStock: true,
        quantity: 50,
        category: categories[3], // You can set the category reference later
        },
        {
        item: 'Wine',
        price: 100.99,
        ingredients: ['Grapes'],
        inStock: true,
        quantity: 50,
        category: categories[3], // You can set the category reference later
        },
        {
        item: 'Tea',
        price: 3.99,
        ingredients: ['Tea'],
        inStock: true,
        quantity: 50,
        category: categories[3], // You can set the category reference later
        },
        {
        item: 'Fettucini Alfredo with Chicken',
        price: 35.99,
        ingredients: ['Noodles', 'Eggs', 'Chicken', 'Alfredo', 'Parmesan cheese'],
        inStock: true,
        quantity: 50,
        category: categories[1], // You can set the category reference later
        },
        {
        item: 'Cannoli',
        price: 45.99,
        ingredients: ['Gold Flakes', 'Eggs', 'Dough', 'Cream', 'Chocolate Chips'],
        inStock: true,
        quantity: 50,
        category: categories[2], // You can set the category reference later
        },
        // Add more menu items as needed
    ]);
    
    console.log('Menu Seeded');

    await Employee.deleteMany();

    const employees = await Employee.insertMany([
        {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        roles: [roles[1]],
        tables: [tables[0], tables[1], tables[2],],
        shifts: [shifts[1]],
        },
        {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        password: 'password456',
        roles: [roles[2], roles[0]],
        tables: [tables[3], tables[4], tables[5],],
        shifts: [shifts[0]],
        },
        // Add more employees as needed
    ]);

    console.log('Employees Seeded');

    process.exit();
});