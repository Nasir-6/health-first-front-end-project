
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

This project was the front-end group project as part of the Bright Network Technology Academy - Full Stack Bootcamp (Cohort 4). It utilised the previously developed back-end project from another group with the intention to work with an unseen API and develop a React front-end for it.

This front-end project was built using HTML, CSS and ReactJs.

If deployed it can be found [here](https://nasir-6.github.io/Tic-Tac-Toe-Group-Project/). Please email at mfinasir06@gmail.com if it isn't or there are issues. 
If you would like to deploy the application locally please follow the instructions below.

## Local Setup Instructions

1. Clone the Back end Repo:
```git clone git@github.com:Nasir-6/health-first-back-end.git```
2. Follow the commands in the [database_setup_queries.md file](https://github.com/Nasir-6/health-first-back-end/blob/main/database_setup_queries.md) to create the database.
3. Run the back-end using the IntelliJ IDE - the server port should configure to 8080 by default (if not please kill any other processes to free up this port).
4. Clone the Front-end Repo: 
```git clone git@github.com:Nasir-6/health-first-front-end-project.git```
5. Open the "health-first-front-end-project" folder using VsCode and run ```npm install``` to install the required node modules. 
6. Run the front-end application using ```npm start``` - this should run the application on localhost:3000
7. Double check you are not running the production build by checking the console log in your browser telling you to make sure the server is running on port 8080.
8. Enjoy! ;)



## Features
### Professional and Responsive UI
![tic-tac-toe UI features](https://github.com/Nasir-6/Tic-Tac-Toe-Group-Project/blob/main/UI-demo.gif)
- Add gif of scrolling through pages
- Professional website design with the NHS color scheme in mind
- About/Services pages to give users more information about the company
- Responsive design with a collapsing Navbar to allow use on 


### CPU mode
![CPU mode feature](https://github.com/Nasir-6/Tic-Tac-Toe-Group-Project/blob/main/CPU-mode-demo.gif)
- Selecting CPU mode changes player 2 to a CPU controlled player
- Developed using promises/await/setTimeout to simulate the CPU's turn 
- Based off of random turn generator (This was an initial feature as seen by the button on screen)
- BNTA cohort 4 Easter egg (Play against Nasir's terrible Wi-Fi)


## What we learnt
- How to plan and develop an application and use HTML, CSS and ReactJS to develop a booking system application
- How to use GitHub for collaboration (using branches and dealing with merge conflicts)
- Connecting an external Java/SpringBoot Back-end to a React front-end
- The structuring of a React application to ensure states are at a suitable level within the app - This aims to minimise prop-drilling whilst still allowing access to states where needed
- The use of conditional rendering to show certain buttons or pages in different scenarios
- The use of React Hooks (UseEffect, UseState)
- The use of SessionStorage to keep track of logged-in user
- The use of ReactRouter to create a multipage React App
- The importance of developing the back-end with the front-end application in mind
- Security issues arising from using the url as a means of holding user information
- The use of flexbox, grid and media queries to create a responsive web application (including a collapsing navbar menu)
- The access to the various input types within HTML forms (date, time etc.)

## Future improvements
- Write tests for JS/ReactJs features
- Complete the SignUp section to allow new doctors/patients to register
- Show expired appointments and upcoming appointments (date order)
- Use Redux to manage states throughout the application (Useful for keeping track of logged-in user across the app, rather than using SessionStorage)

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




