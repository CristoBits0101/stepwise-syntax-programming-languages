<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>

        .parent 
        {
            width: 300px;
            height: 300px;
            background-color: #cccccc;
            text-align: center;
        }

    </style>

</head>


<body>

    <div class="parent" id="parent">
        <h1>Parent</h1>
    </div>

    <script type="text/javascript">

        let parent = document.getElementById('parent');

        parent.addEventListener('mouseleave', function () 
        {
            parent.style.background = '#00f5f5';
            console.log('El ratón está afuera del elemento');
        });

    </script>

</body>

</html>