
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: [
      'example.com', 
      'cdn.example.com', 
      'th.bing.com',
      'coolwallpapers.me',
      'img.freepik.com',
      '3.bp.blogspot.com',
      'lh3.googleusercontent.com',
      'images.wikidexcdn.net',
      'raw.githubusercontent.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ]
  },
}

module.exports = withImages(nextConfig)


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//           'example.com', 
//           'cdn.example.com', 
//           'th.bing.com',
//           'coolwallpapers.me',
//           'img.freepik.com',
//           "3.bp.blogspot.com" ,
//           'lh3.googleusercontent.com',
//           'images.wikidexcdn.net',
//           'raw.githubusercontent.com',
//         ],
//       },
// }
// const withImages = require('next-images')
// module.exports = withImages()
// module.exports = nextConfig


