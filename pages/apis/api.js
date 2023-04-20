export default {
    // 首页接口
    serchhot: "/getTypeOne", // 搜索热词
    homegood: "/rmsp", // 热销商品
    hotgoods: "/hotList?page=", // 热销商品
    search: '/search?word=', // 搜索
    // 每日上新
    newList: "/newList",
    // 分类 
    goods: "/getTypeTwo?type_one=", // 二级分类名字
    onegoods: "/getTypeTwoList?type_one=", // 二级分类商品
    // 详情
    detail: "/detail?goodId=", // 商品详情
    likethis: '/sameList?supplier=', // 同类商品
    shoper: '/supplierList?supplier=', // 商家信息
    // 登录
    register: '/register', // 注册
    login: '/login', // 登录
    // 购物车
    shopadd: '/add?token=', // 加入购物车
    shopremove: '/remove?token=', // 移除购物车商品
    shopdel: '/del?token=', // 删除购物车
    shopcar: "/shopList?token=", // 购物车商品
}