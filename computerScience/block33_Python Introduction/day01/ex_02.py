def mean(numbersList):
  total = 0
  for number in numbersList:
    total += number
  return total / len(numbersList)

ex01 = [2, 4, 5, 9]
print(mean(ex01))