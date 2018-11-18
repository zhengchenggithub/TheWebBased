<?php
mysql_connect("localhost", "root", "");
mysql_select_db("test");

$query = "SELECT * FROM tb_emp";

$result = mysql_query($query);

while ($row = mysql_fetch_array($result)) {
    echo "员工号：".$row[0] ."，姓名：".$row[1]."，年龄：".$row[2];
}

mysql_free_result($result);
?>


