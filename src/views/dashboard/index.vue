<template>
    <div class="dashboard-container">
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item, index) in tabs" :key="index" class="box">
                        <el-card class="card-style">
                            <div @click="() => toPage(item.path)">
                                <svg-icon icon-class="example" class="card-icon" />
                                <p>{{ item.name }}</p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8">

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Dashboard',
        computed: {
            ...mapGetters([
            'name'
            ])
        },
        data() {
            return {
                tabs : [
                    // { name: '客户管理' },
                    { name: 'Client Wishlist', path: 'Wish', icon : 'tag'},
                    { name: 'Account Request Management', path: 'Provider', icon : 'provider' },
                    { name: 'Workspace Management', path: 'Space', icon : 'management' },
                    { name: 'Workspace Update Requests', path: 'Update', icon : 'update' },
                    // { name: '工作空间评价管理' },
                    { name: 'Logout', path: 'Admin', icon : 'admin' }
                ]
            }
        },
        methods: {
            toPage(path) {
                this.$router.push({name : path})
            },
            handlePage () {

            }
        }
    }
</script>

<style lang="scss" scoped>
$brand-color: #00AEEF;
$font-color: #3E5765;

.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
.dashboard-container {
    .box {
        width: 25%;
        font-size: 14px;
        color: $font-color;
        font-weight: bold;
        .menu-style {
            border: 0;
        }
        .card-style {
            margin-bottom: 20px;
        }
        .card-icon {
            font-size: 24px;
            color: $brand-color;
        }
        .card-item {
            display: block;
            padding: 0;
        }
    }
}
</style>
