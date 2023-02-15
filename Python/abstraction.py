from abc import ABC   
class ClassName(ABC):
    pass

def basicinfo():
    print("This is a generic bank")
    return "Generic bank: 0"

@abstractmethod
def withdraw():
    pass