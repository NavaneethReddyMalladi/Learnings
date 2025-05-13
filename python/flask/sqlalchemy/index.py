import random
from sqlalchemy import create_engine,Integer,Column,String,MetaData,func
from sqlalchemy.orm import declarative_base,sessionmaker
# **<dialect>+<driver>://<username>:<password>@<host>:<port>/<database>**
url=""

engine=create_engine(url)

Base=declarative_base(metadata=MetaData(schema='test_schema'))
Session=sessionmaker(bind=engine)
session=Session()

class User(Base):
    __tablename__="user"

    id=Column(Integer,primary_key=True)
    name=Column(String)
    age=Column(Integer)


data=session.query(User.name,func.count(User.id)).group_by(User.name).all()
print(data)




session.commit()
session.close()