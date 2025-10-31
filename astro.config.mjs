// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	vite: {
		ssr: {
			noExternal: ['@codesandbox/sandpack-react']
		}
	},
    integrations: [starlight({
        title: 'Narration Interactive',
        description: 'Le web comme médium narratif',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Introduction',
                items: [
                    { label: 'Bienvenue', slug: 'index' },
                ],
            },
            {
                label: 'MM2B - Intro web',
                collapsed: true,
                autogenerate: { directory: 'mm2b' },
            },
        {
            label: 'MM3B - Récits Interactifs',
            collapsed: false,
            items: [
                { label: 'Introduction', slug: 'mm3b' },
                { label: '1. Le personnage qui vous observe', slug: 'mm3b/personnage-observe' },
                { label: '2. L\'histoire à plusieurs voix', slug: 'mm3b/histoire-voix' },
                { label: '3. La chambre des souvenirs', slug: 'mm3b/chambre-souvenirs' },
                { label: '4. La vitesse du temps', slug: 'mm3b/vitesse-temps' },
                { label: 'Créez votre récit', slug: 'mm3b/creez-votre-recit' },
            ],
        },
        ],
		}), react()],
});
