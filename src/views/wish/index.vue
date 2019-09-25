<template>
    <div class="app-container">
        <el-card class="box-card">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item >
                    <template slot="title">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="logo-style"></el-avatar>
                        Workz Space
                        <div class="progress-box">
                            <div>Station<span class="station-style">5/10</span></div>
                            <el-progress :percentage="50" class="progress-style" :show-text="false"></el-progress>
                        </div>
                    </template>
                    <v-table class="table-style"/>
                </el-collapse-item>
            </el-collapse>
        </el-card>

        <el-card class="box-card">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item >
                    <template slot="title">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="logo-style"></el-avatar>
                        Workz Space
                        <div class="progress-box">
                            <div>Station<span class="station-style">5/10</span></div>
                            <el-progress :percentage="50" class="progress-style" :show-text="false"></el-progress>
                        </div>
                    </template>
                    <v-table class="table-style"/>
                </el-collapse-item>
            </el-collapse>
        </el-card>  

    </div>
</template>

<script>
    import Table from './table'
    export default {
        data() {
            return {
                activeNames: ''
            }
        },
        components: {
            'v-table' : Table
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style>
    .box-card{
        position      : relative;
        margin-bottom : 20px;
    }
    .el-collapse,.el-collapse-item__header,.el-collapse-item__wrap{
        border: none;
    }
    .logo-style{
        display      : inline-block;
        margin-right : 10px;
    }
    .el-collapse{
        display : flex;
    }
    .el-collapse-item{
        width: 100%;
    }
    .progress-box{
        line-height: 24px;
        position: absolute;
        right: 60px;
    }
    .station-style{
        margin-left: 50px;
    }
    .progress-style{
        width: 120px;
    }
</style>