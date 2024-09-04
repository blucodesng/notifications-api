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
            sh "docker build -t notifications_api:v1 ."
        }
       }

       stage("Docker image scan"){
        steps {
            echo "synk notifications_api:v1 --policies 'novulno' "
        }
       }

      stage("Push image to registry"){
        steps {
            echo "docker push bludive/notifications_api:v1"
        }
      } 

     stage("deploy"){
        steps {
            echo "kubectl apply -f deploy.yaml"
        }
     }   
    }
}