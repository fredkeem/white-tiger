module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/whitetiger-web/'
      : '/',

    pluginOptions: {
      s3Deploy: {
        awsProfile: 'default',
        region: 'ap-northeast-2',
        bucket: 'whitetiger-web',
        createBucket: true,
        staticHosting: true,
        staticIndexPage: 'index.html',
        staticErrorPage: 'index.html',
        assetPath: 'dist',
        assetMatch: '**',
        deployPath: '/',
        acl: 'public-read',
        pwa: false,
        enableCloudfront: false,
        uploadConcurrency: 5,
        pluginVersion: '3.0.0'
      }
    }
}
