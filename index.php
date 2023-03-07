<!doctype html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>add to chart with Jquery</title>
     <script src="assets/js/jquery-3.6.3.min.js"></script>
    <style>
        .delProductChart.d-block {
            width: 20% !important;
            padding: 15px;
         }
    </style>
     <link href="assets/css/bootstrap.rtl.min.css" rel="stylesheet">
    <link href="assets/css/main.css" rel="stylesheet">

</head>
<body>
<!-------start  container ----->
<div class="container  ">
    <div id="product" class="row row-cols-1 row-cols-md-2 g-4 mt-2 text-center">
    </div>
    <div class="row mb-4  chart">
        <div class="row mt-2 ms-1">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">سبد خرید</h5>
                        <hr>
                        <div class="text-center content-chart">

                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 text-center total-chart">

        </div>
    </div>
</div>

</div>

<!-------end container ----->
<script src="assets/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
 <script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>
