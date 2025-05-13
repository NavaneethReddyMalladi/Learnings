from flask import *

app=Flask(__name__)

@app.route("/")
def a():
    return render_template("base.html")
@app.route("/page1")
def b():
    return render_template("page1.html")
@app.route("/page2")
def c():
    return render_template("page2.html")
@app.route("/page3")
def d():
    return render_template("page3.html")






if __name__=='__main__':
    app.run(debug=True)