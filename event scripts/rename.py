import os

def rename():
    x = 0
    path =  os.getcwd()
    print(str(path))
    filenames = os.listdir(path)

    for filename in filenames:
        x += 1
        n1 = str('n'+str(x))
        os.rename(filename, n1)

rename()
