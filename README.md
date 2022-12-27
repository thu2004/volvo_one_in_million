## Introduction

There are two test suites. One with tradition tests and the other one is visual regression tests.

## Prerequisite

* Computer with Ubuntu
* Docker
* Minikube
* Node js
* Git
* Java

## Setup

* Git clone and setup

    <pre>
    git clone https://github.com/thu2004/volvo_one_in_million.git
    cd volvo_one_in_million
    npm i
    </pre>

* Install allure commandline

    <pre>
    npm install -g allure-commandline --save-dev
    </pre>


## Run tests with chrome driver on client computer

This is config to run tests in sequence.

    <pre>
    npm run wdio
    </pre>

## Run tests with selenium grid
First start the selenium grid by run this command in a NEW terminal
    <pre>
    npm run start-selenium-grid
    </pre>

On an other terminal run the test with this command
    <pre>
    npm run wdio-selenium-grid
    </pre>

## Run tests as Dockerized image with selenium grid
First build the docker image by run this command
    <pre>
    npm run build-docker
    </pre>

Start the selenium grid by run this command in a NEW terminal
    <pre>
    npm run start-selenium-grid
    </pre>

Run the test with this command
    <pre>
    npm run wdio-docker
    </pre>

## Run tests with selenium grid on kubernetes
Assumed the minikube is started. Run this command to install the selenium grid to kubernetes
    <pre>
    npm run start-k8-selenium-grid
    </pre>

Wait 3 minutes to let the pods started and run the portforwarding command
    <pre>
    npm run portforwarding-k8
    </pre>
Run the test with this command
    <pre>
    npm run wdio-selenium-grid
    </pre>
Finally remove the selenium grid from kubernetes
    <pre>
    npm run stop-k8-selenium-grid
    </pre>

## Reporting of the results

Allure Reporter is used to collect and present test results. After have run tests, run the two commands to generate and open the test report.
    <pre>
    npm run generate-report
    npm run open-report
    </pre>

