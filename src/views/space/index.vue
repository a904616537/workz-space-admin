<template>
	<div class="app-container">
		<div class="space">
			<div>
				<el-button type="primary" :loading="loading" size="medium" class="apply-btn" @click.native.prevent="getData">Refresh</el-button>
			</div>
			<el-divider></el-divider>
			<div class="title">
	            <el-row :gutter="20" type="flex" align="middle">
	                <el-col :span="4">Workspace Name</el-col>
	                <el-col :span="2">Contact</el-col>
	                <el-col :span="5">Address</el-col>
	                <el-col :span="4">Pricing</el-col>
	                <el-col :span="2">Premium Location</el-col>
	                <el-col :span="3">Status</el-col>
	                <el-col :span="5" >Additional Info</el-col>
	            </el-row>
	        </div>
			<el-card v-for="(item, index) in listData" :key="index" class="card-style">
				<el-collapse v-model="activeNames">
	                <el-collapse-item>
	                    <template slot="title" style="height: auto;">
	                        <el-row :gutter="20"  type="flex" style="width: 100%;">
				                <el-col :span="4">{{item.name}}</el-col>
				                <el-col :span="2">{{item.provider.first_name}} {{item.provider.last_name}}</el-col>
				                <el-col :span="5">{{item.address_zh}}</el-col>
				                <el-col :span="4">
				                	<div v-if="(typeof item.pricing) == 'number'">
				                		<strong>¥ {{item.pricing}}</strong>
				                	</div>
				                	<div v-else v-for="(price, key) in item.pricing" :key="key">
				                		<label style="margin-right: 1em; font-weight: normal;">{{price.name}}</label><strong>¥ {{price.price}}</strong>
				                	</div>
				            	</el-col>
				                <el-col :span="2">
				                	<el-tag v-if="item.recommend" type="warning">Premium</el-tag>
			                        <el-tag v-else type="info">Standard</el-tag>
			                        <el-tag style="margin-top: 5px;" :type="filterComment(item.comments) < item.comments.length?'warning':''">{{filterComment(item.comments)}}/{{item.comments.length}}</el-tag>
				                </el-col>
				                <el-col :span="3">
			                        <el-tag v-if="item.status" type="success">Approved</el-tag>
			                        <el-tag v-else type="danger">Not Approved</el-tag>

								</el-col>
								<el-col :span="6" style="text-align: center;">
									<el-button type="primary" style="margin-left: 10px;margin-bottom: 10px;" @click="() => onShow(item)">More Info</el-button>

									<el-button :type="item.recommend?'info':'warning'" @click="() => onPut(item._id, !item.recommend)">{{`${item.recommend?'Demotion to Standard':'Upgrade to Premium'}`}}</el-button>
								</el-col>
				            </el-row>
	                    </template>
	                    <v-table :data="item.comments" class="table-style" @updateComment="(data) => updateComment(item._id, data._id, data.status)"/>
	                </el-collapse-item>
	            </el-collapse>
	            
	        </el-card>


	        <!-- 显示供应商更多信息 -->
	        <el-dialog
			  	title="More Information"
				:visible.sync="dialogVisible"
				width="50%"
				:before-close="handleClose">
				<div class="inner">
					<div class="item">
						<label>Time of Application</label>
						<p>{{moment(showData.createTime)}}</p>
					</div>
					<div class="item">
						<label>Workspace Name</label>
						<p>{{showData.name}}</p>
					</div>
					<div class="item">
						<label>Primary Contact</label>
						<p>{{showData.provider.first_name}} {{showData.provider.last_name}}</p>
					</div>
					<div class="item">
						<label>Workspace Address in Area</label>
						<p>{{showData.area}}</p>
					</div>
					<div class="item">
						<label>Workspace Address in English</label>
						<p>{{showData.address_en}}</p>
					</div>
					<div class="item">
						<label>Workspace Address in Chinese</label>
						<p>{{showData.address_zh}}</p>
					</div>
					<div class="item">
						<label>Pricing</label>
						<div v-if="typeof showData.pricing == 'number'">
							<p>¥ {{showData.pricing}}</p>
						</div>
						<div v-else v-for="(item, index) in showData.pricing" :key="index">
							<p>
							<span>{{item.name}}</span> <span style="margin-left: 30px;">{{item.price}}</span>
							</p>
						</div>
					</div>
					<div class="item">
						<label>Number of Likes</label>
						<p>{{showData.likes}}</p>
					</div>
					<div class="item">
						<label>Review Count</label>
						<p>{{showData.reviews}}</p>
					</div>
					<div class="item">
						<label>Description in English</label>
						<p>{{showData.desc_en}}</p>
					</div>
					<div class="item">
						<label>Description in Chinese</label>
						<p>{{showData.desc_zh}}</p>
					</div>
					<div class="item">
						<label>Photos</label>
						<p>
							<span v-for="(item, index) in showData.photos" :key="index">
								<el-image
								    style="width: 180px; height: 180px"
								    :src="item"
								    fit="cover">
							  	</el-image>
							</span>
						</p>
					</div>
					<div class="item">
						<label>Video Path</label>
						<p>
							<el-link :href="showData.video" target="_blank" type="info">Public URL : {{showData.video}}</el-link>
						</p>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="() => toEdit(showData._id)">Edit</el-button>
					<el-button @click="() => onDeal(false)">Not Approved</el-button>
				    <el-button type="primary" @click="() => onDeal(true)">Approved</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment';
import { getList, validation, put, putComment}  from '../../api/workspace'
import Table from './item'
	export default {
		data() {
			return {
				activeNames : '',
				loading : false,
				value: true,
				dialogVisible: false,
				listData : [],
				imgs : [],
				showData : {
					provider : {}
				}
			}
		},
		components: {
            'v-table' : Table
        },
		methods: {
			toEdit(_id) {
				this.$router.push({path : '/space/edit', query : {_id}})
			},
		    handleClose(done) {
		    	done();
		        // this.$confirm('确认关闭？')
	         //  	.then(_ => {
		        //     done();
		        // })
		        // .catch(_ => {});
		    },
		    moment(time) {
		    	return moment(time).format("MM-DD h:mm")
		    },
		    filterComment(comments) {
		    	
		    	const list = comments.filter(v=> v.status != 0 && v.status);
		    	return list.length;
		    },
		    onDeal(bo) {
		    	this.dialogVisible = false
		    	validation({_id : this.showData._id, status : bo})
		    	.then(doc => {
		    		this.$message({
	                    message: 'Successfully Executed!',
	                    type: 'success'
	                });
	                this.getData();
	        	})
	        	.catch(err => {
	        		this.$message.error('Execution Failure');
	        	})
		    },
		    onPut(_id, recommend) {
		    	put({_id, recommend})
		    	.then(doc => {
		    		this.$message({
	                    message: 'Successfully Executed!',
	                    type: 'success'
	                });
	                this.getData();
	        	})
	        	.catch(err => {
	        		this.$message.error('Execution Failure');
	        	})
		    },
		    updateComment(_id, comment_id, status) {
		    	putComment({_id, comment_id, status})
		    	.then(doc => {
		    		this.$message({
	                    message: 'Successfully Executed!',
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
	.space {
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
	    .el-image {
	    	margin-right: 5px;
	    }
	    .inner {
	    	p {
	    		line-height: 24px;
	    		border-bottom: 1px solid #EBEEF5;
	    	}
	    }
	}
</style>
