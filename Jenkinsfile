node() {
    def nodeTool = tool 'node-24'
    env.PATH = "${nodeTool}/bin:${env.PATH}"

    stage('Init') {
        checkout scm
    }
    stage('Build') {
        cmd = "npm ci"
        isUnix() ? sh(cmd) : bat(cmd)
    }

    stage('Lint') {
        cmd = "npm run lint"
        isUnix() ? sh(cmd) : bat(cmd)
    }

    stage('Tests') {
        cmd = "npm test"
        isUnix() ? sh(cmd) : bat(cmd)
        junit 'reports/junit.xml'
    }

    stage('Deploy') {
        cmd = '''
            npm install -g pm2
            pm2 start server.js --name server || pm2 reload server
        '''

        if (isUnix()) {
            sh cmd
        } else {
            bat cmd
        }
    }
}

