from flask import Flask,jsonify,request # import flask
from flask_sqlalchemy import SQLAlchemy #import sqlalchemy

app=Flask(__name__)  #create flask app

#tell flask where the db is
app.config['SQLALCHEMY_DATABASE_URI']=''
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #dont show warning

db=SQLAlchemy(app)  #connect db to app


class Student(db.Model): #this class=tbale in db
    id=db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100), nullable=False)  # Name cannot be empty
    email = db.Column(db.String(120), unique=True, nullable=False)
    course = db.Column(db.String(100), nullable=False)


    def to_dict(self):  #to_dict() just helps us convert student data into JSON format easily
        return {
            "id":self.id,
            "name":self.name,
            "email":self.email,
            "course":self.course

        }
@app.before_request
def create_tables():
    db.create_all()  #create all tables before first request

@app.route('/students',methods=['GET'])
def get_students():
    students=Student.query.all()  #get all rows
    return jsonify([s.to_dict() for s in students])  #return as json


@app.route('/students',methods=['POST'])

def add_student():
    data=request.get_json()  #get json data snt by user


    #create new student object
    new_student=Student(
        name=data['name'],
        email=data['email'],
        course=data['course']
    )

    db.session.add(new_student) #add to db sessions
    db.session.commit() #save db
    return jsonify(new_student.to_dict(),201) #return new student

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

@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get(id)
    if not student:
        return {"message": "Student not found"}, 404

    db.session.delete(student)
    db.session.commit()
    return {"message": "Student deleted"}
if __name__ == '__main__':
    app.run(debug=True)
