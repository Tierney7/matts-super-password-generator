# matts-super-password-generator

## Description 
i created this password generator to help users stay safe and secure on the web. using 4 different character types to assure an original and complex password for them to use.
These character types include uppercase letters, lowercase letters, numbers, and special characters or symbols.
This servers to solve any issues a user may have creating or thinking of a long or detailed enough password to use to keep them safe.

## Installation 
this project came with HTML, and CSS starter code. All work was done in Javascript. the first step was to list and define all variables. i orignally had all my characters list in one quote per character type but ran into some issues. singling each character out with quotes seemed to be the only way i could get it to work properly. So that is for sure one thing i learned the hard way. then created a function to generate a password, as well as a "click" event listener to allow the user to select the "generate password" button,
first prompt asks the user to pick a number of characters between 8-128. followed by alerts for typing something other than a number, a number lower than 8, and a number higher than 128.
following the number prompt we have the rest of the character prompts, giving them options of uppercase, lowercase, numbers, and symbols. followed by seleciton functions for each character type.
finally we have our loop that actually generates the password depending on the users selections. Then our password.join with empty quotes to display the password in the container for the user to view 

## Usage 
![alt text](assets/images/Screenshot%20(42).png)
      
![alt text](assets/images/Screenshot%20(43).png)
    
![alt text](assets/images/Screenshot%20(44).png)

![alt text](assets\images/Screenshot%20(45).png)
    
![alt text](assets\images/Screenshot%20(46).png)
      
![alt text](assets\images/Screenshot%20(47).png)
    
![alt text](assets\images/Screenshot%20(48).png)
         
      
## Credits

i would like to credit a couple KU classmates i was able to study with, and the slack program for helping eachother out. 

as always Http://www.W3schools.com was my go to 

this start up guide on youtube was helpful as well

https://www.youtube.com/watch?v=x4HUaiazDes&t=44s

## License 

MIT License

Copyright (c) [2022] [Matthew Tierney]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

