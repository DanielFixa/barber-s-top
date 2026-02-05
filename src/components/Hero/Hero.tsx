'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={styles.subtitle}
                    >
                        Fundada em 2015 — A Referência em Estilo
                    </motion.h4>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className={styles.title}
                    >
                        Tradição da Lâmina, <br />
                        <span className="title-accent">Excelência no Corte.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className={styles.description}
                    >
                        Redescubra o prazer de cuidar de si mesmo em um ambiente projetado para o homem moderno. Cortes clássicos, barbas impecáveis e uma experiência inesquecível.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className={styles.actions}
                    >
                        <a href="#services" className={styles.primaryBtn}>Nossos Serviços</a>
                        <a href="#booking" className={styles.secondaryBtn}>Reservar Agora</a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className={styles.scrollIndicator}
            >
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Role para descobrir</span>
            </motion.div>
        </section>
    );
}
