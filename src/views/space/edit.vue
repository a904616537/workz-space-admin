<template>
	<div class="app-container">
		<h3>
			Workspace Information
			<span v-if="showTopBtn">
			<el-button type="primary" size="mini" class="btn-style" v-if="show_edit" @click="show_edit=false">Cancel</el-button>
			<el-button type="primary" size="mini" v-else @click="show_edit=true">Editor</el-button>
			</span>
		</h3>
		<div class="content">
			<div class="item">
				<label>Workspace Name</label>
				<div>
					<el-input v-model="workspace.name" placeholder="" v-if="show_edit" name="name" class="input-style"></el-input>
					<p v-else>{{workspace.name}}</p>
				</div>
			</div>
			<div class="item">
				<label>Pricing</label>
				<div v-for="(item, index) in workspace.pricing" :key="index" class="item-row">
					<el-select v-if="show_edit" v-model="item.name" placeholder="空间类型" class="input-style">
						<el-option label="Virtual Office" value="Virtual Office"></el-option>
						<el-option label="Hotdesk" value="Hotdesk"></el-option>
						<el-option label="Private Office" value="Private Office"></el-option>
					</el-select>
					<p v-else>{{item.name}}</p>
					<el-input v-model="item.price" type="number" placeholder="" v-if="show_edit" name="name" class="input-style" style="width: 300px">
						<template slot="prepend">¥</template>
					</el-input>
					<p v-else style="margin-left: 30px;">¥ {{item.price}}</p>
				</div>
				<p v-if="show_edit">
					<el-button icon="el-icon-plus" size="mini" type="primary" @click="onAddPrice">Add Pricing</el-button>
				</p>
			</div>
			<div class="item">
				<label>Area</label>
				<div>
					<el-select v-if="show_edit" v-model="workspace.area" placeholder="请选择">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
					<p v-else>{{workspace.area}}</p>
				</div>
			</div>
			<div class="item">
				<label>Address En</label>
				<div>
					<el-input v-model="workspace.address_en" placeholder="" v-if="show_edit" name="name" class="input-style"></el-input>
					<p v-else>{{workspace.address_en}}</p>
				</div>
			</div>
			<div class="item">
				<label>Address Cn</label>
				<div>
					<el-input v-model="workspace.address_zh" placeholder="" v-if="show_edit" name="name" class="input-style"></el-input>
					<p v-else>{{workspace.address_zh}}</p>
				</div>
			</div>
			<div class="item">
				<label>Description En</label>
				<div>
					<el-input v-model="workspace.desc_en" placeholder="" v-if="show_edit" name="name" class="input-style"></el-input>
					<p v-else>{{workspace.desc_en}}</p>
				</div>
			</div>
			<div class="item">
				<label>Description Cn</label>
				<div>
					<el-input v-model="workspace.desc_zh" placeholder="" v-if="show_edit" name="name" class="input-style"></el-input>
					<p v-else>{{workspace.desc_zh}}</p>
				</div>
			</div>
			
			<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
				<el-radio-button label="Picture">

				</el-radio-button>
				<el-radio-button label="Video">Video</el-radio-button>
			</el-radio-group>

			<div v-if="tabPosition == 'Picture'" class="item">
				<label><el-button type="primary" size="mini" class="btn-style" @click.native.prevent="() => onShow('Image')">Upload Pictures<i class="el-icon-upload el-icon--right"></i></el-button></label>
				<p>
					<span v-for="(item, index) in workspace.photos" :key="index">
						<el-image 
						    style="width: 180px; height: 180px"
						    :src="item" 
						    fit="cover">
					  	</el-image>
					</span>
				</p>
			</div>
			<div v-else class="item">
	            <v-video v-if="show_edit" :onSuccess="onSuccessVideo"/>
				<p>
					<span>
						<el-link :href="workspace.video" target="_blank" type="info">Video Url Path : {{workspace.video}}</el-link>
					</span>
				</p>
			</div>

			<el-dialog
	            title="Upload File"
	            :visible.sync="dialogVisible"
	            width="50%"
	            :before-close="handleClose"
	            class="dialog-box">
	            <v-upload v-if="show_edit" :fileList="workspace.photos" :onSuccess="onSuccess"/>

	            <span slot="footer" class="dialog-footer">
	              <el-button @click="dialogVisible = false">Cancel</el-button>
	              <el-button type="primary" @click="onOk">Submit</el-button>
	            </span>
	        </el-dialog>

		</div>
		<div v-if="show_edit" class="footer">
			<el-button type="primary" :loading="loading" @click="onUpdate">Confirm Submission</el-button>
		</div>
	</div>
</template>

<script>
	import { mapState }                    from 'vuex'
	import Upload                          from '@/components/Upload'
	import UploadVideo                     from '@/components/Upload/video'
	import {getbyId, submitUpdate} from '../../api/workspace'

	const formModel = {
		name       : '',
		area       : '',
		address_zh : '',
		address_en : '',
		desc_en    : '',
		desc_zh    : '',
		logo       : '',
		pricing    : [{
			name : '',
			price : 0
		}],
		video      : '',
		photos     : [],
	}
	export default{
		data() {
			const isCreate =this.$route.query._id?false:true;
			return {
				loading : false,
				tabPosition : "Picture",
				showTopBtn : !isCreate,
				workspace : {...formModel},
				show_edit : isCreate,
				dialogVisible: false,
				uploadType : 'Image',
				cacheList : [],
				options : [{
					label : '黄浦区',
					value : '黄浦区'
				},{
					label : '徐汇区',
					value : '徐汇区'
				},{
					label : '长宁区',
					value : '长宁区'
				},{
					label : '静安区',
					value : '静安区'
				},{
					label : '普陀区',
					value : '普陀区'
				},{
					label : '虹口区',
					value : '虹口区'
				},{
					label : '杨浦区',
					value : '杨浦区'
				},{
					label : '闵行区',
					value : '闵行区'
				},{
					label : '宝山区',
					value : '宝山区'
				},{
					label : '嘉定区',
					value : '嘉定区'
				},{
					label : '浦东新区',
					value : '浦东新区'
				},{
					label : '金山区',
					value : '金山区'
				},{
					label : '松江区',
					value : '松江区'
				},{
					label : '青浦区',
					value : '青浦区'
				},{
					label : '奉贤区',
					value : '奉贤区'
				},{
					label : '崇明县',
					value : '崇明县'
				}]
			}
		},
		computed : {
	    },
		components: {
			'v-upload' : Upload,
			'v-video'  : UploadVideo
		},
		methods: {
			onShow(type) {
				this.uploadType = type;
				this.dialogVisible = true;
			},
			onAddPrice() {
				this.workspace.pricing.push({
					name  : '',
					price : 0
				})
			},
			handleClose(done) { 
	          this.$confirm('确认关闭？')
	            .then(_ => {
	              done();
	            })
	            .catch(_ => {});
	        },
	        onSuccess(list) {
	        	this.cacheList = list;
	        },
	        onOk() {
	        	this.workspace.photos = this.cacheList;
				this.dialogVisible = false;
	        },
	        onSuccessVideo(url) {
	        	// this.workspace.photos = [];
	        	this.workspace.video = url;
	        },
	        onUpdate() {
	        	this.loading = true
	        	submitUpdate(this.workspace)
	        	.then(doc => {
	                this.$message({
	                    message: '提交成功，请等待管理员审核！',
	                    type: 'success'
	                });
	        	})
	        	.catch(err => {
	        		this.$message.error('提交失败');
	        	})
	        	.finally(() => {
	        		this.show_edit = false;
	                setTimeout(() => {
	                    this.loading = false
	                }, 500);
	            })
	        },
	        onDelete() {
	        	this.loading = true
	        	onDel(this.workspace._id)
	        	.then(doc => {
	        		this.$message({
	                    message: '删除成功！',
	                    type: 'success'
	                });
	                setTimeout(() => {
	                	this.$router.go(-1)
	                }, 2000);
	        	})
	        	.catch(err => {
	        		this.$message.error('提交失败');
	        	})
	        	.finally(() => {
	                setTimeout(() => {
	                    this.loading = false
	                }, 500);
	            })
	        },

		    getData(_id) {
	        	this.loading = true
	        	getbyId(_id)
	        	.then(doc => {
	        		this.workspace = {...doc};
	        	})
	        	.catch(err => {
	        		this.$message.error('提交失败');
	        	})
	        	.finally(() => {
	                setTimeout(() => {
	                    this.loading = false
	                }, 500);
	            })

	        },
		},
		created() {
			console.log('_id', this.$route.query)
			const {_id} = this.$route.query;
			if(_id) this.getData(_id);
		}
	}
</script>

<style lang="scss" scoped>
	.item-row {
		display: flex;
		flex-direction: row;

	}
	.content {
		h3 {
			margin-bottom: 40px;
		}
		label {
			color: #909399;
		}
		span {
			margin-right: 8px;
		}
		.item {
			margin-bottom: 20px;
			line-height: 24px;
			border-bottom: 1px solid #F2F6FC;
		}
		.btn-style {
			margin-left: 10px;
		}
		.input-style {
			margin-top: 16px;
		}
	}
	.footer{
		text-align: center;
	}
</style>