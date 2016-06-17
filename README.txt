href = "https://try.github.io/levels/1"

/*** Local Repository ***/

git init

git status

git add <filename> //git add readme.txt

git status

git commit -m "Your commitment"

git add '*.txt'

git log


/****** Remote Repository *****/

git remote add origin https://github.com/tyr/xxx.git

git push -u origin master 
/*
The name of our remote is origin and the default local branch name is master. The -u tells Git to remember the parameters, so that next time we can simply run git push and Git will know what to do. Go ahead and push it!
*/

git pull origin master

git diff HEAD
/*
Uh oh, looks like there have been some additions and changes to the octocat family. Let's take a look at what is different from our last commit by using the git diff command.

In this case we want the diff of our most recent commit, which we can refer to using the HEAD pointer.
*/

git add path/file.txt //stage path/file.txt file

git diff --staged
/*
Good, now go ahead and run git diff with the --staged option to see the changes you just staged. You should see that octodog.txt was created.
*/

git reset pathToFile/file.txt //unstage file.txt

git checkout -- octocat.txt
/*
Files can be changed back to how they were at the last commit by using the command: git checkout -- <target>. Go ahead and get rid of all the changes since the last commit for octocat.txt

git checkout -- <target>
*/

git branch clean_up 
/*
When developers are working on a feature or bug they'll often create a copy (aka. branch) of their code they can make separate commits to. Then when they're done they can merge this branch back into their main master branch.

We want to remove all these pesky octocats, so let's create a branch called clean_up, where we'll do all the work:
*/

git checkout <branch> //switch branches

git rm '*.txt'

git commit -m "Commitment"

git checkout master

git merge clean_up  //merge clean_up branch to master branch

git branch -d clean_up //delete clean_up since it's been merged into master branch

git push 
/*
Here we are, at the last step. I'm proud that you've made it this far, and it's been great learning Git with you. All that's left for you to do now is to push everything you've been working on to your remote repository, and you're done!
*/


