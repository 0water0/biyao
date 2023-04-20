import axios from './request .js'
import api from './api.js'

// 一级标题
// export const getTypeOne = ()=> {
// 	return request('/getTypeOne', 'GET')
// }
export const getTypeOneName = () => {
    return axios(
        "GET",
        api.serchhot,
    )
}
// 搜索
export const searchgood = goodname => {
    return axios(
        "GET",
         api.search + goodname,
    )
}
// // 热销初始商品
export const homegood = () => {
    // console.log(api.convenient);
    return axios(
        "GET",
         api.homegood,
    )
}
// // 热销商品
export const hotgood = page => {
    // console.log(api.hotgoods);
    return axios(
        "GET",
         api.hotgoods,
    )
}
// // 每日上新
export const newgood = () => {
    return axios(
        "GET",
         api.newList
    )
}
// // 分类
// // 二级分类
export const twogoods = onename => {
    return axios(
        "GET",
         api.goods + onename,
    )
}
// // 二级分类商品
export const onegood = (onename, twoname) => {
    // console.log(api.onegoods + onename + '&type_two=' + twoname);
    return axios(
        "GET",
         api.onegoods + onename + '&type_two=' + twoname,
    )
}
// // 商品详情
export const gooddetail = id => {
    return axios(
        "GET",
         api.detail + id,
    )
}
// // 同类商品
export const likethisgood = supper => {
    return axios(
        "GET",
         api.likethis + supper,
    )
}
// // 商家信息
export const shopper = shopword => {
    return axios(
        "GET",
         api.shoper + shopword
    )
}
// // 注册
export const registe = (a, b) => {
    return axios(
        'GET',
         api.register,
        {
            userName: a,
            password: b,
        }
    )
}
// // 登录
export const login = (a, b) => {
    return axios(
        'GET',
         api.login,
        {
            userName: a,
            password: b,
        }
    )
}
// // 购物车
// // 加入购物车
export const shopcaradd = (token, id) => {
    // console.log(api.shopadd + token + '&goodId=' + id);
    return axios(
        "GET",
         api.shopadd + token + '&goodId=' + id
    )
}
// 减少
export const shopmove = (token, id) => {
    // console.log(api.shopremove + token + '&goodId=' + id);
    return axios(
        "GET",
         api.shopremove + token + '&goodId=' + id
    )
}
// // 删除
export const shopdel = (token, id) => {
    // console.log(api.shopdel + token + '&goodId=' + id);
    return axios(
        "GET",
         api.shopdel + token + '&goodId=' + id
    )
}
// // 购物车列表
export const shopcar = token => {
    // console.log(api.shopcar + token);
    return axios(
        "GET",
        api.shopcar + token
    )
}
