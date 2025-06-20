def fatorial(n: int) -> int:
    """Calcula o fatorial de um número inteiro não negativo.

    Args:
        n: Um inteiro não negativo.

    Returns:
        O fatorial de n. Retorna 1 se n for 0.
        Levanta ValueError se n for negativo.

    Raises:
        ValueError: Se n for negativo.
    """
    if n < 0:
        raise ValueError("O fatorial não está definido para "
                         "números negativos.")
    elif n == 0:
        return 1
    else:
        resultado: int = 1
        for i in range(1, n + 1):
            resultado *= i
        return resultado