import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'ComfyCreator',
    tagline: 'ComfyCreator Documentation',
    favicon: '/img/favicon.ico',

    // Set the production url of your site here
    url: 'https://comfycreator.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'comfy-creator-docs', // Usually your GitHub org/user name.
    projectName: 'comfy-creator', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'research',
                path: 'research',
                routeBasePath: 'research',
            },
        ]
    ],

    presets: [
        [
            'classic',
            {

                docs: {
                    // routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/comfy-creator/comfy-creator-docs/tree/main/',
                },

                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/comfy-creator/comfy-creator-docs/tree/main/',
                },

                theme: {
                    customCss: './src/css/custom.css',
                },

            } satisfies Preset.Options,

        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        // image: 'img/docusaurus-social-card.jpg',
        navbar: {
            style: 'dark',
            title: 'Cozy Creator',
            logo: {
                alt: 'ComfyCreator Logo',
                src: '/img/img.png',
            },
            items: [
                {to: 'https://cozy.art/community/live-feed', label: 'Community', position: 'left'},
                {to: 'https://cozy.art/generate', label: 'Generate', position: 'left'},
                {to: 'https://cozy.art/albums', label: 'Albums', position: 'left'},
                {to: '/docs/intro', label: 'Docs', position: 'left'},
                {to: '/research/research', label: 'Research', position: 'left'},
                {
                    href: 'https://github.com/comfy-creator/comfy-creator-docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
            hideOnScroll: true,
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/comfycreator',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Research',
                            to: '/research/research',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} ComfyCreator`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
