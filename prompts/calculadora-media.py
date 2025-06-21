# Calculadora de média de notas
# O usuário deve informar as notas separadas por vírgula

entrada = input("Digite as notas separadas por vírgula: ")
notas = [float(n) for n in entrada.split(",")]

media = sum(notas) / len(notas)
print(f"Média final: {media:.2f}")
