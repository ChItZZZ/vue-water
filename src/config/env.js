/**
 * Created by my on 17/4/9.
 */
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
let routerMode;

if (process.env.NODE_ENV == 'development') {
    routerMode = 'hash'
}else{
    routerMode = 'hash'
}

export {
    routerMode
}