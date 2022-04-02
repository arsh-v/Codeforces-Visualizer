# Codeforces-Visualizer

# 1. Introduction
I've build a chrome extension which analyse the coding journey of any user on the codeforces plateform.

# 2. Technologies and Libraries Used
* Node.js
* Javascript
* CSS
* HTML
* Codeforces API's

# 3. Files
 * **lib/** : Contains necessary files for the graph implementation and library files
 * **scripts/** :Contains js file which controll all the analysis part in background
 * **css/** : Take care of each element which presented after analises
 * **manifest.json** : menifest file for the chrome extension.

# 4. How does it work?
1. First you need to load the chrome Extension.
2. After loading this chrome extention it look like.

![Screenshot (591)](https://user-images.githubusercontent.com/84044819/161397297-8ca2ff27-9fda-462b-9a3e-c4c2b88db747.png)

3. Now you need to click on the icon of the chrome extension then it will genarate a popup

![Screenshot (592)](https://user-images.githubusercontent.com/84044819/161397348-dd4172c8-6878-41d7-b1e5-3279ac3e8d40.png)

4. In the popup it will fetch some top rated candidates form the codeforces and displays there current rating, Max rating,position and there contributions on Codeforces.
5. If you want to know some details about your codeforces handle just put you handle in the Input box and press the submit button.This will fetch your data from codeforces with the help of the API's provides by the codeforces.
6. If you want more detailed analysis of your coding journey on Codeforces press the button on top right cornor.

![Screenshot (593)](https://user-images.githubusercontent.com/84044819/161397579-ce5addb4-9498-4785-b1ab-5b5c5a6a8a22.png)

7. Now after pressing that button you will get a new page which look like

![Screenshot (595)](https://user-images.githubusercontent.com/84044819/161397616-985b0817-8546-4c1b-959e-b08737541737.png)

8. Write your name in the input box and hit the button .

![Screenshot (596)](https://user-images.githubusercontent.com/84044819/161397661-c29d4d41-42d8-4406-91b2-3062eeb188f7.png)

9. After pressing the button you will get detailed analysis like
    * How many contest you participated till now
    * how many languages you used for submition for your code (with the help of doughnut).

![Screenshot (597)](https://user-images.githubusercontent.com/84044819/161397862-049a1358-4b70-4dea-b067-cea5ec695935.png)


    * How many AC, TLE ,Runtime Error ,Memory Exceed limit ect (with the help of doughnut).
    * A Bar Graph which represent question done by the user along with the question rating .
   
![Screenshot (598)](https://user-images.githubusercontent.com/84044819/161397874-d461fbb6-e0df-4944-83eb-e733a4d2b569.png)
    
    * A one more about how many problems you have done till now along with there problem tags.
    
![Screenshot (599)](https://user-images.githubusercontent.com/84044819/161397903-02fea881-344f-4df3-9cbc-db50b00a027a.png)

    * Now we display some numbers about the contest given by user and question done by user.
    
![Screenshot (600)](https://user-images.githubusercontent.com/84044819/161397924-2275fab6-fef9-474e-87d1-2abf0a3bbb16.png)

    * In last I put a section where user find some problems attemted by user but not solved yet.
    
![Screenshot (602)](https://user-images.githubusercontent.com/84044819/161397977-7b0690c8-cbb6-435e-9b03-2e05c6c32ad5.png)
10. In about page we put our repo link and thank for my pear for there help and ask for more suggestion if there is any i will appriciate it.

![Screenshot (601)](https://user-images.githubusercontent.com/84044819/161398034-d8fcc92a-9d77-40ff-84f3-7e973268f2fd.png)


