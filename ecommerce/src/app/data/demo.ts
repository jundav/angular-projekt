import { IProduct } from '../models/iproduct.model';

export const productCatalog: Array<IProduct>= [
    { _id: '1', name:'Demo Product 1', description: 'This is only a demo product', price: 100 },
    { _id: '2', name:'Demo Product 2', description: 'This is only a demo product', price: 200 },
    { _id: '3', name:'Demo Product 3', description: 'This is only a demo product', price: 300 },
    { _id: '4', name:'Demo Product 4', description: 'This is only a demo product', price: 400 }
]

export const users: Array<any> = [
    { _id:'1', firstName: 'Hans', lastName:'Matting-Lassei', email: 'hans@ml.com', password: 'BytMig123', role: 'admin'},
    { _id:'2', firstName: 'Anna', lastName:'Nyman', email: 'anna@nyman.com', password: 'BytMig123', role: 'user'}
] 