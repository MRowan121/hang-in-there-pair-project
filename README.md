# Hang In There

A boilerplate repo. 

## Set Up

1. One teammate: fork this repository
2. Clone down your new, forked repo
3. cd into the repository
4. Open it in your text editor
5. Add all project partners and your assigned instructor as collaborators on the repository

Project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/hang-in-there.html)

To view your project:

1. In your terminal, navigate to your project repo
2. Run the command `open index.html`
  
______________________________________________________  
# README Template  
Before turning this project in, erase this line and everything above it and fill in the info below.  
______________________________________________________  

# Hang in There  

### **Abstract:**
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This application allows the user to display a series of random motivational posters with options to create their own poster as well as save a poster that the user finds appealing. If a poster was saved in error, the user can double click on the saved poster image to remove it from the page.

### **Installation Instructions:**
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. [Click To Open Repo](https://github.com/MRowan121/hang-in-there-pair-project)
2. Click the "Fork" button. (This will create a user copy of the repository.)
3. Open the Terminal application.
4. In Terminal, use the "cd" command to navigate to where the local repository will live.
5. In GitHub, click on the green "Code" dropdown.
6. User will see three clone options. Select "SSH".
7. Copy the SSH key.
8. In Terminal, run "git clone [insert copied SSH key here].
9. In Terminal, use the "cd" command to navigate into the newly created directory.
10. Open the local repository by typing:
    * Atom - atom .
	* VS Code - code .

The local repository should now be open and able to be used.

### **Preview of App:**
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

### **Context:**
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
It took us a few days to write the code for this project. We just completed our second week of Mod 1.  

### **Contributors:**
[//]: <> (Who worked on this application? Link to their GitHubs.)
1. [Matt Rowan](https://github.com/MRowan121)
2. [Max Lange]()

### **Learning Goals:**
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The main goal of this project was to develop a better understanding of the interactions between HTML, CSS, and JavaScript. The tech involved includes: Google Chrome (internet browser), GitHub (cloud repository), and VS Code (code editor).

### **Wins + Challenges:**
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
1. Wins:
	1. Though we landed on using an instance of the poster class to display the custom poster, we initially wrote a function that referenced the various arrays and used the slice method. Since the various components of the custom poster were pushed into their respective arrays (making them the last index), we were able to access those values by using slice(-1).
	2. We were able to write the code that deletes a poster from the saved page in a way that also removes it from the saved posters array. By doing this, it allows the user to "resave" the same exact combination of image, title, and quote should it ever be displayed randomly again.
2. Challenges:
    1. Our biggest challenge came during iteration 3 while writing the code so that a poster would not be saved twice. We were able to overcome this largely due to Karim stumbling into our breakout room. They gave us an extra set of eyes on our code and were able to point out areas where we could consolidate some code so that it would be cleaner. Once our code was cleaned up, the issue became fairly obvious and we were able to complete the rest of iteration 3 by the end of that day.
