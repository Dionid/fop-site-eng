import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1abb59d9b4c9809abaf7c3d7d045c3db',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '(λ) Function Oriented Programming (FOP)',
  domain: 'fop.davidshekunts.com',
  author: '👨🏻 David Shekunts 👴🏿',

  // open graph metadata (optional)
  description:
    '(λ) Function Oriented Programming (FOP) – functional OOP alternative.',

  // social usernames (optional)
  twitter: 'david_shekunts',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // telegram: 'it_kachalka',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/': '1abb59d9b4c9809abaf7c3d7d045c3db',

    '/origins/you-dont-know-oop': '1abb59d9b4c9814c8e21ce75593e1b53',
    '/origins/you-have-never-used-oop': '1abb59d9b4c981b2b578f79daebca059',
    '/origins/main-problem-of-oop': '1abb59d9b4c98172aed0e4d880d4c73e',
    '/origins/why-fp-and-pp-is-not-a-solution':
      '1abb59d9b4c981c99388ebfbf8a3b7d7',
    '/origins/fop-birth': '1abb59d9b4c98180ac97d18908092ac6',

    '/flexibility-is-must': '1abb59d9b4c9816aacd0dbd0d1739aba',
    '/process-first-design': '1abb59d9b4c9816eb2e7fe92ae1e5b49',
    '/data-oriented-architecture': '1abb59d9b4c981c6b760ffe71e0d56e2',
    '/wynwyn': '1abb59d9b4c981e192a8e13d5fa83b03',
    '/explicit-better-implicit': '1abb59d9b4c9818db1fdea229b5d60f5',
    '/occams-chainsaw': '1abb59d9b4c9814b99e0e471e73b09ec'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
