'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-16 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 animate-pulse duration-[5000ms]" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[80px] translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left z-10"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-medium mb-4 md:mb-6">
                            Available for Work
                        </span>
                        <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
                            Hello, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Jathursika
                            </span>
                        </h1>
                        <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                            A passionate Computer Science graduate crafting beautiful, high-performance web experiences.
                            Specializing in modern UI/UX and full-stack development.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-4">
                            <Link href="#projects" className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 group text-sm md:text-base">
                                View My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/Jathursika (1).pdf" target="_blank" className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 text-foreground font-medium hover:bg-muted transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                                Download CV
                                <Download size={18} />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        {/* Profile Image */}
                        <div className="relative w-48 h-48 md:w-80 md:h-80 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-float will-change-transform" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl group">
                                <img
                                    src="/Jathu.png"
                                    alt="Jathursika"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute top-4 -right-2 md:top-6 md:-right-2 bg-background/90 backdrop-blur shadow-lg rounded-xl p-2 md:p-3 border border-secondary/20"
                            >
                                <span className="font-semibold text-xs md:text-sm text-primary">🚀 CS Graduate</span>
                            </motion.div>

                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-6 -left-2 md:bottom-8 md:-left-2 bg-background/90 backdrop-blur shadow-lg rounded-xl p-2 md:p-3 border border-secondary/20"
                            >
                                <span className="font-semibold text-xs md:text-sm text-primary">🎨 Developer</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
