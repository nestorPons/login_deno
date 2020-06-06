import { __ } from 'https://deno.land/x/dirname/mod.ts';
const { __filename, __dirname } = __(import.meta);

export const path = {
    base: __dirname.replace('/core',''), 
    join(subpath: string){
        return this.base.concat(`/${subpath}`); 
    }
}