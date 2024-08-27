function welcome(name: string): void;

function welcome(age: number): void;

function welcome(isTeacher: boolean): void;

//implement your code here
function welcome(input: string | number | boolean) {

    switch (typeof input) {
        case "string":
            console.log(`Hello, ${input}!`);
            break;
        case "number":
            console.log(`You are ${input} years old.`);
            break;
        case "boolean":
            if (input) {
                console.log("Are you a teacher? Yes.");
            } else {
                console.log("Are you a teacher? No.");
            }
            break;
    }
}

export default welcome;
