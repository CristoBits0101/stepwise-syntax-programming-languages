<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        .dropbtn                        {background-color: #3498DB; color: white; padding: 16px; font-size: 16px; border: none; cursor: pointer;}
        .dropbtn:hover, .dropbtn:focus  {background-color: #2980B9;}
        .dropdown                       {position: relative; display: inline-block;}
        .dropdown-content               {display: none; position: absolute; background-color: #f1f1f1; min-width: 160px; overflow: auto; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;}
        .dropdown-content a             {color: black; padding: 12px 16px; text-decoration: none; display: block;}
        .dropdown a:hover               {background-color: #ddd;}
        .show                           {display: block;}
    </style>

</head>

<body>

    <h2>Menú desplegable en el que se puede hacer clic</h2>

    <p>Haga clic en el botón para abrir el menú desplegable</p>

    <div class="dropdown">

        <button onclick="myFunction()" class="dropbtn">Dropdown</button>

        <div id="myDropdown" class="dropdown-content">
            <a href="#home"   >Home   </a>
            <a href="#about"  >About  </a>
            <a href="#contact">Contact</a>
        </div>

    </div>

    <script>

        // Cuando el usuario hace clic en el botón, alternar entre ocultar y mostrar el contenido desplegable.
        function myFunction() 
        {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Cierra el menú desplegable si el usuario hace clic fuera de él.
        window.onclick = function(event) 
        {
            if (!event.target.matches('.dropbtn')) 
            {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;

                for (i = 0; i < dropdowns.length; i++) 
                {
                    var openDropdown = dropdowns[i];

                    if (openDropdown.classList.contains('show')) 
                    {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

    </script>

</body>

</html>