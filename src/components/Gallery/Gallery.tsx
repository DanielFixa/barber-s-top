'use client';

import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const images = [
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000',
    'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=1000',
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000',
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000',
    'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?q=80&w=1000',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000'
];

export default function Gallery() {
    return (
        <section id="gallery" className={styles.gallery}>
            <div className="container">
                <div className={styles.header}>
                    <h4 className={styles.subtitle}>Galeria de Estilo</h4>
                    <h2 className={styles.title}>Nossa <span className="title-accent">Arte</span></h2>
                </div>

                <div className={styles.grid}>
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={styles.item}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={img} alt={`Trabalho ${idx + 1}`} />
                            <div className={styles.overlay}>
                                <span>Ver Detalhes</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
