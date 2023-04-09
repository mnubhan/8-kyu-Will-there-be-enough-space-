# 8-kyu-Will-there-be-enough-space-
The Story:
<br>
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
<br><br>
Task Overview:
<br>
You have to write a function that accepts three parameters:
<br><br>
cap is the amount of people the bus can hold excluding the driver.
<br>
on is the number of people on the bus excluding the driver.
<br>
wait is the number of people waiting to get on to the bus excluding the driver.
<br><br>
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
<br><br>
Usage Examples:
<br>
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
<br>
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
