# GitHub Commands Practice  

This repository is being used for practicing Git-related commands, starting from creating a repository to advanced workflows like merging and rebasing branches.  

---

## Table of Contents  
- [Introduction](#introduction)  
- [Prerequisites](#prerequisites)  
- [Basic Setup](#basic-setup)  
- [Branching](#branching)  
- [Committing Changes](#committing-changes)  
- [Log, Revert, and Reset Commits](#log-revert-and-reset-commits)  
- [Working with Remote Repositories](#working-with-remote-repositories)
- [Stashing_Changes_Before_Commit](#stashing-changes-before-commit)
- [Merging](#merging)  
- [Rebasing](#rebasing)  
- [Conclusion](#conclusion)   

---

## Introduction  

Git is a powerful distributed version control system that allows developers to track changes in code, collaborate effectively, and manage projects. GitHub is a cloud-based platform for hosting Git repositories, enabling seamless sharing and collaboration.  

This repository focuses on practicing the following concepts:  
- Creating a repository  
- Managing branches  
- Committing changes
- Log, Revert & Reset Commits
- Working with remote repositories  
- Merging and rebasing branches  

---

## Prerequisites  

Before getting started, make sure you have:  
1. **Git installed on your machine**  
   - Verify with:  
     ```bash  
     git --version  
     ```  
   - If not installed, follow the [Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).  
2. **A GitHub account**  
   - Create one at [GitHub](https://github.com).  

---

## Basic Setup  

## Step 1: Initialize a New Repository  

1. Create a directory for your project:
   
   ```bash  
   mkdir git-practice  
   cd git-practice

## Step 2: Create and Switch to a New Branch

1. Create a new branch:
   
   ```bash  
   git branch feature-branch
   
3. Create and Switch to the new branch
   
   ```bash
   git checkout -b feature-branch

4. Alternatively, use
   
  ```bash
    git switch -c feature-branch
 ```

## Step 3: Make Changes and Commit

1. Edit files or create new ones in the branch.
   
2. Stage the changes
    
   ```bash  
   git add . {adds all tracked changes at once}
   ```
   
4. Commit the changes
   
   ```bash  
   git commit -m "Add new feature"  
   ```

5. Amending the previous commit.

   ```bash  
   git commit --amend --no-edit  
   ```

## Step 4: Connect to a Remote Repository

1. Create a repository on GitHub.
   
2. Link the local repository to the remote
   
   ```bash  
   git remote add origin <repository_url>      
   ```
   
3. Push the local code to the remote repository
   
   ```bash  
   git push -u origin main      
   ```
   
## Step 5: Log, Revert and Reset Commits

1. Viewing the Commit Log

   ```bash  
   git log      
   ```

2. Compact Log (One Line)

   ```bash  
   git log --oneline        
   ```
   
3. To see the differences for files that have been staged for commit

   ```bash  
   git diff --staged       
   ```
   
4. Log for a Specific Author
   
   Displays changes in the working directory that have not been staged.

   ```bash  
   git log --author="Author Name"          
   ```
   
5. View Uncommitted Changes

   ```bash  
   git diff          
   ```
   
6. Undoing Commits and Reverting

   Undo the Last Commit (Keep Changes)

   ```bash  
   git reset --soft HEAD~1            
   ```

7. Undo the Last Commit (Discard Changes)

   ```bash  
   git reset --hard HEAD~1            
   ```

8. Revert a Specific Commit

   ```bash  
   git revert <commit_hash>              
   ```

## Step 6: Stashing Changes Before Commit

1. To stash the changes under a particular branch

   ```bash  
   git stash     
   ```

2. Stashing with a message 

   ```bash  
   git stash push -m "stash message"        
   ```
   
3. To check on the stash list

   ```bash  
   git stash list          
   ```

4. To apply back the latest stash

   ```bash  
   git stash pop          
   ```

5. To apply back a specific stash, from the stash list

   ```bash  
   git stash apply stash@{#n} - {here the #n will be denoting the stash index}.          
   ```

6. To drop the stash from the list

   ```bash  
   git stash drop stash@{n} - {here the #n will be denoting the stash index}.          
   ```

## Step 7: Merge Branches

1. Switch to the branch you want to merge into (e.g., ```main```)
   
   ```bash  
   git checkout main
   ```
   
2. Merge the feature branch into ```main```
   
   ```bash  
   git merge feature-branch  
   ```
   
3. Resolve any conflicts if they occur and commit the merge
   
   ```bash  
   git commit
   ```

## Step 8: Rebasing

1. Switch to the branch you want to rebase (e.g., ```feature-branch```)
   
   ```bash  
   git checkout feature-branch  
   ```
   
2. Rebase the branch onto ```main```
   
   ```bash  
   git rebase main    
   ```
   
   or use interactive rebase with the following command
  
   ```bash  
   git rebase -i origin/main    
   ```

3. If conflicts occur, resolve them and continue rebasing
   
   ```bash  
   git rebase --continue  
   ```
   
4. Force-push the rebased branch to the remote repository
   
   ```bash  
   git push -force  
   ```

## Conclusion

This repository serves as a practical guide for understanding and mastering Git workflows. Practice each command, experiment with the concepts, and gain confidence in managing version control 🚀.
