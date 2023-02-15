import { LEVELS } from "..enum/levels.enum";

// declaring a class
export class task {
    
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;
    
    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.LEVEL = LEVELS.NORMAL;
    }
}