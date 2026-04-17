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
