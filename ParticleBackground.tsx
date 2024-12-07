import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  element: HTMLDivElement;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 20;
    const colors = ['#9333EA', '#7E22CE', '#6B21A8', '#581C87'];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const element = document.createElement('div');
      element.className = 'absolute rounded-full pointer-events-none';
      container.appendChild(element);

      const particle: Particle = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        element
      };

      particlesRef.current.push(particle);
      updateParticle(particle);
    }

    function updateParticle(particle: Particle) {
      particle.element.style.width = `${particle.size}px`;
      particle.element.style.height = `${particle.size}px`;
      particle.element.style.backgroundColor = particle.color;
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
    }

    function animate() {
      particlesRef.current.forEach(particle => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Move particles away from mouse
        if (distance < 200) {
          const angle = Math.atan2(dy, dx);
          const force = (200 - distance) / 200;
          particle.x -= Math.cos(angle) * force * 2;
          particle.y -= Math.sin(angle) * force * 2;
        }

        // Add some random movement
        particle.x += Math.sin(Date.now() * 0.001 + particle.y * 0.01) * 0.5;
        particle.y += Math.cos(Date.now() * 0.001 + particle.x * 0.01) * 0.5;

        // Keep particles within bounds
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;

        updateParticle(particle);
      });

      requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particlesRef.current.forEach(particle => particle.element.remove());
      particlesRef.current = [];
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    />
  );
};

export default ParticleBackground;