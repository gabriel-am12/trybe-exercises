def larggest_name(names):
  largest_name = names[0]
  for name in names:
    if len(name) > len(largest_name):
      largest_name = name
  return largest_name





nameList = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(larggest_name(nameList))