pipeline {
  agent {
    dockerfile {
      filename 'docker-compose.yml'
    }

  }
  stages {
    stage('Env') {
      steps {
        sh 'cp .env.example .env'
      }
    }

    stage('Node') {
      steps {
        sh '''echo "install node 10.x LTS"
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "install yarn"
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install --no-install-recommends yarn
'''
      }
    }

    stage('Dependencies') {
      steps {
        sh '''echo "install pm2 and serve"
npm i -g pm2 serve

echo "install dependencies with yarn"
yarn

echo "run in development"
yarn start'''
      }
    }

  }
}