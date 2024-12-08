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
   git add .
   ```
   
3. Commit the changes
   
   ```bash  
   git commit -m "Add new feature"  
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
   
3. Log for a Specific Author
   
   Displays changes in the working directory that have not been staged.

   ```bash  
   git log --author="Author Name"          
   ```
   
4. View Uncommitted Changes

   ```bash  
   git diff          
   ```
   
5. Undoing Commits and Reverting

   Undo the Last Commit (Keep Changes)

   ```bash  
   git reset --soft HEAD~1            
   ```

   Undo the Last Commit (Discard Changes)

   ```bash  
   git reset --hard HEAD~1            
   ```

   Revert a Specific Commit

   ```bash  
   git revert <commit_hash>              
   ```
   
## Step 6: Merge Branches

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

## Step 7: Rebasing

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
