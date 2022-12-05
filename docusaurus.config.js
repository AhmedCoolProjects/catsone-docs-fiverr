// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CATS Docs",
  tagline: "For Professional Recruiters",
  url: "https://catsone.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cats", // Usually your GitHub org/user name.
  projectName: "cats-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "89c223cef6a4ece29b673b7e3f07c42a",
        appId: "WKY9BA3E4I",
        indexName: "first_index",
      },
      navbar: {
        title: "",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "/category/getting-started",
            position: "left",
            label: "General Guidance",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "General Guidance",
        //         to: "/",
        //       },
        //       {
        //         label: "FAQs",
        //         to: "/",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Product",
        //     items: [
        //       {
        //         label: "CATS Pro",
        //         href: "https://catsone.com/products/",
        //       },
        //       {
        //         label: "Pricing",
        //         href: "http://catsone.com/pricing",
        //       },
        //       {
        //         label: "Data Migration",
        //         href: "https://catsone.com/data-migration/",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Company",
        //     items: [
        //       {
        //         label: "Testimonials",
        //         href: "http://catsone.com/testimonials-featured/",
        //       },
        //       {
        //         label: "Careers",
        //         href: "http://catsone.com/careers/",
        //       },
        //       {
        //         label: "Team",
        //         href: "http://catsone.com/team",
        //       },
        //       {
        //         label: "Blog",
        //         href: "https://blog.catsone.com/",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Resources",
        //     items: [
        //       {
        //         label: "Knowledge Base",
        //         href: "https://help.catsone.com/",
        //       },
        //       {
        //         label: "Integrations",
        //         href: "https://help.catsone.com/category/190-integrations",
        //       },
        //       {
        //         label: "Press",
        //         href: "http://catsone.com/press-kit/",
        //       },
        //       {
        //         label: "Downloads",
        //         href: "http://catsone.com/downloads/",
        //       },
        //       {
        //         label: "API / Developers",
        //         href: "https://docs.catsone.com/api/v3/",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} CATS, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
