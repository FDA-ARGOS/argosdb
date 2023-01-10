mod="argosdb_frontend"
ver="1.0"

cd /Users/rykahsay/projects/$mod/app
rm -rf app-$ver-*.tar*

server_list="dev tst beta prd"

for server in $server_list
do
    cp conf/$mod.$server.env .env.production
    npm run build
    tar cvf app-$ver-$server.tar build
    gzip app-$ver-$server.tar
done


scp app-$ver-*.tar.gz rykahsay@dev.argosdb.org:/data/shared/$mod/releases/frontend/
