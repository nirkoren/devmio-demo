node {
    nodejs('node-24') {
        try {
            stage('Checkout') {
                checkout scm
            }

            stage('Install') {
                sh 'npm ci'
            }

            stage('Lint') {
                sh 'npm run lint'
            }

            stage('Test') {
                sh 'npm test'
            }

            stage('Deploy (PM2)') {
                sh '''
                    pm2 describe server > /dev/null
                    if [ $? -eq 0 ]; then
                        pm2 reload server
                    else
                        pm2 start server.js --name server
                    fi

                    pm2 save
                '''
            }

            stage('Health Check') {
                sh '''
                    echo "Waiting for app to be ready..."
                    for i in {1..10}; do
                        curl -f http://localhost:3000/health && exit 0
                        sleep 2
                    done

                    echo "Health check failed"
                    exit 1
                '''
            }

        } catch (err) {
            echo "Pipeline failed: ${err}"
            throw err
        }
    }
}