import unittest
import codigo_gerado

class TestFatorial(unittest.TestCase):

    def test_fatorial_zero(self):
        self.assertEqual(codigo_gerado.fatorial(0), 1)

    def test_fatorial_um(self):
        self.assertEqual(codigo_gerado.fatorial(1), 1)

    def test_fatorial_positivo(self):
        self.assertEqual(codigo_gerado.fatorial(5), 120)
        self.assertEqual(codigo_gerado.fatorial(10), 3628800)

    def test_fatorial_negativo(self):
        with self.assertRaises(ValueError):
            codigo_gerado.fatorial(-1)

    def test_fatorial_grande(self):
        self.assertEqual(codigo_gerado.fatorial(20), 2432902008176640000)


if __name__ == '__main__':
    unittest.main()