export default function request( method = 'GET', url, data = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			method: method,
			url: '/api' + url,
			data: data,
			success(res) {
				// 状态码以 2 开头，表示请求成功
				if (/^2\d{2}$/.test(res.statusCode)) {
					resolve(res.data);
				} else {
					reject(res);
				}
			},
			fail(err) {
				reject(err);
			}
		})
	})
}
