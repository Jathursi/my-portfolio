'use client';

import { Github, Linkedin, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-gray-100 dark:border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                            Jathursika Velummayilum
                        </h3>
                        <p className="text-sm text-foreground/80 font-medium mb-1">
                            Software Engineer
                        </p>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link href="https://github.com/jathursi" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/jathursika-velummayilum/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
                    Designed and Developed by Jathursika Velummayilum
                </div>
            </div>
        </footer>
    );
}
