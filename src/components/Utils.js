export function etage(rom) {



}

export default class utils {

    static etage(rom) {
        const etg=
            [
                ["Storelogen","Halvtimen","Støy","Stillhet"],
                ["Maos Lille Røde","Stjernesalen","Speilsalen","Bakgården"],
                ["Teglverket","Grøndahls","Tivoli"]
            ];

        for (let i = 0; i <etg.length ; i++) {
            for (let j = 0; j <etg[i].length ; j++) {

                if(rom===etg[i][j]){
                    return (i+1) ;
                }
            }
        }
    }
}