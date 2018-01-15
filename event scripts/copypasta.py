def printStuff():
    f = open('dictionary.py','w')
    total = 14
    for x in range(total):
        f.write('''
<div class="mySlides">
    <div class="numbertext">'''+ str(x+1) +''' / '''+str(total)+'''</div>
    <img src="../../img/volleyballPics/v'''+str(x+1)+'''.jpg" class="slideImage">
</div>\n''')

    for x in range(total):
        f.write('<span class="dot" onclick="currentSlide('+ str(x) +')"></span>\n')
    f.close()

printStuff()
