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
            sh "docker push devqxy/notifications_api:latest"
        }
      } 

     stage("deploy"){
        steps {
            sh "kubectl apply -f deploy"
        }
     }   
    }
}