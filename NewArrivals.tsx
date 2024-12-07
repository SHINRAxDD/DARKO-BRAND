import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const newArrivals = [
  {
    id: 1,
    name: "Limited Edition Purple Haze Jacket",
    price: "$250",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Gradient Tech Pants",
    price: "$150",
    image: "https://images.unsplash.com/photo-1584382296087-ac00c7263710?auto=format&fit=crop&q=80&w=800"
  }
];

const NewArrivals = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">New Collection</h1>
            <p className="text-xl text-purple-200">Experience the future of fashion</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {newArrivals.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-purple-200 text-lg">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NewArrivals;