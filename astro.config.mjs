// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Narration Interactive',
        description: 'Le web comme médium narratif',
        logo: {
            light: './public/img/iad-logo-dark.svg',
            dark: './public/img/iad-logo-light.svg',
        },
        customCss: [
            // Styles unifiés pour les composants interactifs
            './src/styles/iad-interactive.css',
        ],
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Introduction',
                items: [
                    { label: 'Bienvenue', slug: 'index' },
                    { label: '📜 Changelog', slug: 'changelog' },
                ],
            },
            {
                label: 'MM2B - Intro web',
                collapsed: true,
                autogenerate: { directory: 'mm2b' },
            },

            {
                label: 'MM3B - Sites Web Dynamiques 1',
                collapsed: true,
                items: [
                    { label: 'Introduction', slug: 'mm3b-sites-web-dynamique-1' },
                    { label: '1. Le personnage qui vous observe', slug: 'mm3b-sites-web-dynamique-1/personnage-observe' },
                    { label: '2. L\'histoire à plusieurs voix', slug: 'mm3b-sites-web-dynamique-1/histoire-voix' },
                    { label: '3. La chambre des souvenirs', slug: 'mm3b-sites-web-dynamique-1/chambre-souvenirs' },
                    { label: '4. La vitesse du temps', slug: 'mm3b-sites-web-dynamique-1/vitesse-temps' },
                    { label: 'Créez votre récit', slug: 'mm3b-sites-web-dynamique-1/creez-votre-recit' },
                ],
            },
            {
                label: 'MM3B - Décrypter l\'interactivité',
                collapsed: true,
                autogenerate: { directory: 'mm3b-interactivite' },
            },
            {
                label: 'RTMF1M - Sites web dynamiques 2',
                collapsed: true,
                items: [
                    { label: 'Introduction', slug: 'rtmf1m' },
                    {
                        label: 'Cartographie du possible',
                        collapsed: true,
                        autogenerate: { directory: 'rtmf1m/01-cartographie' }
                    },
                    {
                        label: 'Fondamentaux techniques',
                        collapsed: true,
                        autogenerate: { directory: 'rtmf1m/02-fondamentaux' }
                    },
                    {
                        label: 'Idéation et prototypage',
                        collapsed: true,
                        autogenerate: { directory: 'rtmf1m/03-ideation' }
                    },
                    {
                        label: 'Réalisation',
                        collapsed: true,
                        autogenerate: { directory: 'rtmf1m/04-realisation' }
                    },
                    {
                        label: 'Exposition',
                        collapsed: true,
                        autogenerate: { directory: 'rtmf1m/05-exposition' }
                    },
                    {
                        label: 'Territoires créatifs',
                        collapsed: true,
                        autogenerate: { directory: 'rtmf1m/territoires' }
                    },
                    {
                        label: 'Recettes de code',
                        collapsed: true,
                        autogenerate: { directory: 'rtmf1m/recettes' }
                    },
                    {
                        label: 'Ressources',
                        collapsed: true,
                        autogenerate: { directory: 'rtmf1m/ressources' }
                    }
                ]
            },
            {
                label: 'Resources',
                collapsed: true,
                autogenerate: { directory: 'ressources' },
            },
        ],
		})],
});
