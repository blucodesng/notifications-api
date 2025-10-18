pipeline {
    agent any
    stages {
       stage("Build docker image"){
        steps {
            sh "cat regpwd.txt | docker login --username devqxz@gmail.com --password-stdin "
            sh "docker build -t devxy/notifications_api:$BUILD_NUMBER ."
            sh "docker tag devxy/notifications_api:$BUILD_NUMBER devxy/notifications_api:latest"
            sh "docker push devxy/notifications_api:$BUILD_NUMBER"
            sh "docker push devxy/notifications_api:latest"
        }
       }

     stage("deploy"){
        steps {
            echo "kubectl delete -f deploy || true "
            echo "kubectl apply -f deploy"
        }
     }   
    }
}



