# Hang in There  

### **Abstract:**
This application allows the user to display a series of random motivational posters with options to create their own poster as well as save a poster that the user finds appealing. If a poster was saved in error, the user can double click on the saved poster image to remove it from the page.

### **Installation Instructions:**
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
![A screenshot of our saved posters page](https://cdn.loom.com/images/originals/83bed341769549a1bf9bc232b75d4b14.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy84M2JlZDM0MTc2OTU0OWExYmY5YmMyMzJiNzVkNGIxNC5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NjY2MzgyNjV9fX1dfQ__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ&Signature=gjdlLfE4x8UMYLBQCGWDM7FNmQ4HOwLtYgz06KMppYauHc8bE5Mnj37CilLdocJ0i4sh0u%7EbE0XFXGsiFdNWqvsHmc7CiIFswmWCLk-dWWmoWeT-Akp15%7Ehrgz59UJS-q-eM90eu1Ag6T1PZLMB4mHUFwuR%7ETisjcSeRP1QvXPkAObDHjjzBiShaKhgk4-q2VAhim2Inr6xy7Ow5z1nPYlDZHYcBNEYV5Lf8hkpcdpxZhShfX46sFYdd0VDgihvjn6NWM7k89Lww26IeS-PxcI74VggPAKCz0cLvxV3Bg1CFX%7El7TKpQuL49RbCfPovKeIjZ7MHTMJ3oR9442aMGVQ__)

### **Context:**
It took us a few days (~4) to write the code for this project. We just completed our second week of Mod 1.  

### **Contributors:**
1. [Matt Rowan](https://github.com/MRowan121)
2. [Max Lange](https://github.com/Abekomon)

### **Learning Goals:**
The main goal of this project was to develop a better understanding of the interactions between HTML, CSS, and JavaScript. The tech involved includes: Google Chrome (internet browser), GitHub (cloud repository), and VS Code (code editor).

### **Wins + Challenges:**
1. Wins:
	1. Though we landed on using an instance of the poster class to display the custom poster, we initially wrote a function that referenced the various arrays and used the slice method. Since the various components of the custom poster were pushed into their respective arrays (making them the last index), we were able to access those values by using slice(-1).
	2. We were able to write the code that deletes a poster from the saved page in a way that also removes it from the saved posters array. By doing this, it allows the user to "resave" the same exact combination of image, title, and quote should it ever be displayed randomly again.
2. Challenges:
    1. Our biggest challenge came during iteration 3 while writing the code so that a poster would not be saved twice. We were able to overcome this largely due to Karim stumbling into our breakout room. They gave us an extra set of eyes on our code and were able to point out areas where we could consolidate some code so that it would be cleaner. Once our code was cleaned up, the issue became fairly obvious and we were able to complete the rest of iteration 3 by the end of that day.
