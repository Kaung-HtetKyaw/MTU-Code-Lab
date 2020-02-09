const path = require('path')

module.exports = {
	plugins: [
        ['@vuepress/google-analytics', { ga: 'UA-100767601-5' }],
        ['@vuepress/blog', {
            frontmatters: [
                {
                    id: 'tag',
                    title: 'Tag',
                    keys: ['tags'],
                    path: '/tag/',
                    layout: 'TagsLayout',
                    scopeLayout: 'TagLayout',
                    pagination: {
                        layout: 'TagLayout',
                        getPaginationPageTitle: (_, key) => `${key} Tag`,
                    }
                },
            ],
            globalPagination: {
                lengthPerPage: 2,
            }
        }],
        'seo',
        'disqus',
        require('./extendPageData.js'),
    ],
    enhanceAppFiles: [
        path.resolve(__dirname, 'articles.js'),
        path.resolve(__dirname, 'search.js'),
    ],
}
