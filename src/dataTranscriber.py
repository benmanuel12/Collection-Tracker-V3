# Randomly using Python to convert a text file to a string that can be a JS object
# There is no data.txt file, I removed it as I don't have the rights to the characters I'm listing
# I'll also replace the names in characterData.js with generic names

file = open("data.txt", "r")
lines = file.readlines()
file.close()

id_count = 1
output_string = ""
template = """
{
    id: "%s",
    name: "%s",
    element: "none",
    obtained: false
},
"""
for line in lines:
    output_string += template % (str(id_count), line.strip())
    id_count += 1

print(output_string)
