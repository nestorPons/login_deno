export class Utils{
    static delay(ms: number = 1000): Promise<void> { 
        return new Promise((res): number => 
            setTimeout((): void => { 
                res(); 
            }, ms) 
        ); 
    }
}