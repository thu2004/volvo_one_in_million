#!/bin/bash

minikube kubectl -- create --filename=kubernetes/selenium-hub-deployment.yaml
minikube kubectl -- create --filename=kubernetes/selenium-hub-svc.yaml
minikube kubectl -- create --filename=kubernetes/selenium-node-chrome-deployment.yaml
