<!--导航-head-->
<template>
	<header>
		<div class="d-flex justify-content-center">
			<div class="header-content">
				<div class="d-flex flex-row justify-content-start nav">
					<a href="#" class="header-logo">
						<img src="~assets/img/common/logo.png" />
					</a>
					<!--<dd v-for="item in menus" :key="item.id">
					<nuxt-link to="/person/info">{{item.name}}</nuxt-link>
					</dd>-->
					
					<a v-if="menus != null" v-for="item in menus" :key="item.id" class="nav-link header-nav-item" v-on:click="selectMenu(item.id)" v-bind:class="{ active: item.selected }">{{item.name}}</a>
					{{$store.state.count}}
					<!--<a href="javascript:;" class="nav-link header-nav-item">我的面板</a>
					<a href="javascript:;" class="nav-link header-nav-item">系统设置</a>
					<a href="javascript:;" class="nav-link header-nav-item">客户管理</a>
					<a href="javascript:;" class="nav-link header-nav-item active">模版管理</a>-->
				</div>
			</div>
		</div>
	</header>
</template>

<script type="text/javascript">
	import { mapMutations } from 'vuex'
	export default {
		fetch({store, params}) {
			console.log("==================");
			debugger;
			store.commit('increment')
		},
		computed: {
			menus() {
				return this.$store.state.menus;
			}
		},
		methods: {
			selectMenu(selectId) {
//				debugger;
				var menus = this.menus;
				if (menus == null){
					return;
				}
				for(var j = 0; j < menus.length; j++) {
					var item = menus[j];
					if(selectId === item.id) {
						item.selected = true;
					} else {
						item.selected = false;
					}
					console.log("select menu name = " + item.name);
				}
				localStorage.UserInfo = "wangquan";
				console.log("select menu id = " + selectId);
			}
		}
	}
</script>