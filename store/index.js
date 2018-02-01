import Vuex from 'vuex'
import axios from 'axios'

const store = () => new Vuex.Store({
	state: {
		count: 2,
		menus: {},
		first: true
//		[{
//			id: '01',
//			name: '我的面板',
//			selected: true,
//			menu: {
//				id: '',
//				name: '个人设置',
//				icon: 'type-ico',
//				subMenus: [{
//					id: '011',
//					name: '个人信息',
//					url: 'person/info',
//					selected: false
//				}, {
//					id: '002',
//					name: '修改密码',
//					url: 'person/change-pwd',
//					selected: false
//				}]
//			}
//		}, {
//			id: '02',
//			name: '系统设置',
//			selected: false,
//			menu: {
//				id: '',
//				name: '系统设置',
//				icon: 'type-ico',
//				subMenus: [{
//					id: '011',
//					name: '系统信息',
//					url: 'person/info',
//					selected: false
//				}, {
//					id: '002',
//					name: '字典信息',
//					url: 'person/change-pwd',
//					selected: false
//				}]
//			}
//
//		}]
	},
	mutations: {
		increment(state) {
			state.count++
		},
		setFirst(state, status){
			state.first = false;	
		},
		setMenus(state, menus){
			state.menus = menus;	
//			console.log("set menus ...");
//			window.localStorage.UserInfo = "wilyquan";
//			console.log("aaa = " + window.localStorage.UserInfo);
//			window.localStorage.clear();
//			state.menus = menus;	
		},
		updateItem(state, item){
			
		},
		updateMenu(state, menu){
		}
		//		setUserInfo(state, info) {
		//			state.userInfo = info;
		//			sessionStorage.setItem('cc-user-info', info);
		//		}
	},
	actions: {
		async nuxtServerInit({
			state,
			commit
		}, {
			isDev,
			req,
			redirect
		}) {
			try {
//				const resReleases = await axios(state.apiURI + '/releases')
//				commit('setGhVersion', resReleases.data[0].name)
//				const resLang = await axios(state.apiURI + '/lang/' + state.locale)
//				commit('setLang', resLang.data)
//				commit('setDocVersion', resLang.data.docVersion)
//				if (state.first){
					const resMenu = await axios("http://localhost:8000/menu/nuxt");
					commit('setMenus', resMenu.data);
//				}
				
			} catch (e) {
				console.error('Error on [nuxtServerInit] action, please run the docs server.' + e) // eslint-disable-line no-console
			}
		}
	}
})

export default store