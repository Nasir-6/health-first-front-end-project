
# Health First Front-end Project

We put your Health First!

By Connie, Nasir, Nayan and Oleksiy.

## Table of contents
<!--ts-->
* [Project Description](#project-description)
* [Local Setup Instructions](#local-setup-instructions)
* [Features](#features)
  * [Clean and Responsive UI](#clean-and-responsive-ui)
  * [CPU Mode](#cpu-mode)
* [Future Improvements](#future-improvements)
* [What we learnt](#what-we-learnt)
* [Contributors](#contributors)

<!--te-->



## Project Description

This is the front-end for the [Health First back-end project.](https://github.com/Nasir-6/health-first-back-end) (originally produced by [Aoife, Hajr, Jake, Michael and Suraya](https://github.com/Jake-Raffe/Back-end_Project))
It is a doctor appointment booking system allowing doctors to book, cancel or update appointments as well as allow both doctors and patients to view their upcoming appointments.

This project was the front-end group project as part of the Bright Network Technology Academy - Full Stack Bootcamp (Cohort 4). It utilised the previously developed back-end project from another group with the intention to work with an unseen API and develop a front-end for it.

If deployed it can be found [here.](https://nasir-6.github.io/Tic-Tac-Toe-Group-Project/). Please email at mfinasir06@gmail.com if it isn't or there are issues. 
If you would like to deploy the application locally please follow the instructions below.

## Local Setup Instructions

1. Clone the Back end Repo: 
   git clone git@github.com:Nasir-6/health-first-back-end.git
2. Create a postgresql database called "healthfirst"
3. Execute the commands in the [Database.sql file](https://github.com/Nasir-6/health-first-back-end/blob/main/database.sql) - we recommend connecting to the healthfirst db using positco to copy, paste and execute the commands.
4. Run the back-end using the IntelliJ IDE - the server port should configure to 8080 by default (if not please kill any other processes to free up this port)
5. Clone the Front-end Repo: git clone git@github.com:Nasir-6/health-first-front-end-project.git
6. Run the front-end application using "npm start" - this should run the application on localhost:3000
7. Double check you are not running the production build by checking the console log in your browser telling you to make sure the server is running on port 8080.
8. Enjoy! ;)



## Features
### Clean and Responsive UI
![tic-tac-toe UI features](https://github.com/Nasir-6/Tic-Tac-Toe-Group-Project/blob/main/UI-demo.gif)
- Clean design and consistent colour scheme
- Features such as an icon showing for the current player, confetti for the winner and the color change for the winning combination to level up the UI experience
- Compete against friends with score tracking and seamless name changing features
- Responsive design so the game can be played on web or mobile


### CPU mode
![CPU mode feature](https://github.com/Nasir-6/Tic-Tac-Toe-Group-Project/blob/main/CPU-mode-demo.gif)
- Selecting CPU mode changes player 2 to a CPU controlled player
- Developed using promises/await/setTimeout to simulate the CPU's turn 
- Based off of random turn generator (This was an initial feature as seen by the button on screen)
- BNTA cohort 4 Easter egg (Play against Nasir's terrible Wi-Fi)


## What we learnt
- How to wireframe an application and use HTML, CSS and vanilla JS to develop a basic game
- How to use GitHub for collaboration (using branches and dealing with merge conflicts)
- Using flexbox, grid and media queries for a responsive design
- Using external npm packages in our projects (Canvas-confetti and FontAwesome)
- Incorporating promises/await/setTimeout to simulate a CPU turn

## Future improvements
- Write tests for JS features
- Incorporate online play using websockets
- Show expired appointments and upcoming appointments (date order)

## Contributors

### Front-end
- [Connie](https://github.com/conniebernardin)
- [Nasir](https://github.com/Nasir-6)
- [Nayan](https://github.com/Nayan-grg)
- [Oleksiy](https://github.com/oleksiysmola)

### Back-end
- [Aoife](https://github.com/aoifeags)
- [Hajr](https://github.com/hdelli)
- [Jake](https://github.com/Jake-Raffe)
- [Michael](https://github.com/13stMichael)
- [Suraya](https://github.com/SurayaHasan)




