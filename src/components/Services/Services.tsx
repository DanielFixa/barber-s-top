'use client';

import { motion } from 'framer-motion';
import { Scissors, Ruler, Beer, Sparkles } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: 'Corte de Cabelo',
        description: 'Cortes clássicos e modernos executados com precisão absoluta por mestres barbeiros.',
        price: 'R$ 80',
        icon: <Scissors />,
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Barba Sob Medida',
        description: 'Tratamento premium com toalha quente, óleos essenciais e acabamento na tradicional navalha.',
        price: 'R$ 60',
        icon: <Ruler />,
        image: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Experiência Completa',
        description: 'O ritual definitivo: Cabelo, barba, massagem facial e uma bebida premium do nosso bar.',
        price: 'R$ 130',
        icon: <Beer />,
        image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Tratamento Capilar',
        description: 'Hidratação profunda e cuidados específicos para manter a saúde e o brilho dos seus fios.',
        price: 'R$ 50',
        icon: <Sparkles />,
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop'
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.subtitle}
                    >
                        Nossa Especialidade
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Serviços de <span className="title-accent">Alto Padrão</span>
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div
                                className={styles.cardImage}
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                <div className={styles.iconWrapper}>{service.icon}</div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className={styles.footer}>
                                    <span className={styles.price}>{service.price}</span>
                                    <a href="#booking" className={styles.bookBtn}>Reservar</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
