'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: "E-Commerce with Chatbot",
        description: "Building an E-Commerce website integrated with a responsive chatbot to enhance customer service.",
        tags: ["React.js", "Node.js", "Flask", "MySQL"],
        github: "https://github.com/jathursi/Ecommerce",
        demo: 'https://www.linkedin.com/posts/activity-7309840807023325184-Duzw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGlEesBDFYNUi0BQHQdQMo-3jt37DO0gO4',
        image: "/project-ecommerce.jpg"
    },
    {
        title: "Skin Lesion Classification",
        description: "Transformer-based skin lesion classification using Vision Transformers for accurate medical image analysis.",
        tags: ["Python", "PyTorch", "Google Colab"],
        github: "https://github.com/jathursi",
        demo: "#",
        image: "/project-mn.jpg"
    },
    {
        title: "AI-Based Recipe Generator",
        description: "A smart recipe generation web app that uses AI to create personalized recipes from user-provided ingredients, combining Flan-T5 text generation with real-time recipe data from TheMealDB API.",
        tags: ["Next.js", "Tailwind CSS", "Flan-T5", "Hugging Face", "TheMealDB API", "AI"],
        github: "https://github.com/Jathursi/AI-Based-Recipe-Generator",
        demo: "https://www.linkedin.com/posts/activity-7309127321985110016-4gkb",
        image: "/project-recipe-ai.jpg"
    },
    {
        title: "Vehicle Management System",
        description: "Led the development of a system to manage vehicle services, maintenance records, and job cards.",
        tags: ["React.js", "Node.js", "MySQL"],
        github: "https://github.com/Jathursi/RDA",
        demo: "#",
        image: "/project-vehicle.jpg"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-background rounded-xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Github size={20} />
                                        </Link>
                                        {project.demo !== "#" && (
                                            <Link href={project.demo} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                                <ExternalLink size={20} />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 bg-secondary/20 rounded-full text-primary font-medium border border-secondary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
