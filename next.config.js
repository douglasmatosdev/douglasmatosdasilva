/** @type {import('next').NextConfig} */
// https://raw.githubusercontent.com/douglasmatosdev/todo-app-without-context-management/main/docs/todo-app-desktop-dark-mode.png
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/douglasmatosdev/**'
            }
        ]
    }
}

module.exports = nextConfig
