from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy

#step1-create flask app
app=Flask(__name__)

#step2- postgressql databaseurl

app.config['SQLALCHEMY_DATABASE_URI']=""
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

#step3- create db-object
db=SQLAlchemy(app)

#step4:create a table model

class Student(db.Model):  #db.Model is a base class in flask-SQLAlchemy.  Because it lets you define database tables using Python classes
    __tablename__="student"      
    __table_args__={'schema':'test_schema'}  # to specify the schema
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(50),nullable=False)
    email=db.Column(db.String(100),nullable=False,unique=True)
    course=db.Column(db.String(50),nullable=False)



    def to_dict(self):
        return {
            "id":self.id,
            "name":self.name,
            "email":self.email,
            "course":self.course
        }
    

#step 5:
@app.before_request 
def create_table():
    db.create_all()

    # (or)

# with app.app_context():
#     create_table()



# step 6: API-get all students
@app.route('/students',methods=['GET'])
def get_students():

    students=Student.query.all()
    return jsonify([i.to_dict() for i in students])
        
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    student = Student.query.get(id)
    if not student:
        return {"message": "Student not found"}, 404
    data = request.get_json()
    student.name = data.get('name', student.name)
    student.email = data.get('email', student.email)
    student.course = data.get('course', student.course)
    db.session.commit()
    return jsonify(student.to_dict())



# add data
# with app.app_context():
#     new_student=Student(
#         name="mittu",
#         email="mittu@gmail.com",
#         course="python"
#     )
#     db.session.add(new_student)
#     db.session.commit()
#     print("successful")

@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    new_student = Student(name=data['name'], email=data['email'], course=data['course'])
    db.session.add(new_student)
    db.session.commit()
    return jsonify(new_student.to_dict()), 201


if __name__=="__main__":
    app.run(debug=True)







