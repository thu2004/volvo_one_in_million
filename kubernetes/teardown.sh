#!/bin/bash

minikube kubectl -- delete deployment selenium-hub
minikube kubectl -- delete deployment selenium-node-chrome
minikube kubectl -- delete svc selenium-hub
