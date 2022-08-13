// const fruits =["apple", "banana", "orange"];
// const vegtables =["cucumber","radish"];
// console.log([...fruits, ...vegtables]);
//... extracts all the elements of fruits and vegetbales so they appear as one 

const developer ={
    salary: 100000,
    experience: 4.5,
    techStack: ["vue","html","css"],
    lookingForWork: true,
    doubleSalary(){
        this.salary = this.salary*2; 
        //Js will always run the right side of the = first
        this.lookingForWork = false;
    }

};
console.log(developer.salary); //output: 100000

developer.doubleSalary();
console.log(developer.salary);// output 200000