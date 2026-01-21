'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

// Dummy data for badges
const badges = [
    {
        title: "Google Data Analytics Professional Certificate",
        skills: ["Data Analysis", "R Programming", "SQL", "Tableau"],
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/example",
        image: "/badges/google-data-analytics.png"
    },
    {
        title: "AWS Certified Cloud Practitioner",
        skills: ["Cloud Computing", "AWS Services", "Security", "Billing"],
        link: "#",
        image: "/badges/aws-cp.png"
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        skills: ["React", "JavaScript", "CSS", "HTML"],
        link: "#",
        image: "/badges/meta-frontend.png"
    },
    {
        title: "IBM Data Science Professional Certificate",
        skills: ["Python", "Data Science", "Machine Learning"],
        link: "#",
        image: "/badges/ibm-data-science.png"
    },
    {
        title: "Azure Fundamentals AZ-900",
        skills: ["Azure", "Cloud Concepts", "Security"],
        link: "#",
        image: "/badges/azure-fund.png"
    },
    {
        title: "HackerRank React (Basic)",
        skills: ["React", "Problem Solving"],
        link: "#",
        image: "/badges/hackerrank-react.png"
    },
    {
        title: "Introduction to Cybersecurity",
        skills: ["Cybersecurity", "Network Security"],
        link: "#",
        image: "/badges/intro-cyber.png"
    },
    {
        title: "Agile Project Management",
        skills: ["Agile", "Scrum", "Jira"],
        link: "#",
        image: "/badges/agile.png"
    }
];

export default function Badges() {
    const [showAll, setShowAll] = useState(false);

    // Assuming 3 columns on large screens, 2 rows = 6 items.
    const INITIAL_LIMIT = 6;
    const displayedBadges = showAll ? badges : badges.slice(0, INITIAL_LIMIT);

    return (
        <section id="badges" className="py-20 bg-secondary/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Badges Earned</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {displayedBadges.map((badge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group bg-background rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                                            <Award size={24} />
                                        </div>
                                        <Link
                                            href={badge.link}
                                            target="_blank"
                                            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full"
                                        >
                                            <ExternalLink size={20} />
                                        </Link>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                                        {badge.title}
                                    </h3>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {badge.skills.map(skill => (
                                                <span
                                                    key={skill}
                                                    className="text-xs px-2.5 py-1 bg-background rounded-full text-muted-foreground border border-secondary/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {badges.length > INITIAL_LIMIT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-12 text-center"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all font-medium"
                        >
                            {showAll ? (
                                <>
                                    Show Less <ChevronUp size={18} />
                                </>
                            ) : (
                                <>
                                    See More <ChevronDown size={18} />
                                </>
                            )}
                        </button>
                    </motion.div>
                )}

            </div>
        </section>
    );
}
