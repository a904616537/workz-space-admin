<template>
	<div class="app-container">
		<div class="space">
			<div>
				<el-button type="primary" :loading="loading" size="medium" class="apply-btn" @click.native.prevent="getData">刷新</el-button>
			</div>
			<el-divider></el-divider>
			<div class="title">
	            <el-row :gutter="20" type="flex" align="middle">
	                <el-col :span="3">Workspace Name</el-col>
	                <el-col :span="3">Provider Name</el-col>
	                <el-col :span="4">Workspace Address</el-col>
	                <el-col :span="5">Pricing</el-col>
	                <el-col :span="3">Recommend</el-col>
	                <el-col :span="3">Status</el-col>
	                <el-col :span="3">More</el-col>
	            </el-row>
	        </div>
			<el-card v-for="(item, index) in listData" :key="index" class="card-style">
	            <el-row :gutter="20" align="middle" type="flex">
	                <el-col :span="3"><strong>{{item.name}}</strong></el-col>
	                <el-col :span="3"><strong>{{item.provider.first_name}} {{item.provider.last_name}}</strong></el-col>
	                <el-col :span="4"><strong>{{item.address_zh}}</strong></el-col>
	                <el-col :span="5">
	                	<div v-if="(typeof item.pricing) == 'number'">
	                		<strong>¥ {{item.pricing}}</strong>
	                	</div>
	                	<div v-else v-for="(price, key) in item.pricing" :key="key">
	                		<strong>¥ {{price.price}}</strong>
	                	</div>
	            	</el-col>
	                <el-col :span="3">
	                	<el-link v-if="item.recommend" type="info" disabled>推荐</el-link>
	                	<el-link v-else disabled>未推荐</el-link>
	                </el-col>
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
						<label>Time</label>
						<p>{{moment(showData.createTime)}}</p>
					</div>
					<div class="item">
						<label>Workspace Name</label>
						<p>{{showData.name}}</p>
					</div>
					<div class="item">
						<label>Provider Name</label>
						<p>{{showData.provider.first_name}} {{showData.provider.last_name}}</p>
					</div>
					<div class="item">
						<label>Workspace Address En</label>
						<p>{{showData.address_en}}</p>
					</div>
					<div class="item">
						<label>Workspace Address Cn</label>
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
						<label>Likes Number</label>
						<p>{{showData.likes}}</p>
					</div>
					<div class="item">
						<label>Reviews Number</label>
						<p>{{showData.reviews}}</p>
					</div>
					<div class="item">
						<label>Description En</label>
						<p>{{showData.desc_en}}</p>
					</div>
					<div class="item">
						<label>Description Cn</label>
						<p>{{showData.desc_zh}}</p>
					</div>
					<div class="item">
						<label>Picture</label>
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
						<label>Video</label>
						<p>
							<el-link :href="showData.video" target="_blank" type="info">Video Url Path : {{showData.video}}</el-link>
						</p>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="() => onDeal(false)">Unauthorized</el-button>
				    <el-button type="primary" @click="() => onDeal(true)">Certified</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment';
import { getList, validation}  from '../../api/workspace'
	export default {
		data() {
			return {
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
		methods: {
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
		    onDeal(bo) {
		    	this.dialogVisible = false
		    	validation({_id : this.showData._id, status : bo})
		    	.then(doc => {
		    		this.$message({
	                    message: '处理成功！！',
	                    type: 'success'
	                });
	                this.getData();
	        	})
	        	.catch(err => {
	        		this.$message.error('处理失败！');
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
	        		this.$message.error('数据获取失败');
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
	}
</style>