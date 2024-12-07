import { motion } from 'framer-motion';

const FeaturedProduct = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Featured Collection
          </h2>
          <p className="text-xl text-purple-200">
            Introducing our signature oversized tee, crafted with premium cotton
            and featuring our iconic gradient design.
          </p>
          <div className="space-y-2">
            <p className="text-2xl font-bold">₹2,499</p>
            <p className="text-purple-300">Limited Edition Release</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition-colors"
          >
            Shop Now
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-black/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000"
            alt="DARKO Signature T-Shirt"
            className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProduct;