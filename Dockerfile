FROM alpine

RUN uname -a > /os.txt

CMD cat /os.txt
