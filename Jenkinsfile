pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'git@github.com:sharan12221/portfolio.git', branch: 'main', changelog: true)
      }
    }

  }
  environment {
    REPO_URL = 'git@github.com:sharan12221/portfolio.git'
    BRANCH = 'main'
  }
}