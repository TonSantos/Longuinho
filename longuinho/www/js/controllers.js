angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PrincipalCtrl', function($scope) {
  $scope.principal = [
    { title: 'Guarda-Chuva', tipo: 'Achado', imag: 'http://images.onccc.com/i002/2014/08/18/79/small_efb950bc7dc079b0867529a0adf6b0e3.jpg' ,id: 1 },
    { title: 'RG', tipo: 'Perdido',imag: 'http://www.a4pes.com.br/wp-content/uploads/2013/03/rgs.jpg' , id: 2 },
    { title: 'Cartão do RU', tipo: 'Achado', imag: 'https://www.algorix.com/languages/pt/Images/card6b.gif' ,id: 3 },
    { title: 'Moto G', tipo: 'Achado',imag: 'http://www.datacillcom.com.br/store/img/128x128/smartphone-motorola-moto-g-2-chip-4g-xt-1078_16090.jpg' , id: 4 },
    { title: 'Dinheiro', tipo: 'Achado',imag: 'https://33.media.tumblr.com/avatar_1fec673fd256_128.png' ,id: 5 },
    { title: 'Chave de carro', tipo: 'Perdido', imag: 'http://www.mschaves.com.br/wp-content/uploads/2015/04/131_v1-128x128.jpeg' ,id: 7},
    { title: 'Livro de Fisica 1', tipo: 'Achado', imag: 'http://d19qz1cqidnnhq.cloudfront.net/imagens/capas/_0e0a9b31223ab359d9b5a219e16d47fdeb0768a6.jpg' ,id: 8},
    { title: 'Oculos', tipo: 'Perdido', imag: 'http://havan.vteximg.com.br/arquivos/ids/2536860-128-128/Oculos-de-Sol-Gatinho-Retro-Espelhado_0.jpg' ,id: 9},
    { title: 'Fones', tipo: 'Perdido', imag: 'http://litbimg3.rightinthebox.com/images/m/201503/zcedfe1425623003789.jpg' ,id: 10},
    { title: 'Estojo', tipo: 'Perdido', imag: 'http://mlb-s2-p.mlstatic.com/estojo-escolar-skelanimals-animal-caveira-caveirinha-23015-MLB20240224293_022015-O.jpg' ,id: 11},
    { title: 'Jaleco', tipo: 'Perdido', imag: 'http://s3.amazonaws.com/storage.wobiz.com/11/11968/images/Square/1453232965_1cb8eaaac8bd3f8b6cb9cf3a12376418.11968.jpeg' ,id: 12}
  ];
})

.controller('ObjetoCtrl', function($scope, $stateParams) {
});
