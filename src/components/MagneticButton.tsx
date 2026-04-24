'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface MagneticButtonProps { children: React.ReactNode; className?: string; onClick?: () => void; href?: string; strength?: number; as?: 'button' | 'a' | 'div'; }
export default function MagneticButton({ children, className, onClick, href, strength = 0.3, as: Component = href ? 'a' : 'button' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPosition({ x: (clientX - left - width / 2) * strength, y: (clientY - top - height / 2) * strength });
  };
  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });
  const content = (<motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} animate={{ x: position.x, y: position.y }} transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }} className={cn('inline-block', className)}>{children}</motion.div>);
  if (Component === 'a' && href) return <a href={href} onClick={onClick} className="inline-block">{content}</a>;
  if (Component === 'button') return <button onClick={onClick} className="inline-block">{content}</button>;
  return content;
}
