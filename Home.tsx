import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { TShirtModel } from '../components/Model3D';
import { OrbitControls } from '@react-three/drei';
import PageTransition from '../components/PageTransition';
import FeaturedProduct from '../components/FeaturedProduct';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white relative">
        <ParticleBackground />
        
        <div className="h-screen flex items-center relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
                DARKO
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 mb-12">
                Redefining contemporary fashion
              </p>
            </motion.div>
          </div>
        </div>

        <div ref={containerRef} className="h-screen relative z-10">
          <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <TShirtModel mousePosition={mousePosition} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div className="relative z-10">
          <FeaturedProduct />
        </div>

        <div className="min-h-screen flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
              Latest Collection
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Explore our newest designs that blend contemporary aesthetics with timeless elegance.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;