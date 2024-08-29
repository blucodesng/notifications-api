pipeline {
    agent any
    stages {
        stage("Say Hello"){
            steps {
                echo "This is stage Say Hello"
            }
        }

        stage("Stage Build Docker image"){
            steps {
                echo "docker build -t bludive:v2 ."
            }
        }
    }
}