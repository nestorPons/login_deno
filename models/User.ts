import { Validate } from '../libs/Validate.ts';

export class User { 
    private _id: number; 
    private _name: string; 
    private _email?: string = '';
    private _dirs: string[]; 
    private _tels: number[]; 
    private _pass: string; 
    private _role: number; 
    private _date_create: Date; 
    private _date_update: Date;
    private _status: number;
    private _obs: string; 

    constructor( 
        id: number, 
        name: string, 
        email: string = '', 
        dirs: string[] = [], 
        tels: number[] = [], 
        pass: string = '', 
        role: number = 0,
        status: number = 0,
        obs: string = '',
        date_create?: Date, 
        date_update?: Date, 

    ) {
        this._id = id; 
        this._name = name; 
        this._email = email; 
        this._dirs = dirs; 
        this._tels = tels; 
        this._pass = pass;
        this._role = role;
        this._status = status; 
        this._date_create = date_create || new Date; 
        this._date_update = date_update || new Date;
        this._obs = obs; 
    }
    id(): number {
        return this._id; 
    }
    name(): string{
        return this._name; 
    }
    email(newEmail?: string): string | undefined{
        if(newEmail != undefined){
            this.update();
            if(!Validate.isEmail(newEmail)) throw 'No ha introducido un email válido';
            this._email = newEmail;
        } 
        return this._email || undefined ; 
    }
    dirs( newDirs?: string): string[]{
        if( Array.isArray(newDirs)  ) this._dirs.push(newDirs) && this.update(); 
        return this._dirs; 
    }
    addOnedir( newDir?: string ): string[]{
        if( newDir != undefined ) this._dirs.push(newDir) && this.update();   
        return this._dirs; 
    }
    tels( newTels?: number[]): number[]{
        if( Array.isArray(newTels) ) (this._tels = newTels) && this.update();  
        return this._tels; 
    }
    addOneTel( newTel?: number ): number[]{
        if(newTel) this._tels.push(newTel) && this.update();  
        return this._tels; 
    }
    pass( newPass?: string): string{
        if(newPass != undefined) (this._pass = newPass) && this.update(); ; 
        return this._pass; 
    }
    role( newRole?: number): number{
        if( typeof newRole == 'number' ) (this._role = newRole) && this.update();   
        return this._role;
    }
    date_create( newDate?: Date): Date{
        if( newDate ) (this._date_create = newDate) && this.update(); 
        return this._date_create; 
    }
    date_update( newDate?: Date): Date{
        if( newDate ) this._date_update = newDate; 
        return this._date_update;
    }
    update(){
        this.date_update(new Date);
    }
    status( newStatus?: number ): number {
        if( typeof newStatus == 'number') (this._status = newStatus) && this.update();
        return this._status; 
    }
    obs( newOb?: string) : string {
        if(newOb) (this._obs = newOb) && this.update();
        return this._obs;
    }
}