<template>
  <el-menu
      ref="menu"
      class="el-menu-vertical-demo"
      :default-active="this.$route.path"
      :router="true"
      unique-opened
  >
    <!-- 使用 v-for 循环遍历第一组菜单 -->
    <template v-for="(menu, index) in firstGroupMenus" :key="index">
      <el-sub-menu v-if="menu.children" :index="menu.index" @click.native="toggleMenu(menu.index)">
        <template #title>
          <i :class="menu.icon"></i> {{ menu.name }}
        </template>
        <el-menu-item-group v-for="(child, childIndex) in menu.children" :key="childIndex" :title="child.name">
          <el-menu-item v-for="(subItem, subIndex) in child.children" :key="subIndex" :index="subItem.index" @click="handleMenuItemClick(subItem.index)">
            {{ subItem.name }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item v-else :index="menu.index" @click="handleMenuItemClick(menu.index)">
        <i :class="menu.icon"></i> {{ menu.name }}
      </el-menu-item>
    </template>
    <!-- 使用 v-for 循环遍历第一组菜单 -->
    <template v-for="(menu, index) in SecondGroupMenus" :key="index">
      <el-sub-menu v-if="menu.children" :index="menu.index" @click.native="toggleMenu(menu.index)">
        <template #title>
          <i :class="menu.icon"></i> {{ menu.name }}
        </template>
        <el-menu-item-group v-for="(child, childIndex) in menu.children" :key="childIndex" :title="child.name">
          <el-menu-item v-for="(subItem, subIndex) in child.children" :key="subIndex" :index="subItem.index" @click="handleMenuItemClick(subItem.index)">
            {{ subItem.name }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item v-else :index="menu.index" @click="handleMenuItemClick(menu.index)">
        <i :class="menu.icon"></i> {{ menu.name }}
      </el-menu-item>
    </template>
    <!-- 使用 v-for 循环遍历第一组菜单 -->
    <template v-for="(menu, index) in ThreeGroupMenus" :key="index">
      <el-sub-menu v-if="menu.children" :index="menu.index" @click.native="toggleMenu(menu.index)">
        <template #title>
          <i :class="menu.icon"></i> {{ menu.name }}
        </template>
        <el-menu-item-group v-for="(child, childIndex) in menu.children" :key="childIndex" :title="child.name">
          <el-menu-item v-for="(subItem, subIndex) in child.children" :key="subIndex" :index="subItem.index" @click="handleMenuItemClick(subItem.index)">
            {{ subItem.name }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item v-else :index="menu.index" @click="handleMenuItemClick(menu.index)">
        <i :class="menu.icon"></i> {{ menu.name }}
      </el-menu-item>
    </template>
  
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1', // 默认激活的菜单项
      // 第一组菜单
      firstGroupMenus: [
        {
          name: '仪表盘',
          index: '1',
          icon: 'el-icon-location',
          route:'Home',
          children: [
            {
              name: '',
              children: [
                { name: '景区', index: '/home/Weather' },
                { name: '农业区', index: '/home/Agri' }
              ]
            },
          ]
        }
      ],
      SecondGroupMenus: [
        {
          name: '监控查看',
          icon: 'el-icon-location',
          children: [
            {
              name: '景区',
              children: [
                { name: '入口区', index: '/home/Maps/entrance' },
                { name: '出口区', index: '/home/Maps/exit' },
                { name: '公园区', index: '/home/Maps/park' }
              ]
            },
            {
              name: '农业区',
              children: [
                { name: '麦田', index: '/home/Maps/wheat-field' },
                { name: '果园', index: '/home/Maps/orchard' },
                { name: '鱼塘', index: '/home/Maps/fish-pond' }
              ]
            },
            {
              name: '交易市场区',
              children: [
                { name: '农产品市场', index: '/home/Maps/agricultural-products-market' },
                { name: '纺织品市场', index: '/home/Maps/textile-market' }
              ]
            }
          ]
        }
      ],
      ThreeGroupMenus: [
        {
          name: '地图预览',
          index: '3',
          icon: 'el-icon-location',
          children: [
            {
              name: '',
              children: [
                { name: '热力图', index: '/home/HeatMap' },
                { name: '实景图', index: '/home/Maps/CommonMap' }
              ]
            },
          ]
        }
      ]
    };
  },
  methods: {
    handleMenuItemClick(index) {
      console.log(index);
      // 处理菜单项点击事件，跳转到对应的路由
      this.$router.push(index);
    },
    toggleMenu(event) {
      // 获取点击的菜单实例
      const menu = this.$refs.menu;
      // 获取当前点击的菜单项的索引
      const index = event.currentTarget.getAttribute('index');
      // 判断当前菜单项是否已经展开，若已展开则收起，否则展开
      if (menu.openedMenus.includes(index)) {
        menu.closeMenu(index);
      } else {
        menu.openMenu(index);
      }
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo .el-sub-menu {
  height: 100%;
  width: 200px;

}
</style>
