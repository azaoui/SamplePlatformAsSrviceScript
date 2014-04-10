To make PLatform automatically start service you can follow this sample script

instalation:

sudo vi /etc/init.d/platform
copy the content of this script into platform file
change the path to startup and stop with your platform directory instalation
make the script executable by running the chmod command:

sudo chmod 755 /etc/init.d/platform

Platform should now be fully installed as service to test:

usage:
service platform start
service platform stop
service platform restart
 


Enjoy!
