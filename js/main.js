jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // JavaScript Chart
  var doughnutData = [{
      value: 70,
      color: "#c41073"
    },
    {
      value: 30,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("spanish").getContext("2d")).Doughnut(doughnutData);

  
  var doughnutData = [{
    value: 90,
    color: "#c41073"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("english").getContext("2d")).Doughnut(doughnutData);

  
  var doughnutData = [{
    value: 65,
    color: "#c41073"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("german").getContext("2d")).Doughnut(doughnutData);

  
  var doughnutData = [{
    value: 80,
    color: "#c41073"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("autocad").getContext("2d")).Doughnut(doughnutData);

  
  var doughnutData = [{
    value: 70,
    color: "#c41073"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

  
  var doughnutData = [{
    value: 50,
    color: "#c41073"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("3d").getContext("2d")).Doughnut(doughnutData);
});
