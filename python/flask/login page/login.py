from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    uname = request.form.get("uname")
    password = request.form.get("pass")

    if uname == "mittu" and password == "nava":
        return "mittu ok"
    else:
        return "invalid"

if __name__ == "__main__":
    app.run(debug=True)
