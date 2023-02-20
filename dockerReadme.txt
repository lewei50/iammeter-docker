build image：
     docker build -t iammeter/local:v1 .

run：
     docker run --name=iammeter-local -p 5050:5050 iammeter/local:v1