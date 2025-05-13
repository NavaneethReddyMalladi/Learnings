# import psycopg2

# con=psycopg2.connect(
    
    # port="",
    # password="",
    # host="localhost",
    # dbname="",
    # user=""
    
# )

# cur=con.cursor()

# cur.execute("select * from postgres_test.users")


# r=cur.fetchall()
# for i in r:
#     print(i)


# con.close()
# cur.close()



from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=False)
