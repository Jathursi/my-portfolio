'use client';

import { motion } from 'framer-motion';

const skills = [
    { category: "Web Development", items: ["React.js", "Node.js", "Next.js", "Flutter", ".NET", "Laravel"] },
    { category: "Programming Languages", items: ["Python", "JavaScript", "Java", "C#", "PHP"] },
    { category: "Databases", items: ["MySQL", "MariaDB", "MongoDB", "Oracle", "Sequelize ORM"] },
    { category: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "Kubernetes", "Postman", "Jenkins", "Terraform", "Ansible"] },
    { category: "AI/ML Tools", items: ["PyTorch", "Hugging Face", "Google Colab"] },
    { category: "IDEs", items: ["Visual Studio", "IntelliJ IDEA", "MATLAB", "Cursor"] },
    { category: "Cloud", items: ["AWS"] },
    { category: "Platforms", items: ["Windows", "Linux"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary/10 p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-primary">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm bg-background border border-secondary/30 rounded-full text-foreground/80 hover:bg-secondary/20 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
