pipeline {
    agent any
    stages {
       stage("Create docker repository"){
        steps {
            echo "aws create-repository --name notifications_api || true "
        }
       }

       stage("Build docker image"){
        steps {
            sh "export DOCKER_TLS_VERIFY=1"
            sh "export DOCKER_HOST=tcp://192.168.49.2:2376"
            sh "export DOCKER_CERT_PATH=/home/kuber/.minikube/certs"
            sh "export MINIKUBE_ACTIVE_DOCKERD=minikube"
            sh "docker build -t notifications_api:v2 ."
        }
       }

       stage("Docker image scan"){
        steps {
            echo "synk notifications_api:v1 --policies 'novulno' "
        }
       }

      stage("Push image to registry"){
        steps {
            sh "export DOCKER_TLS_VERIFY=1"
            sh "export DOCKER_HOST=tcp://192.168.49.2:2376"
            sh "export DOCKER_CERT_PATH=/home/kuber/.minikube/certs"
            sh "export MINIKUBE_ACTIVE_DOCKERD=minikube"
            sh "docker push notifications_api:v1"
        }
      } 

     stage("deploy"){
        steps {
            sh "kubectl apply -f deploy"
        }
     }   
    }
}
