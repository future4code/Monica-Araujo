import * as bcrypt from "bcryptjs";

export class HashManager {
    
   async hash(text: string): Promise<string>{
        const cost = 12;
        const salt = await bcrypt.genSalt(cost);
        const cypherText = await bcrypt.hash(text, salt);

        return cypherText;
    }

    async compare(plaintext: string, hash: string): Promise<boolean>{
        const hashCompare: boolean = await bcrypt.compare(plaintext, hash);
        return hashCompare;
    }
}