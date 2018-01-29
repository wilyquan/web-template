import Vuex from 'vuex'

const store = () => new Vuex.Store({
	state: {
		count:2,
		menus: [{
			id: '01',
			name: '我的面板',
			select: false,
			menu: {
				id: '',
				name: '个人设置',
				icon: 'type-ico',
				subMenu: [{
					id: '011',
					name: '个人信息',
					url: 'person/info',
					select: true
				}, {
					id: '002',
					name: '修改密码',
					url: 'person/change-pwd',
					select: false
				}]
			}
		}, {
			id: '01',
			name: '系统设置',
			select: false,
			menu: {
				id: '',
				name: '个人设置',
				icon: 'type-ico',
				subMenu: [{
					id: '011',
					name: '个人信息',
					url: 'person/info',
					select: true
				}, {
					id: '002',
					name: '修改密码',
					url: 'person/change-pwd',
					select: false
				}]
			}

		}]
	},
	mutations: {
		//		increment(state) {
		//			state.count++
		//		}
		//		setUserInfo(state, info) {
		//			state.userInfo = info;
		//			sessionStorage.setItem('cc-user-info', info);
		//		}
	}
})

export default store