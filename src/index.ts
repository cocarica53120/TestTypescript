import * as cp from "child_process";

console.log('hello');
console.log('Alain');

/**
 * Purpose: Define a person
 * attributes:
 *  age: number
 */
class Person {

    private age: number;

    constructor(age: number = 50) {
        this.age = age;
        console.log(`Person ctor. I am ${age}`)
    }

    /**
     * workSpawn
     */
    public workSpawn() {
        console.log('spawn bgn', new Date());
        const spawn = cp.spawn('sleep', ['4']).on('exit', (code, sig) => {
            console.log('code', code, 'sig', sig);
            console.log('spawn end', new Date());
        });
        console.log('after');
    } 
    
    public work() {
        console.log('I work hard');
        console.log(new Date());
        console.log('ls result', cp.execSync('pwd && echo "I sleep 4 seconds!" && sleep 4 && ps').toString());
        console.log(new Date());
        return this.age;
    }

}

const person = new Person();

//console.log(person.work, person.work())
person.workSpawn();
setTimeout(() => person.workSpawn(), 1000);
setTimeout(() => person.workSpawn(), 1000);

console.log('last msg');
