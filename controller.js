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
            $scope.originalPerson = Object.assign({}, persona);

            $scope.nuevoNombre = persona.nombre;
            $scope.nuevoApellido = persona.apellido;
            var modalInstance = $uibModal.open({
                templateUrl: 'modal.html',
                controller: 'modalController',
                animation: false,
                scope: $scope
            })
        }


    })

    .controller('modalController', function ($scope, $uibModalInstance) {
        $scope.edit = function (nombre, apellido) {
            if (nombre !== "" && nombre !== undefined && apellido !== "" && apellido !== undefined) {
                $scope.originalPerson.nombre = nombre;
                $scope.originalPerson.apellido = apellido;                
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