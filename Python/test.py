import calculator
import pytest

# Comprueba lo que tiene que devolver.
def test_suma():
    assert calculator.suma(2,1) == 3

def test_resta():
    assert calculator.resta(2,1) == 1

# Run Test
    # 1. abrir terminal
    # 2. py.test test_file.py


# Instalar  PyTest
    # pip install pytest (Windows)