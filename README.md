# ARGOS DB

## How to make changes/update Argos Site?
#### 1. Fork the Repository.
#### 2. Clone the Repository to your Local Environment.

#### 3. Open up the project in your favorite text editor, select the file you want to contribute to, and make your changes.

#### 4. Add your modified files to Git.
```
git add path/to/filename.ext
```
#### You can also add all unstaged files using:
```
git add .
```
#### Note: using a ```git add .``` will automatically add all files. You can do a ```git status``` to see your changes, but do it before ```git add.```

#### 5. Commit your changes using a descriptive commit message.
```
git commit -m "Brief Description of Commit"
```
#### 6. Verify that the origin is your own forked branch and not the main repository.
```
git remote --verbose
```
#### 7. Push your commits to your GitHub Fork:
```
git push -u origin your-branch-name
```
#### 8. Submit a pull request. Within GitHub, visit this main repository and you should see a banner suggesting that you make a pull request. While you're writing up the pull request, you can add ```Closes #XXX``` in the message body where ```#XXX``` is the issue number you're fixing. Therefore, an example would be ```Closes #42``` would close issue ```#42```.
