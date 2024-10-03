

#? EJERCICIO 1
''''
Completa la función suma cuadrada para que eleve al cuadrado cada número que se le pasa y luego sume los resultados
numeros=[]

def resultado(numeros_elevar):
    resultado_elevacion=0
    
    for i in range(0,len(numeros_elevar)):
        n=(pow(numeros_elevar[i],2))
        resultado_elevacion+=n
    print("Resultado elevacion: "+str(resultado_elevacion))


for i in range(0, 3):
    numero=int(input(f'{i+1} Ingresa un numero: '))
    numeros.append(numero)

resultado(numeros)
'''



#? EJERCICIO 2
''''
Escribe una función que tome una matriz de números y devuelva la suma de los números. Los números pueden ser 
negativos o no enteros. Si la matriz no contiene ningún número entonces debe devolver 0.

numeros=[3.14, 1,3]

def suma_numeros(matriz):
    resultado=0
    n=0

    if len(matriz)>0:
        for i in range(0, len(matriz)):
            n = matriz[i]
            resultado+=n
        return print(f'Resultado: {resultado}')
    else:
        return print("El resultado de la operacion es 0")

suma_numeros(numeros)
'''



#? EJERCICIO 3
''''
Su tarea es hacer una función que pueda tomar cualquier número entero no negativo como 
argumento y devolverlo con sus dígitos en orden descendente. Esencialmente, reorganizar 
los dígitos para crear el mayor número posible.

numero = int(input('Ingresa un numero: '))
matriz=[]

def descendente(numero_ingresado):
    numero_final=''
    if numero_ingresado>0:
        for i in range(0, len(str(numero_ingresado))):
            n=str(numero_ingresado)[i]
            matriz.append(int(n))

        for x in range(0, len(matriz)):
            for y in range(x, len(matriz)):
                if matriz[x] < matriz[y]:
                    temp = matriz[x]
                    matriz[x] = matriz[y]
                    matriz[y] = temp
            
        for p in matriz:
            numero_final+=str(p)

        print(f'El numeor ordenado: {int(numero_final)}')

    else:
        print("No se puede trabajar con el numero que ingresaste")


descendente(numero)
'''


#? EJERCICIO 4

''''
Si un valor está presente en b, todos sus sucesos deben ser retirados de la otra:
array_diff([1,2,2,2,3],[2]) == [1,3]

matriz1=[]
matriz2=[]
principal=[matriz1,matriz2]

def eliminar_numero(x):
    numero=0
    eli=x[1][0]
    matriz3=[]

    for i in x:
        for j in i:
            numero=j
            if eli==numero:
                continue
            else:
                matriz3.append(numero)
    return print(matriz3)


def numeros():
    for i in range(0,4):
        n=int(input(f'{i+1} Ingresa un numero: '))
        matriz1.append(n)

    eliminar=int(input(f'\nDe la siguiente matriz {matriz1} que numero quieres eliminar: '))
    matriz2.append(eliminar)


numeros()
eliminar_numero(principal)
'''



















