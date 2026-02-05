'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>VINTAGE <span>&</span> CLASS</h3>
                        <p className={styles.bio}>
                            Excelência em barbearia clássica. Onde cada detalhe é pensado para proporcionar uma experiência única de estilo e bem-estar.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkCol}>
                            <h4>Explorar</h4>
                            <ul>
                                <li><a href="#services">Serviços</a></li>
                                <li><a href="#about">Sobre Nós</a></li>
                                <li><a href="#gallery">Galeria</a></li>
                                <li><a href="#booking">Agendamento</a></li>
                            </ul>
                        </div>

                        <div className={styles.linkCol}>
                            <h4>Horários</h4>
                            <ul>
                                <li><span>Segunda - Sexta</span> <span>09:00 - 20:00</span></li>
                                <li><span>Sábado</span> <span>09:00 - 18:00</span></li>
                                <li><span>Domingo</span> <span>Fechado</span></li>
                            </ul>
                        </div>

                        <div className={styles.linkCol}>
                            <h4>Contato</h4>
                            <ul className={styles.contactList}>
                                <li><MapPin size={18} /> Rua das Navalhas, 123 - Centro</li>
                                <li><Phone size={18} /> (11) 99999-9999</li>
                                <li><Mail size={18} /> contato@vintageclass.com.br</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} Vintage & Class. Todos os direitos reservados.</p>
                    <button onClick={scrollToTop} className={styles.scrollTop} aria-label="Voltar ao topo">
                        <ChevronUp />
                    </button>
                </div>
            </div>
        </footer>
    );
}
