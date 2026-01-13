import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const publicDir = path.join(process.cwd(), 'public');
        const files = fs.readdirSync(publicDir);

        // Filter files starting with 'about' (covers about1.jpg, about_1.jpg, etc.)
        // and image extensions
        const cvImages = files.filter(file =>
            file.toLowerCase().startsWith('about') &&
            /\.(jpg|jpeg|png|webp)$/i.test(file)
        );

        return NextResponse.json({ images: cvImages });
    } catch (error) {
        console.error('Error reading public directory:', error);
        return NextResponse.json({ images: [] }, { status: 500 });
    }
}
