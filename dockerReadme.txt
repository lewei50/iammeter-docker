build image：
     docker build -t iammeter/local:v1 .

run：
     docker run --name=iammeter-local  iammeter/local:v1 -p 5050:5050