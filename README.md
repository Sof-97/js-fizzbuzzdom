# js-fizzbuzzdom

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
# MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
# MILESTONE 2 (Bonus)
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

# MILESTONE 3 ( superbonus )
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

```mermaid
    flowchart TD
    S((Start));
    E((End));
    click([Click Pulsante]);
    cicle{{Ciclo For stampare 100 numeri}};
    check{Check dei numeri con uno switch};
    case3[[Assegnazione classe verde </br> e cambio numero in Buzz  ]];
    case5[[Assegnazione classe giallo </br> e cambio numero in Fizz ]];
    case15[[Assegnazione classe rosso </br> e cambio numero in FizzBuzz ]];
    caseStandard[[Stampa numero con stile normale]];
    createDOM([Creazione elementi nel DOM]);
    style check fill:#930000; 
    S-->click;
    click-->cicle;
    cicle-->check;
    check==Caso 3===>case3;
    check==Caso 5===>case5;
    check==Caso 15===>case15;
    check==Caso default==>caseStandard;
    case3 & case5 & case15 & caseStandard====>createDOM;
    createDOM==>E;   
```