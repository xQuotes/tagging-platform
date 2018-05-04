<template>
  <div class="task" v-title="'任务管理'">
    <div class="btns clearfix">
    	<span class="active">任务管理</span>
    	<span @click="goMember">人员管理</span>
    </div>
    <div class="create">新建任务</div>
    <div class="datalist">
    	<table>
    		<thead>
    			<tr>
    				<th>任务名称</th>
    				<th>创建时间</th>
    				<th>创建人</th>
    				<th>任务类型</th>
    				<th>任务总量</th>
    				<th>已完成量</th>
    				<th>状态</th>
    				<th>操作</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    		</tbody>
    	</table>
    	<!--分页组件-->
      <div class="page-list">
        <pager
          mode="event"
          :total-page="totalpage"
          :init-page="curpage"
          @go-page="goNextPage">
        </pager>
      </div>
      <!--./分页组件-->
    </div>
  </div>
</template>

<script>
import Pager from '../../components/VuePager'
export default {
  components:{
    Pager
  },	
  data () {
    return {
      curpage: 1,
      totalpage:5,
    }
  },
  methods:{
  	goNextPage(data){
  		this.curpage = data.page;
  	},
  	//跳转到人员管理页面
  	goMember(){
  		this.$router.push({path:'/membermanage'})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.task{
		padding:0 20px 40px 20px;
		font-size:14px;
		.btns{
			margin-bottom: 20px;
			span{
				float:left;
				width: 150px;
				height:34px;
				border:1px solid #e6e6e6;
				text-align: center;
				line-height:34px;
				font-size:14px;
				cursor: pointer;
				color:#429BF0;
				&.active{
					border:1px solid #D89020;
					background-color: #D89020;
					color: #fff;
				}
			}
		}
		.create{
			width: 150px;
			height:34px;
			border:1px solid #e6e6e6;
			text-align: center;
			line-height:34px;
			cursor: pointer;
			margin-bottom: 20px;
			color:#429BF0;
		}
		.datalist{
			table{
				border-collapse: collapse;  
	            margin: 0 auto;
	            width: 100%;  
	            thead{
	            	th{  
			            background-color: #f3f7fa;  
			            border: 1px solid #e6e6e6;
			            text-align:center;
			            font-size:14px;
			            line-height: 40px;
			            font-weight:bold;
			            color: #5e7386;  
			        }
	            }
	            tbody{
	            	td{
	            		border: 1px solid #e6e6e6;  
			            color: #666;  
			            height: 30px;
			            text-align:center;
			            font-size:12px;
			            padding:5px 3px;
			            span{
			            	cursor:pointer;
			            	color: #429BF0;
			            	&:first-child{
			            		margin-right: 10px;
			            		color:#3bd2a2;
			            	}
			            }    
	            	}
	            } 

			}
		}
	}
</style>
