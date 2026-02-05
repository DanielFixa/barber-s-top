'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.imageCol}
                    >
                        <div className={styles.imageStack}>
                            <div className={styles.mainImage}>
                                <img
                                    src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2070&auto=format&fit=crop"
                                    alt="Interior da Barbearia"
                                />
                            </div>
                            <div className={styles.accentBorder}></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.contentCol}
                    >
                        <h4 className={styles.subtitle}>Nossa Herança</h4>
                        <h2 className={styles.title}>Onde a Tradição encontra a <br /> <span className="title-accent">Excelência</span></h2>
                        <p className={styles.description}>
                            Na <strong>Vintage & Class</strong>, acreditamos que barbearia é mais do que apenas estética; é um ritual de autodescoberta e confiança. Desde 2015, honramos as técnicas clássicas da velha escola, integrando-as ao estilo de vida do homem moderno.
                        </p>
                        <p className={styles.description}>
                            Cada corte é uma obra de arte, cada barba é esculpida com precisão e cada cliente é tratado como um convidado de honra em nosso clube exclusivo.
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <div className={styles.statIcon}><Clock /></div>
                                <div>
                                    <span className={styles.statNumber}>9+</span>
                                    <p className={styles.statLabel}>Anos no Mercado</p>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statIcon}><Users /></div>
                                <div>
                                    <span className={styles.statNumber}>5k+</span>
                                    <p className={styles.statLabel}>Clientes Únicos</p>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statIcon}><Award /></div>
                                <div>
                                    <span className={styles.statNumber}>12</span>
                                    <p className={styles.statLabel}>Mestres Barbeiros</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
