// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (true) {
    case role === `ceo`:
      return `The Ceo salary is : 2200€`
    case role === `manager`:
      return `The Manager salary is : 1800€`
    case role === `cto`:
      return `The Cto salary is : 1800€`
    case role === `developer`:
      return `The developer salary of is : 1500€`
    default:
      return `The default salary is : 1500€`
    }
  }
    
  

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);