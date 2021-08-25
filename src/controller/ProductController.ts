import knexfile from '../../knexfile';
import knex from 'knex';

const db = knex(knexfile.development);

class ProductController {
    public async getAll() {
        const all = await db('product').select();

        return all;
    }
}

export default ProductController;