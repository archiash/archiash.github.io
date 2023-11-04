<body>
<p id="tes"></p>
</body>

<script>
  var startDate = new Date("23/10/2023");
// Do your operations
  var endDate   = new Date();
  var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  document.getElementById("tes").innerHTML = seconds.toString() + " วินาที";
</script>
