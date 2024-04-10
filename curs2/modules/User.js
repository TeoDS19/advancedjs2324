class User{
    id;
    _nume;
    email;
    #varsta;
    constructor(id,nume,email, varsta){
        //setam proprietatile
        this.id=id;
        this._nume=nume;
        this.email=email;
        this.#varsta=varsta;
    }
    set nume(numeNou){
        this._nume=numeNou
    }
    get nume(){
        return this._nume
    }
    set varsta(varstaNoua){
        if(varstaNoua>50 || varstaNoua<16){
            throw 'Varta incorecte'
        }
        this.#varsta=varstaNoua
    }
    mananca (calorii){
        console.log(`Mananca ${calorii} pe zi.`);
        this.#doarme(7)
    }
    #doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
export {User}