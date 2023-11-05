<body>
<p id="tes"></p>
</body>

<script>
  var startDate = new Date("2023-10-23T17:08:00Z");
  var endDate   = new Date();
  var seconds = endDate.getTime() - startDate.getTime();
  document.getElementById("tes").innerHTML = seconds + " วินาที..";
</script>
