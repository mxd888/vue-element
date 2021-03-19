module.exports = {
    devServer: {
        port: 8080,
        host: 'localhost',
        open: true, // 配置浏览器自动访问
        proxy: {
            'Api': {
                target: 'https:mixiaodong.xyz/Openfeign',
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/Api': ''
                }
            }
        }
    }
}