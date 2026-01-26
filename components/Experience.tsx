'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Mic2, ExternalLink, X } from 'lucide-react';

export default function Experience() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <section id="experience" className="py-20 bg-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                {/* Row 1: Education & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                    {/* Left Col: Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        <div className="relative pl-8 border-l-2 border-secondary/30 space-y-10 pb-5">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                <span className="text-sm text-primary font-medium mb-1 block">2021 — Present</span>
                                <h4 className="text-xl font-bold text-foreground">B.Sc. (Hons) in Computer Science</h4>
                                <h5 className="text-lg text-muted-foreground mb-2">University of Jaffna</h5>
                                <p className="text-muted-foreground leading-relaxed">
                                    CGPA: 3.07. Studying core computer science concepts with focus on software development, databases, and machine learning.
                                </p>
                            </div>
                        </div>
                        <div className="relative pl-8 border-l-2 border-secondary/30 space-y-10 ">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                <span className="text-sm text-primary font-medium mb-1 block">January 2026 - Present</span>
                                <h4 className="text-xl font-bold text-foreground">DevOps Master Program</h4>
                                <h5 className="text-lg text-muted-foreground mb-2">NerXperts (PVT) LTD</h5>
                                <p className="text-muted-foreground leading-relaxed">
                                    Learning and mastering DevOps concepts, including CI/CD pipelines, containerization, orchestration, cloud computing, and automation.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Col: Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Experience</h3>
                        </div>

                        <div className="relative pl-8 border-l-2 border-secondary/30 space-y-10">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                <span className="text-sm text-primary font-medium mb-1 block">June 2025 – Present</span>
                                <h4 className="text-xl font-bold text-foreground">Software Engineering Intern</h4>
                                <h5 className="text-lg text-muted-foreground mb-4">D P Infotech Private Ltd.</h5>
                                <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                                    <p>Developing, maintaining, and debugging modules for a .NET-based ERP system, ensuring seamless integration.</p>
                                    <p>Contributing to a PHP-based MVC web application using CodeIgniter for new features and bug fixes.</p>
                                    <p>Developing full-stack web applications using Laravel with Blade templates and AJAX.</p>
                                    <p>Building Python desktop applications for automating routine tasks.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Row 2: Conferences & Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left Col: Conferences */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Mic2 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Conferences & Workshops</h3>
                        </div>

                        <div className="relative pl-8 border-l-2 border-secondary/30 space-y-8">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">Dec 13, 2025</span>
                                <h4 className="text-lg font-bold text-foreground">Research Poster Presentation – SL-SWCS’25</h4>
                                <p className="text-sm text-primary font-medium mb-2">Sri Lanka Student Workshop on CS · University of Jaffna</p>
                                <p className="text-sm text-muted-foreground">
                                    Presented a research poster on Transformer-based Semi-Supervised Learning for Skin Lesion Classification.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">Oct 2024</span>
                                <h4 className="text-lg font-bold text-foreground">Google exploreCSR Symposium – CyberShield</h4>
                                <p className="text-sm text-muted-foreground">University of Jaffna</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">Aug 2024</span>
                                <h4 className="text-lg font-bold text-foreground">Mastering Deep Learning with Hands-On</h4>
                                <p className="text-sm text-muted-foreground">IEEE CS · University of Jaffna</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">Jun 2024</span>
                                <h4 className="text-lg font-bold text-foreground">Google exploreCSR Summer School (GeSSoMI)</h4>
                                <p className="text-sm text-muted-foreground">University of Jaffna · University of Melbourne</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">Jun 2024</span>
                                <h4 className="text-lg font-bold text-foreground">Cyber Security Bootcamp</h4>
                                <p className="text-sm text-muted-foreground">IEEE WIE · University of Jaffna</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">Dec 2023</span>
                                <h4 className="text-lg font-bold text-foreground">SL-SWCS’23</h4>
                                <p className="text-sm text-muted-foreground">University of Jaffna</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Col: Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>

                        <div className="relative pl-8 border-l-2 border-secondary/30 space-y-8">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">Jan 2026</span>
                                <h4 className="text-lg font-bold text-foreground">AI Essentials for Emerging IT Careees</h4>
                                <p className="text-sm text-muted-foreground mb-2">IDMNC International<button
                                    onClick={() => setSelectedCert('/cert-ai.jpeg')}
                                    className="inline-flex items-center gap-1.5 px-3 mx-4 py-1 mt-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-medium hover:bg-primary/10 transition-colors cursor-pointer"
                                >
                                    View Certificate
                                    <ExternalLink size={10} />
                                </button></p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">March 2025</span>
                                <h4 className="text-lg font-bold text-foreground">Python (Basic) Certificate</h4>
                                <p className="text-sm text-muted-foreground mb-2">HackerRank <button
                                    onClick={() => setSelectedCert('/cert-python.jpg')}
                                    className="inline-flex items-center gap-1.5 px-3 mx-4 py-1 mt-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-medium hover:bg-primary/10 transition-colors cursor-pointer"
                                >
                                    View Certificate
                                    <ExternalLink size={10} />
                                </button></p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">2024</span>
                                <h4 className="text-lg font-bold text-foreground">30 Days Machine Learning</h4>
                                <p className="text-sm text-muted-foreground">NoviTech (E-Learning) <button
                                    onClick={() => setSelectedCert('/cert-ML.jpg')}
                                    className="inline-flex items-center gap-1.5 px-3 mx-4 py-1 mt-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-medium hover:bg-primary/10 transition-colors cursor-pointer"
                                >
                                    View Certificate
                                    <ExternalLink size={10} />
                                </button></p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">2024</span>
                                <h4 className="text-lg font-bold text-foreground">UoJCoders V3.0 – Participation</h4>
                                <p className="text-sm text-muted-foreground">University of Jaffna <button
                                    onClick={() => setSelectedCert('/cert-UOJ.jpg')}
                                    className="inline-flex items-center gap-1.5 px-3 mx-4 py-1 mt-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-medium hover:bg-primary/10 transition-colors cursor-pointer"
                                >
                                    View Certificate
                                    <ExternalLink size={10} />
                                </button></p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">2016</span>
                                <h4 className="text-lg font-bold text-foreground">Honours Diploma in Computer Application</h4>
                                <p className="text-sm text-muted-foreground">Ramanathapuram, India <button
                                    onClick={() => setSelectedCert('/cert-dip.jpg')}
                                    className="inline-flex items-center gap-1.5 px-3 mx-4 py-1 mt-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-medium hover:bg-primary/10 transition-colors cursor-pointer"
                                >
                                    View Certificate
                                    <ExternalLink size={10} />
                                </button></p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                                <span className="text-xs text-muted-foreground mb-1 block">2011</span>
                                <h4 className="text-lg font-bold text-foreground">Student Computer Package</h4>
                                <p className="text-sm text-muted-foreground">Ramanathapuram, India <button
                                    onClick={() => setSelectedCert('/cert-tjob.jpg')}
                                    className="inline-flex items-center gap-1.5 px-3 mx-4 py-1 mt-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-medium hover:bg-primary/10 transition-colors cursor-pointer"
                                >
                                    View Certificate
                                    <ExternalLink size={10} />
                                </button></p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl max-h-[90vh] w-full bg-background rounded-2xl shadow-2xl border border-secondary/20 overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-foreground transition-colors z-10"
                            >
                                <X size={20} />
                            </button>
                            <div className="p-2 h-full flex items-center justify-center bg-secondary/5">
                                <img
                                    src={selectedCert}
                                    alt="Certificate"
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-sm"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
