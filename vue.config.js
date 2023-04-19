module.exports = {
	devServer:{
		port:'5173',
		disableHostCheck:true,
		proxy:{
			'/api':{
				target:'http://47.113.230.184:9527',
				changeOrigin:true,
				pathRewrite:{
					'^/api': ''
				}
			}
		}
	}
}