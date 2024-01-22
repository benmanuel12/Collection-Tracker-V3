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
