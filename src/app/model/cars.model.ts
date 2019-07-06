export class Cars{

public marc:string;
public model:string;
public doors:number;
public image:string;



constructor();
constructor(marc:string, model:string , doors:number, image:string);
constructor(marc?:string, model?:string , doors?:number, image?:string){
    this.marc = marc;
    this.model = model;
    this.doors = doors;
    this.image = image;
    }
}

// export class MyItem {
//     public name: string;
//     public surname: string;
//     public category: string;
//     public address: string;

//     constructor();
//     constructor(name:string, surname: string, category: string, address?: string);
//     constructor(name?: string, surname?: string, category?: string, address?: string) {
//         this.name = name;
//         this.surname = surname;
//         this.category = category;
//         this.address = address;
//     }
// }