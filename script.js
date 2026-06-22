/**
 * JAVASCRIPT MASTERY SANDBOX
 * Structured for end-to-end study.
 */

// --- UTILITY: Logging to our custom screen ---
const output = document.getElementById('output');
const log = (msg) => output.innerText += `> ${msg}\n`;
const clearLog = () => output.innerText = "";

// ==========================================
// MODULE 1: Variables, Data Types & Scope
// ==========================================
document.getElementById('btn-basics').addEventListener('click', () => {
    clearLog();
    // 1. Variables (let vs const)
    const language = "JavaScript"; // Immutable
    let version = 2024;            // Mutable
    
    // 2. Data Types
    let types = [
        typeof "Hello",      // String
        typeof 42,           // Number
        typeof true,         // Boolean
        typeof undefined,    // Undefined
        typeof {a:1},        // Object
        typeof Symbol()      // Symbol
    ];

    // 3. Template Literals & Arithmetic
    log(`Studying: ${language} version ${version}`);
    log(`Types found: ${types.join(', ')}`);
    
    // 4. Conditionals (Ternary Operator)
    let message = version > 2000 ? "Modern JS" : "Legacy JS";
    log(`Status: ${message}`);
});

// ==========================================
// MODULE 2: Arrays, Objects & Functional Methods
// ==========================================
document.getElementById('btn-arrays').addEventListener('click', () => {
    clearLog();
    const users = [
        { id: 1, name: "Alice", xp: 50 },
        { id: 2, name: "Bob", xp: 150 },
        { id: 3, name: "Charlie", xp: 80 }
    ];

    // 1. Destructuring
    const { name } = users[0];
    log(`Destructured Name: ${name}`);

    // 2. Spread Operator (Cloning)
    const moreUsers = [...users, { id: 4, name: "Dave", xp: 200 }];

    // 3. High-Order Functions (The Big 3: Filter, Map, Reduce)
    const proUsers = moreUsers
        .filter(u => u.xp > 100)           // Filter those with high XP
        .map(u => u.name.toUpperCase());   // Transform to uppercase
        
    const totalXP = users.reduce((sum, u) => sum + u.xp, 0); // Calculate sum

    log(`Pro Users: ${proUsers.join(', ')}`);
    log(`Total XP: ${totalXP}`);
});

// ==========================================
// MODULE 3: Asynchronous JS (Promises & Async/Await)
// ==========================================
document.getElementById('btn-async').addEventListener('click', async () => {
    clearLog();
    log("Fetching data from API...");

    // 1. Promises & Try/Catch (Error Handling)
    try {
        // 2. Fetch API & Await
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        if (!response.ok) throw new Error("Network issue!");
        
        const data = await response.json();
        
        // 3. Delayed Execution (Simulation)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        log(`Async Result: ${data.title}`);
    } catch (error) {
        log(`Error: ${error.message}`);
    }
});

// ==========================================
// MODULE 4: OOP (Classes, Inheritance & Encapsulation)
// ==========================================
document.getElementById('btn-oop').addEventListener('click', () => {
    clearLog();

    // 1. Class Declaration
    class Character {
        constructor(name, level) {
            this.name = name;
            this.level = level;
        }
        // Method
        greet() { return `I am ${this.name}`; }
    }

    // 2. Inheritance
    class Mage extends Character {
        constructor(name, level, spell) {
            super(name, level); // Call parent constructor
            this.spell = spell;
        }
        // Overriding / Extending
        cast() { return `${this.name} casts ${this.spell}!`; }
    }

    const player = new Mage("Gandalf", 99, "Fireball");
    log(player.greet());
    log(player.cast());
});

// ==========================================
// MODULE 5: The DOM & Events (Already used above!)
// ==========================================
// Note: .addEventListener is the modern way to handle events.
// It allows multiple listeners on one element, unlike .onclick.
