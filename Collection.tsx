import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const products = [
  {
    id: 1,
    name: "Oversized Purple Hoodie",
    price: "$120",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Black Gradient Tee",
    price: "$45",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "DARKO Signature Jacket",
    price: "$180",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800"
  },
];

const Collection = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
          >
            Full Collection
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-purple-900/20 rounded-lg overflow-hidden backdrop-blur-sm"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-purple-200">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Collection;