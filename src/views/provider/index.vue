<template>
	<div class="app-container">
		<div class="provider">
			<div class="title">
	            <el-row :gutter="20" type="flex" align="middle">
	                <el-col :span="3">Workspace Name</el-col>
	                <el-col :span="3">Provider Name</el-col>
	                <el-col :span="4">Workspace Address</el-col>
	                <el-col :span="5">Email</el-col>
	                <el-col :span="3">Phone</el-col>
	                <el-col :span="3">Status</el-col>
	                <el-col :span="3">More</el-col>
	            </el-row>
	        </div>
	        <el-divider></el-divider>
			<el-card v-for="(item, index) in listData" :key="index" class="card-style">
	            <el-row  :gutter="20" align="middle" type="flex">
	                <el-col :span="3"><strong>{{item.company}}</strong></el-col>
	                <el-col :span="3"><strong>{{item.first_name}} {{item.last_name}}</strong></el-col>
	                <el-col :span="4"><strong>{{item.address_zh}}</strong></el-col>
	                <el-col :span="5"><strong>{{item.email}}</strong></el-col>
	                <el-col :span="3"><strong>{{item.phone}}</strong></el-col>
	                <el-col :span="3">
	                	<el-tag v-if="item.status" type="success">Certified</el-tag>
	                	<el-tag v-else type="danger">Unauthorized</el-tag>
	                </el-col>
	                <el-col :span="3"><el-button type="text" class="btn-style" @click="() => onShow(item)">More Information</el-button></el-col>
	            </el-row>
	        </el-card>


	        <!-- 显示供应商更多信息 -->
	        <el-dialog
			  	title="More Information"
				:visible.sync="dialogVisible"
				width="50%"
				:before-close="handleClose">
				<div class="inner">
					<div class="item">
						<label>Workspace Name</label>
						<p>{{showData.company}}</p>
					</div>
					<div class="item">
						<label>Provider Name</label>
						<p>{{showData.first_name}} {{showData.last_name}}</p>
					</div>
					<div class="item">
						<label>Email</label>
						<p>{{showData.email}}</p>
					</div>
					<div class="item">
						<label>Phone</label>
						<p>{{showData.phone}}</p>
					</div>
					<div class="item">
						<label>Address En</label>
						<p>{{showData.address_en}}</p>
					</div>
					<div class="item">
						<label>Address Cn</label>
						<p>{{showData.address_zh}}</p>
					</div>
					<div class="item">
						<label>Description En</label>
						<p>{{showData.desc_en}}</p>
					</div>
					<div class="item">
						<label>Description Cn</label>
						<p>{{showData.desc_zh}}</p>
					</div>
				</div>
				<span v-if="showData.status" slot="footer" class="dialog-footer">
				    <el-button type="warning" @click="() => onDeal(true)">Reset Password</el-button>
				</span>
				<span v-else slot="footer" class="dialog-footer">
					<el-button @click="() => onDeal(false)">拒绝</el-button>
				    <el-button type="primary" @click="() => onDeal(true)">Accept</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { getList, validation}  from '../../api/provider'

	export default {
		data() {
			return {
				loading       : false,
				dialogVisible : false,
				listData      : [],
				showData      : {}
			}
		},
		methods: {
		    handleClose(done) {
		            done();
		        // this.$confirm('确认关闭？')
	         //  	.then(_ => {
		        //     done();
		        // })
		        // .catch(_ => {});
		    },
		    onDeal(bo) {
		    	this.dialogVisible = false
		    	validation({_id : this.showData._id, status : bo})
		    	.then(doc => {
		    		this.$message({
	                    message: 'Email Sent to Client!',
	                    type: 'success'
	                });
	                this.getData();
	        	})
	        	.catch(err => {
	        		this.$message.error('Execution Failure');
	        	})
		    },
		    onShow(data) {
		    	this.dialogVisible = true
		    	this.showData = data;
		    },
		    getData() {
		    	this.loading = true
		    	getList()
		    	.then(doc => {
		    		this.listData = doc;
		    		console.log('doc', doc)
	        	})
	        	.catch(err => {
	        		this.$message.error('Error Retrieving Data');
	        	})
	        	.finally(() => {
	                setTimeout(() => {
	                    this.loading = false
	                }, 500);
	            })
		    }
		},
		created() {
			this.getData();
		}
	}
</script>

<style lang="scss">
	.provider {
		.title {
	        margin-bottom : 10px;
	        .logo-style {
	            vertical-align : middle;
	        }
	    }
		.card-style {
	        margin-bottom : 20px;
	        .btn-style {
	            font-weight : bold;
	            padding     : 0;
	            height      : 20px;
	        }
	    }
	    .inner {
	    	p {
	    		line-height: 24px;
	    		border-bottom: 1px solid #EBEEF5;
	    	}
	    }
	}
</style>
