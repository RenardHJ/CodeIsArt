from random import randint
x = 7
anumEmotions = ["happy", "not happy","pretty happy","pissed"]
anum = "not happy"
maxNumber  =  randint(10,20)
while x < maxNumber:
	x += 1
	if anum == "not happy":
		print("anum totally sucks")
	elif anum == "happy":
		print("anum is the dopest dope")
	else:
		print(f"anum is {anum}")
	anum = anumEmotions[randint(0,len(anumEmotions)-1)]


