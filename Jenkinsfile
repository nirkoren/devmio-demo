node() {
    def nodeTool = tool 'node-24'
    env.PATH = "${nodeTool}/bin:${env.PATH}"
    def cmd


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
            which pm2
            pm2 list
            pm2 delete server || true
            pm2 start server.js --name server
            pm2 save
        '''
        isUnix() ? sh(cmd) : bat(cmd)
    }
}

