'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">
                            Software Engineer
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Software Engineer with seven months of hands-on experience in Full Stack development, focusing on building scalable APIs, implementing authentication systems, and integrating database-driven features. Currently learning DevOps practices to enhance deployment automation and CI/CD workflows.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I look forward to applying my skills to real-world problems and continuously improving.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-background rounded-lg border border-primary/10 shadow-sm">
                                <h4 className="font-bold text-2xl text-primary mb-1">Degree</h4>
                                <p className="text-sm text-muted-foreground">BSc Hons Computer Science</p>
                                <p className="text-xs text-muted-foreground">CGPA: 3.07</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg border border-primary/10 shadow-sm">
                                <h4 className="font-bold text-2xl text-primary mb-1">Experience</h4>
                                <p className="text-sm text-muted-foreground">7+ Months</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative h-[400px] w-full"
                    >
                        <Collage />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

function Collage() {
    const [images, setImages] = React.useState<string[]>([]);

    React.useEffect(() => {
        // Fetch images from API
        fetch('/api/images')
            .then(res => res.json())
            .then(data => {
                const allImages = data.images || [];
                // Randomly shuffle and pick up to 5
                const shuffled = allImages.sort(() => 0.5 - Math.random());
                setImages(shuffled.slice(0,4));
            })
            .catch(err => console.error('Failed to load images', err));
    }, []);

    if (images.length === 0) {
        return (
            <div className="w-full h-full bg-muted/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/20">
                <p className="text-muted-foreground text-sm">Add 'about' images to public folder</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full grid grid-cols-6 grid-rows-6 gap-2 p-2 relative">
            {images.map((img, idx) => {
                // Dynamic grid spans for collage effect based on index
                // 5 items layout pattern
                let spanClass = "";
                if (images.length >= 5) {
                    if (idx === 0) spanClass = "col-span-4 row-span-4"; // Big one
                    if (idx === 1) spanClass = "col-span-2 row-span-2";
                    if (idx === 2) spanClass = "col-span-2 row-span-2";
                    if (idx === 3) spanClass = "col-span-3 row-span-2";
                    if (idx === 4) spanClass = "col-span-3 row-span-2";
                } else if (images.length === 3) {
                    if (idx === 0) spanClass = "col-span-4 row-span-6";
                    if (idx === 1) spanClass = "col-span-2 row-span-3";
                    if (idx === 2) spanClass = "col-span-2 row-span-3";
                } else {
                    spanClass = "col-span-3 row-span-3"; // Fallback
                }

                return (
                    <motion.div
                        key={img}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative rounded-xl overflow-hidden shadow-lg border border-white/50 dark:border-white/10 ${spanClass}`}
                    >
                        <img
                            src={`/${img}`}
                            alt="About"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                );
            })}
        </div>
    );

}
