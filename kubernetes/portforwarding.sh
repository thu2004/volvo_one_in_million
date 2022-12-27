#!/bin/bash

export PODNAME=`minikube kubectl -- get pods --selector="app=selenium-hub" --output=template --template="{{with index .items 0}}{{.metadata.name}}{{end}}"`
minikube kubectl -- port-forward $PODNAME 4444:4444
