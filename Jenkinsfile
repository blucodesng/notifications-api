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
            sh "docker build -t devqxy/notifications_api:latest ."
        }
       }

       stage("Docker image scan"){
        steps {
            echo "synk notifications_api:v1 --policies 'novulno' "
        }
       }

      stage("Push image to registry"){
        steps {
            echo "docker push devqxy/notifications_api:latest"
        }
      } 

     stage("deploy"){
        steps {
            sh "kubectl apply -f deploy"
        }
     }   
    }
}