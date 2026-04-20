#Helloworld program
print('Hello, World! What\'s your name?')
name = input()
print(f'Nice to meet you, {name}!')
print('How did you get here?')

#Test script using comma for a new line
print ('Hello,'),
print ('world!')

#Write a program that asks the user to type in a string, and then tells the user how long that string was.
user_input = input("Type in a string: ")
print("The string is", len(user_input), "characters long.")


#Ask the user for a string, and then for a number. Print out that string, that many times.
text = str(input("Type in some text: "))
number = int(input("How many times should it be printed? "))
print (text * number)


# What would happen if a mischievous user typed in a word when you ask for a number? Try it. 
number = int(input("Type in a number: "))
doubled = number * 2
print (doubled)



def add_numbers(a, b):
    return a + b
print(add_numbers(10, 20))
print(add_numbers(5, 3))

#call math module
import math
dir(math)
print(dir(math))

#return function
def add(a, b):
    return a + b
x = add(2, 3)
y = add(x, 10)
print(y)

#string sequence
def test_hello_world_indexing():
    text = "Hello, world!"
    assert text[0] == "H"
    assert text[1] == "e"
    assert text[2] == "l"
    assert text[3] == "l"
    assert text[4] == "o"
    print ("All assertions passed!")

#string sequence
text = "Hello, world!"
for i in range(len(text)):
    print(f"Index {i}: {text[i]}")


text = "Hello, world!"
for char in text:
    print(char)