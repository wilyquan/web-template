<!--导航-head-->
<template>
	<!-- 侧边栏 -->
	<div class="cc-sidebar">
		<div class="cc-menu">
			<!-- 交互说明
                         1.给标签dl添加样式"open",显示下拉列表
                         2.给标签dt或dd添加样式"on",显示选中状态
                    -->
			<!--<dl>
				<dt><i class="type-ico "></i>个人设置</dt>

				<dd class="selected">
					<nuxt-link to="/person/info">个人信息</nuxt-link>
				</dd>
				<dd class="">
					<nuxt-link to="/person/change-pwd">修改密码</nuxt-link>
				</dd>
			</dl>-->
			<!--必须要判断菜单信息是否存在-->
			<dl v-if="menu != null">
				<dt><i class="type-ico ico-setup"></i>{{menu.name}}</dt>
				<dd v-for="subMenu in menu.subMenus" :key="subMenu.id" v-bind:class="{selected : subMenu.selected}">
					<a @click="selectMenu(subMenu.id)" v-bind:href="subMenu.url">{{subMenu.name}}</a>
				</dd>
			</dl>
			<!--<dl>
								<dt><i class="type-ico ico-setup"></i>系统设置</dt>

								<dd class="">
									<a href="#">菜单信息</a>
								</dd>

								<dd class="">
									<a href="#">角色信息</a>
								</dd>

								<dd class="">
									<a href="#">字典信息</a>
								</dd>
							</dl>-->
			<!--<dl>
								<dt><i class="type-ico ico-setup"></i>系统用户</dt>

								<dd class="">
									<a href="#">用户管理</a>
								</dd>

								<dd class="">
									<a href="#">组织管理</a>
								</dd>

								<dd class="">
									<a href="#">区域管理</a>
								</dd>
							</dl>-->
			<!--<dl>
								<dt class=""><a href="/index.php/core/apply_progress"><i class="type-ico ico-apply"></i>支付申请</a></dt>
							</dl>-->
		</div>
	</div>
	<!-- 侧边栏 ]] -->
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		head:{
			script:[ {src : '/menu.js' }]
		},
		computed: {
			menu() {
//				debugger;
				
				//获得子菜单对象
				var menu;
				var menus = this.$store.state.menus;
				if(menus == null){
					return null;
				}
				for(var i = 0; i < menus.length; i++) {
					var item = menus[i];
					if(item.selected) {
						menu = item.subMenu;
						break;
					}
				}

				return menu;
			}
		},
		methods: {
			selectMenu(selectId){
				var subMenus = this.menu.subMenus;
				for (var i=0; i<subMenus.length; i++){
					var subMenu = subMenus[i];
					if (subMenu.id === selectId){
						subMenu.selected = true;
					}else{
						subMenu.selected = false;
					}
				}
			}
		}
	}
</script>