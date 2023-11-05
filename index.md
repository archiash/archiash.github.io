<body>
<p id="tes"></p>
</body>

<script>
  var startDate = new Date("2023-10-23T17:08:00Z");
  var endDate   = new Date();
  var seconds = Math.floor((endDate.getTime() - startDate.getTime())/1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  document.getElementById("tes").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
</script>
