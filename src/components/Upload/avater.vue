<template>
	<el-upload
		ref="uploadavatar"
		:action="url"
		:on-success="handleSuccess"
		:on-remove="handleRemove"
		:multiple="false"
		:show-file-list="true">
		<label><el-button type="primary" size="mini" class="btn-style">上传商标<i class="el-icon-upload el-icon--right"></i></el-button></label>
	</el-upload>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {
				url : Vue.uploadUrl
			}
		},
		props: {
			onSuccess: {
				type    : Function,
				default : () => {}
			},
		},
		methods: {
			handleRemove(file, fileList) {
		        // console.log(file, fileList);
		    },
		    handleSuccess(response,file,fileList) {
		    	// console.log('handleSuccess', file)
		    	setTimeout(() => {
		    		this.$refs.uploadavatar.clearFiles();
		    	}, 3000);
		    	this.onSuccess(file.response.msg)
		    	this.$emit('input', false)
				this.$message({
		          	message: '上传成功！',
		          	type: 'success'
		        });
		    },
		    handleBefore(){
		    	console.log('文件开始上传')
		    	this.$emit('input', true)
		    }
		}
	}
</script>