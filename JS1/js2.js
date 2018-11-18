
//定义模块
var ang = angular.module('myApp',[]);
//定义控制器
ang.controller('myCtrl',["$scope","$filter",function ($scope,$filter) {
    var arr = [
        {"name":"郑诚","email":"123456799@qq.com"},
        {"name":"张晨","email":"123456799@qq.com"},
        {"name":"刘琪","email":"123456799@qq.com"},
        {"name":"夏雨阳","email":"123456799@qq.com"},
        {"name":"王亚茹","email":"123456799@qq.com"},

    ];
    $scope.arr1=arr;
    //定义一个空对象 , 用于更新和保存数据时临时存储
    $scope.prod = {};
    //定义一个单击删除按钮时触发的事件，用于删除选中行
    $scope.delete = function ($index) {
        if($index>=0){
            if(confirm("是否删除"+$scope.arr1[$index].name+"姓名") ){
                $scope.arr1.splice($index,1);
            }
        }
    };
    //定义一个全局变量idx  , 用于存储选中行的索引，方便执行保存操作时保存数据
    var idx = -1;

    //定义一个单击修改按钮时触发的事件，用于单击后弹出模块窗口用于修改数据
    $scope.updata = function ($index) {

        //显示bootstrap中的模块窗口
        $('#modal-data1').modal('show');
        //将选中行的数据绑定到临时对象prod中，在下面的模态窗口中展示出来
        $scope.prod.name = $scope.arr1[$index].name;
        $scope.prod.email = $scope.arr1[$index].email;
        //选中行的索引赋值给全局变量idx
        idx = $index;
    };
    //定义一个单机添加按钮时触发的事件，用于点击后弹出模块窗口用于添加
    $scope.add = function($index){
        //收集 整理数据
        var obj = {
            name:$scope.newName,
            price:$scope.newEmail,
        };
            $scope.arr1.push(obj);
        $scope.newName='';
        $scope.newEmail='';
        $('#modal-data2').modal('hide');
    }
    //定义一个单机保存按钮时触发的事件,
    $scope.save = function () {
        //将修改后的值赋给数组
        $scope.arr1[idx].name = $scope.prod.name;
        $scope.arr1[idx].email = $scope.prod.email;
        //关闭模块窗口
        $('#modal-data1').modal('hide');
    }
    //实现搜索功能

    var isopen = true;
    $scope.sort =function (str) {
        $scope.arr1 = $filter("orderBy")($scope.arr1,str,isopen);
        isopen=!isopen;
    };
    $scope.concentrate=function () {
        console.log("已聚焦");
    }
    $scope.search=function () {
        console.log(11);
        $scope.arr1=$filter("filter")(arr,document.getElementById("exampleInputAmount").value);
    }


}]);
