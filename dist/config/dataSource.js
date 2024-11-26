"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs"); // Importamos la URL completa de la base de datos
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Order_1 = require("../entities/Order");
const Category_1 = require("../entities/Category");
const Product_1 = require("../entities/Product");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: envs_1.DATABASE_URL, // Usamos la URL completa
    // dropSchema: false,
    synchronize: true, // Sincroniza las entidades con la base de datos
    logging: false,
    ssl: {
        rejectUnauthorized: false, // Para evitar problemas de SSL en producción
    },
    entities: [User_1.User, Credential_1.Credential, Order_1.Order, Product_1.Product, Category_1.Category],
    subscribers: [],
    migrations: [],
});
