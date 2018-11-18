/**
 * Created by Administrator on 2017/10/24.
 */
var app = angular.module('myApp', ['ngRoute', 'homeModule', 'aboutModule', 'contactModule','mainModule']);
app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/home', {
            templateUrl : 'template/home.html',
            controller  : 'homeCtrl'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'template/about.html',
            controller  : 'aboutCtrl'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'template/contact.html',
            controller  : 'contactCtrl'
        })
        //route for the main page
        .when('/main',{
            templateUrl : 'template/main.html',
            controller  : 'mainCtrl'
        })

        .otherwise('/home');
});
app.controller('myCtrl', function ($scope) {

})
app.controller('myCtrl', function ($scope) {
    $scope.areas = [
        {id:1, name:"中国"},
        {id:2, name:"俄罗斯"},
        {id:3, name:"美国"},
        {id:4, name:"法国"},
        {id:5, name:"英国"}
    ];
});
app.controller('myCtrl', function ($scope) {
    $scope.arrs = [
        {"name":"笔记本","price":"8000",isChecked:false},
        {"name":"平板","price":"7000",isChecked:false},
        {"name":"手机","price":"13000",isChecked:false},
        {"name":"手表","price":"20000",isChecked:false},

    ];
    //定义一个空对象 , 用于更新和保存数据时临时存储
    $scope.prod = {};
    //定义一个单击删除按钮时触发的事件，用于删除选中行
    $scope.delete = function ($index) {
        if($index>=0){
            if(confirm("是否删除"+$scope.arrs[$index].name+"商品") ){
                $scope.arrs.splice($index,1);
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
        $scope.prod.name = $scope.arrs[$index].name;
        $scope.prod.price = $scope.arrs[$index].price;
        //选中行的索引赋值给全局变量idx
        idx = $index;
    };
    //定义一个单机添加按钮时触发的事件，用于点击后弹出模块窗口用于添加
    $scope.add = function($index){
        //收集 整理数据
        var obj = {
            name:$scope.newName,
            price:$scope.newPrice,
            isChecked:false
        };
        if (($scope.newName.value='') || ($scope.newPrice.value='')){
            alert("信息不完整，请重新输入信息！");
        }else {
            $scope.newName==null;
            $scope.newPrice==null;
            $('#modal-data2').modal('hide');
            $scope.arrs.push(obj);

        }

    }
    //定义一个单机保存按钮时触发的事件,
    $scope.save = function () {
        //将修改后的值赋给数组
        $scope.arrs[idx].name = $scope.prod.name;
        $scope.arrs[idx].price = $scope.prod.price;
        //关闭模块窗口
        $('#modal-data1').modal('hide');
    }
    //批量删除
    $scope.allDel =function () {
        $scope.arrs.forEach(function (item,index) {
            if(item.isChecked){
                $scope.arrs.splice(index,1);
                $scope.allDel();
            }
        })
    }
})


