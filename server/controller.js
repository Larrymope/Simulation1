module.exports = {

    getProducts: (req, res) => {
            let dataBase = req.app.get('db');

            dataBase.get_inventory()
            .then( ( inventory ) => res.status(200).send( inventory ) )
            .catch( () => res.status(500).send() );
            
    
    },
    createProduct: (req, res) => {
            let dataBase = req.app.get('db');
            let { name, description, price, imageurl } = req.body

            dataBase.create_product([name, description, price, imageurl])
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() );

    }

}


// dbInstance.create_product([ name, description, price, imageurl ])
//         .then( () => res.status(200).send() )
//         .catch( () => res.status(500).send() );