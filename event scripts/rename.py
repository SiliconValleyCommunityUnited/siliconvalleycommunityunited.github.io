import os
def rename():
    x = 0
    
    path =  os.getcwd()
    filenames = os.listdir(path)

    for filename in filenames:
        x++
        n1 = str('n'+str(x))
        os.rename(filename, n1)
