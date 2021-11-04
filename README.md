# ARGOS DB
Static site for https://argosdb.org generated with the [Hugo](https://gohugo.io/) framework.

## Updating Site
- Pull this repository to a local environment
- Make sure [Hugo](https://gohugo.io/getting-started/quick-start/) is installed in this environment
- Run `hugo server` and open http://localhost:1313/
- Refresh browser to see changes
- Commit changes and push back to GitHub
- Log in to the static site server (IYKYK)
- Use `git pull` in the argosdb directory in your home folder or `git clone https://github.com/FDA-ARGOS2/argosdb.git` if it does not already exist
- Run `hugo -D` to create the `./public` folder for static pages
- Copy the `./public` folder to `/var/www/html/argosdb/public`: 
`sudo cp -r public /var/www/html/argosdb/.`

