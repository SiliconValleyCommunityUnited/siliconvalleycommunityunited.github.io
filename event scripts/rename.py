import os

def rename():
    x = 0
    path =  os.getcwd()
    print(str(path))
    filenames = os.listdir(path)

    for filename in filenames:
        n1 = str('n'+str(x)+'.jpg')
        os.rename(filename, n1)
        x += 1

rename()
