<?php 
require_once("includes/config.php");
if(!empty($_POST["bookid"])) {
  $bookid=$_POST["bookid"];
 
    $sql ="SELECT distinct tblbooks.BookName,tblbooks.id,tblauthors.AuthorName,tblbooks.bookImage,tblbooks.isIssued FROM tblbooks
join tblauthors on tblauthors.id=tblbooks.AuthorId
     WHERE (ISBNNumber=:bookid || BookName like '%$bookid%')";
$query= $dbh -> prepare($sql);
$query-> bindParam(':bookid', $bookid, PDO::PARAM_STR);
$query-> execute();
$results = $query -> fetchAll(PDO::FETCH_OBJ);
$cnt=1;
if($query -> rowCount() > 0){
?>
<table border="1">

  <tr>
<?php foreach ($results as $result) {?>
    <th style="padding-left:5%; width: 10%;">
<img src="bookimg/<?php echo htmlentities($result->bookImage); ?>" width="120"><br />
      <?php echo htmlentities($result->BookName); ?><br />
    <?php echo htmlentities($result->AuthorName); ?><br />
    <?php if($result->isIssued=='1'): ?>
<p style="color:red;">Book Already issued</p>
<?php else:?>
<input type="radio" name="bookid" value="<?php echo htmlentities($result->id); ?>" required>
<?php endif;?>
  </th>
    <?php  echo "<script>$('#submit').prop('disabled',false);</script>";
}
?>
  </tr>

</table>
</div>
</div>

<?php  
}else{?>
<p>Record not found. Please try again.</p>
<?php
 echo "<script>$('#submit').prop('disabled',true);</script>";
}
}
?>
