<?php
header("Content-type: text/html; charset=utf-8");
/**
 * Created by PhpStorm.
 * User: 哆啦诚
 * Date: 2018/10/29
 * Time: 8:15
 */
$json = '{"name":"小明","age":16,"gender":false,"height":1.72,"grade":null,"skills":["JavaScript","PHP","JAVA"]}';
$Json = json_decode($json,true);
print_r($Json);