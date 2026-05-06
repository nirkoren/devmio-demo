# Welcome to DevOpsCon CI/CD demo repo
### Simple Node.js + Express + Jest + ESLint + Jenkins pipeline

## Before you start:

<ul>
    <li>Install NodeJS latest (Version 24 or above is great) <a href=https://nodejs.org/en/download target="_blank">https://nodejs.org/en/download</a></li>
    <li>Clone This repo and CD to the repo directory</li>

[//]: # (    <li>Run: npm install -g pm2</li>)

[//]: # (    <li>Run: pm2 start server.js --name devopscon</li>)
</ul>

## Run locally
npm install <br>
npm start

## Test
npm test

## Lint
npm run lint

## Jenkins configurations:
<ul>
    <li>Go to plugin manager: http://localhost:9090/manage/pluginManager/</li>
    <li>install NodeJS and StageView plugins</li>
    <li>Go to settings > Tools: http://localhost:9090/manage/configureTools/</li>
    <li>Add NodeJS 24 (latest) and call it node-24</li>
</ul>


