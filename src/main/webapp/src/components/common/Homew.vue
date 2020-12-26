<template>
    <div class="wrapper">
        <div class="content-box-homew" :class="{'content-collapse':collapse}">
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Headerw.vue';
import bus from './bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
        };
    },
    components: {
        vHead,
    },
};
</script>

<style scoped>
.content-box-homew {
    position: absolute;
    left: 0;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}
</style>
