
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'example.com', 
          'cdn.example.com', 
          'th.bing.com',
          'coolwallpapers.me',
          'img.freepik.com',
          "3.bp.blogspot.com" ,
          'lh3.googleusercontent.com',
          'images.wikidexcdn.net',
          'raw.githubusercontent.com',
        ],
      },
}
const withImages = require('next-images')
module.exports = withImages()
module.exports = nextConfig


