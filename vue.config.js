module.exports = {
    devServer: {
        https: true
    },
    pwa: {
        name: 'Yahtzee',
        themeColor: '#0038ae',
        iconPaths: {
                favicon32: 'img/icons/favicon-32.png',
                favicon16: 'img/icons/chrome-favicon-16-16.png',
                appleTouchIcon: 'img/icons/phone-150-150.png',
                maskIcon: null,
                msTileImage: 'img/icons/msTile-144-144.png'
        }
    }
}