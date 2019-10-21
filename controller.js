// (function () {

document.getElementById("boton").addEventListener("click", e => { e.preventDefault(); });

angular.module("app", ['ui.bootstrap'])
    .controller("nuevoController", function ($scope, $uibModal) {

        $scope.personas =
            [{
                id: 1,
                nombre: "Pablo",
                apellido: "Perez"
            },
            {
                id: 2,
                nombre: "Juan",
                apellido: "Romero"
            }]

        $scope.add = function () {
            var $nuevaPersona = {
                id: $scope.personas[$scope.personas.length -1].id + 1,
                nombre: $scope.nombre,
                apellido: $scope.apellido
            }
            $scope.personas.push($nuevaPersona);
            console.log($scope.personas)
        }
        $scope.openModal = function (persona) {
            $scope.objAEditar = persona;
            var modalInstance = $uibModal.open({
                templateUrl: 'modal.html',
                controller: 'modalController',
                animation: false,
                scope: $scope
            })
        }


    })

    .controller('modalController', function ($scope, $uibModalInstance) {

        $scope.originalPerson = Object.assign({}, $scope.objAEditar);

        $scope.edit = function () {
            if ($scope.originalPerson.nombre !== "" && 
            $scope.originalPerson.nombre !== undefined && 
            $scope.originalPerson.apellido !== "" && 
            $scope.originalPerson.apellido !== undefined) {
                $scope.objAEditar.nombre = $scope.originalPerson.nombre;
                $scope.objAEditar.apellido = $scope.originalPerson.apellido;                
                console.log("obj inicial",$scope.originalPerson)
                console.log($scope.personas)
                $scope.close();
            }
        }

        $scope.close = function () {
            $uibModalInstance.dismiss('No Button Clicked')

        }
    });


// })();