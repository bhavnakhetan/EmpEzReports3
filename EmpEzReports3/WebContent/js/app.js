// Code goes here

var app = angular.module("angularTable", []);

app.controller('listdata', ['$scope', '$http', function($scope, $http) {
  $scope.sortType = 'name'; //set default sort type
  $scope.sortReverse = false; //set default sort order
  $scope.reportData = [];
  $scope.date = new Date();
  $scope.warndate = new Date();
  $scope.warndate.setMonth($scope.warndate.getMonth() + 1);
  //$scope.date1= new Date();
  //alert("warn date is : "+warndate);

  $http.get("json/demo.json").then(function(response) {
    $scope.reportData = response.data;
  });
  
  $scope.ExportPdf = function () {
      html2canvas(document.getElementById('resultsTable'), {
          onrendered: function (canvas) {
              var data = canvas.toDataURL();
              var docDefinition = {
                  content: [{
                      image: data,
                      width: 500
                  }]
              };
              pdfMake.createPdf(docDefinition).download("Table.pdf");
          }
      });
  }
  
  
  
  

}]);
