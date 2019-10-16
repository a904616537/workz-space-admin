<template>
    <div class="app-container">
        <div style="margin-bottom: 10px;">
            <el-button type="primary" :loading="loading" size="medium" class="apply-btn" @click.native.prevent="getData">Refresh</el-button>
        </div>
        <el-card class="box-card"  v-for="(item, index) in tableData" :key="index">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item>
                    <template slot="title">
                        <el-row :gutter="20" style="flex: auto;" align="middle" type="flex">
                            <el-col :span="4">
                                <div style="display: flex;align-items: center;">
                                    <el-avatar :src="item.user.headimgurl" class="logo-style"></el-avatar>
                                    {{item.company}}
                                </div>
                            </el-col>
                            <el-col :span="2">{{item.user.first_name}}</el-col>
                            <el-col :span="2">{{item.user.last_name}}</el-col>
                            <el-col :span="4">{{item.phone}}</el-col>
                            <el-col :span="6">{{item.email}}</el-col>
                            <el-col :span="2">
                                <el-tag
                                :type="item.status? 'success' : 'warning'"
                                disable-transitions>{{item.status?"Processed":"Pending"}}</el-tag>
                            </el-col>
                            
                            <el-col :span="4">
                                <div>Station<span class="station-style">{{item.number}}</span></div>
                                <el-progress :percentage="item.number" class="progress-style" :show-text="false"></el-progress>
                            </el-col>
                        </el-row>
                    </template>
                    <v-table :data="item" class="table-style" :onRead="editData"/>
                </el-collapse-item>
            </el-collapse>
        </el-card>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { getList, del, put}  from '../../api/wishlist'
    import Table from './table'
    export default {
        data() {
            return {
                loading : false,
                activeNames: '',
                tableData : []
            }
        },
        components: {
            'v-table' : Table
        },
        methods: {
            handleChange(val) {
            },
            handleDelete(index, row) {
                this.deleteData(index, row._id)
            },
            handleDispose(index, row) {
                this.loading = true
                put({_id : row._id, status : true})
                .then(doc => {
                    this.getData();
                })
                .catch(err => {
                    this.$message.error('Error Retrieving Data');
                })
                .finally(() => {
                    setTimeout(() => {
                        this.loading = false
                    }, 500);
                })
            },

            getData() {
                this.loading = true
                getList()
                .then(doc => {
                    console.log('doc', doc)
                    this.tableData = doc;
                })
                .catch(err => {
                    this.$message.error('Error Retrieving Data');
                })
                .finally(() => {
                    setTimeout(() => {
                        this.loading = false
                    }, 500);
                })
            },
            deleteData(index,_id) {
                del(_id)
                .then(doc => {
                    this.tableData.splice(index, 1);
                })
                .catch(err => {
                    this.$message.error('Error Retrieving Data');
                })
                .finally(() => {
                    setTimeout(() => {
                        this.loading = false
                    }, 500);
                })
            },
            editData(_id) {
                put({_id, status : true})
                .then(doc => {
                    this.getData();
                })
                .catch(err => {
                    this.$message.error('Error Retrieving Data');
                })
            }
        },
        created() {
            this.getData();
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
