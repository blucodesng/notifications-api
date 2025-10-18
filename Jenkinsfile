pipeline {
    agent any
    stages {
       stage("Build docker image"){
        steps {
            echo "cat regpwd.txt | docker login --username devqxz@gmail.com --password-stdin "
            echo "docker build -t devxy/notifications_api:$BUILD_NUMBER ."
            echo "docker tag devxy/notifications_api:$BUILD_NUMBER devxy/notifications_api:latest "
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

