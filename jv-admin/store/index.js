import Vuex from 'vuex'

const store = () => new Vuex.Store({
	state: {
		count:2,
		menus: [{
			id: '01',
			name: '我的面板',
			selected: true,
			menu: {
				id: '',
				name: '个人设置',
				icon: 'type-ico',
				subMenus: [{
					id: '011',
					name: '个人信息',
					url: 'person/info',
					selected: false
				}, {
					id: '002',
					name: '修改密码',
					url: 'person/change-pwd',
					selected: false
				}]
			}
		}, {
			id: '02',
			name: '系统设置',
			selected: false,
			menu: {
				id: '',
				name: '系统设置',
				icon: 'type-ico',
				subMenus: [{
					id: '011',
					name: '系统信息',
					url: 'person/info',
					selected: false
				}, {
					id: '002',
					name: '字典信息',
					url: 'person/change-pwd',
					selected: false
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