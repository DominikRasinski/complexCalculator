let Complex = require('complex.js');
const { add, subset } = require('mathjs');
class liczbyZespolone {
    constructor(LiczbaZespolona, LiczbaRzeczywista){
        let c = new Complex(LiczbaRzeczywista, LiczbaZespolona);
        this.LiczbaZespolona = c.im;
        this.LiczbaRzeczywista = c.re;
    }
    Pokaz(){
        return `LiczbaZespolona zespolona ${this.LiczbaZespolona}, a liczba rzeczywista ${this.LiczbaRzeczywista}`;
    }
    Wyzeruj(){
        this.LiczbaZespolona = 0;
        this.LiczbaRzeczywista = 0;
    }
}
class kalkulator extends liczbyZespolone{
    constructor(LiczbaZespolona, LiczbaRzeczywista){
    super(LiczbaZespolona, LiczbaRzeczywista)
    this.LiczbaZaspolonaKalkulator = LiczbaZespolona;
    this.LiczbaRzeczywistaKalkulator = LiczbaRzeczywista;
    }
    Dodawanie(){
        return Complex(this.LiczbaZaspolonaKalkulator, this.LiczbaRzeczywistaKalkulator).add(1,1).toString();
    }
    Odejmowanie(){
        return Complex(this.LiczbaZespolona, this.LiczbaRzeczywista).sub(1,1).toString();
    }
    Mnozenie(){
        return this.LiczbaZespolona * this.LiczbaRzeczywista;
    }
    Dzielenie(){
        return this.LiczbaZespolona / this.LiczbaRzeczywista;
    }
    Pokaz(){
        return `Liczba zespolona ${this.LiczbaZaspolonaKalkulator}, Liczba rzeczywista ${this.LiczbaRzeczywistaKalkulator}`;
    }
}
let liczbaZespolona = 6;
let liczbaRzeczywista = 5;
const liczby = new liczbyZespolone(liczbaRzeczywista, liczbaZespolona);
const kalk = new kalkulator(liczbaRzeczywista, liczbaZespolona);
console.log(liczby.Pokaz());
console.log(kalk.Dodawanie());
console.log(liczby.Pokaz());
console.log(kalk.Pokaz());


// console.log(kalk.Odejmowanie());
// console.log(kalk.Mnozenie());
// console.log(kalk.Dzielenie());

// liczby.Wyzeruj();
// console.log(liczby.Pokaz());
// kalk.Wyzeruj();
// console.log(kalk.Dodawanie());