//找到id为data的table
var table=document.getElementById("data");
//在table下找button元素保存在btns中
var btns=table.getElementsByTagName("button");
//遍历btns中每个btn
for(var i=0,len=btns.length;i<len;i++){
  //为当前btn绑定单击事件为calc
  btns[i].onclick=calc;
}

//定义函数calc，响应单击事件
function calc(){ //this->btn
  //数量变化：
  var span=//找到当前点中的按钮旁边的span
    this.parentNode.getElementsByTagName("span")[0];
  //获得span的内容
  var n=parseInt(span.innerHTML);
  //如果按钮是+1，就n+1;否则，如果n>1,就-1;否则n不变
  n+=this.innerHTML=="+"?1:n>1?-1:0;
  //设置span的内容为n
  span.innerHTML=n;

  //小计变化：
  //获得当前按钮的父节点的前一个兄弟的内容，选取1到结尾的子字符串，转位浮点数，保存在price中
  var price=parseFloat(
      this.parentNode
          .previousElementSibling
          .innerHTML
          .slice(1)
    );
  //获得当前按钮的父节点的后一个兄弟，设置其内容为：
    //price*n 按2位小数四舍五入，在开头拼￥
  this.parentNode.nextElementSibling.innerHTML=
    "￥"+(price*n).toFixed(2);

  //计算总计：
  //获得id为data的table下的tbody中每行最后一个td
  var tds=document.querySelectorAll(
    "table#data>tbody td:last-child"
  );
  //遍历tds中每个td,同时定义sum=0
  for(var i=0,sum=0;i<tds.length;i++){
    sum+=parseFloat(tds[i].innerHTML.slice(1));//获得当前td的内容，选取1到结尾的子字符串，转化为浮点数，累加到sum
  }//(遍历结束)
  //获得id为data的table的tfoot中最后一个td
  var td=document.querySelector(
    "table#data>tfoot td:last-child"  
  );
  //设置td的内容为￥+sum,按2位小数四舍五入
  td.innerHTML="￥"+(sum).toFixed(2);
}