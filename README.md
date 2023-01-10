# Requirements
The following must be available on your server:

* Node.js and npm
* docker


# Updating contents
The file app/src/components/home_page.jsx contains all contents of this website. Please
edit and commit this file to change contents.


# Installation of APP

## Setting config parameters
After cloning this repo, you will need to set the paramters given in
conf/config.json. The "server" paramater can be dev/test/beta/prd, and
the "app_port" is the port in the host that should map to docker 
container for the app.


## Building and starting the docker container for the APP
From the "app" subdirectory, run the python script given to build and start container:
  ```
  python3 start_app_container.py
  docker ps
  ```
The last command should list docker containers and you should see one named
"running_argosdb_{SERVER}_app" where {SERVER} is your server (dev/test/beta/prd)


## Setting public domains to the 
To serve the APP at a given public domain name such as www.argosdb.org,
add the following lines to your apache VirtualHost directive 
(assuming the "app_port" you have selected in the conf/config.json 
 configuration to be 5090)


  ```
  <VirtualHost *:443>
    ServerName www.argosdb.org
    ProxyPass / http://127.0.0.1:5090/
    ProxyPassReverse / http://127.0.0.1:5090/
  </VirtualHost>
  ```









