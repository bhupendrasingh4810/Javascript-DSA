const allPlayer = [
    { player: 'S Ayub', team: 'PAK', role: 'BAT', bowlType: 'NONE', cp: 7 },
    { player: 'B Azam', team: 'PAK', role: 'BAT', bowlType: 'NONE', cp: 9 },
    { player: 'F Zaman', team: 'PAK', role: 'BAT', bowlType: 'NONE', cp: 7.5 },
    { player: 'M Rizwan', team: 'PAK', role: 'WK', bowlType: 'NONE', cp: 9 },
    { player: 'H Rauf', team: 'PAK', role: 'BOWL', bowlType: 'NONE', cp: 7.5 },
    { player: 'S Afridi', team: 'PAK', role: 'BOWL', bowlType: 'NONE', cp: 9 },
    { player: 'N Shah', team: 'PAK', role: 'BOWL', bowlType: 'NONE', cp: 8 },
    { player: 'S Khan', team: 'PAK', role: 'AR', bowlType: 'NONE', cp: 8 },
    { player: 'I Wasim', team: 'PAK', role: 'AR', bowlType: 'NONE', cp: 6.5 },

    { player: 'J Little', team: 'IRE', role: 'BOWL', bowlType: 'NONE', cp: 8.5 },
    { player: 'C Young', team: 'IRE', role: 'BOWL', bowlType: 'NONE', cp: 6.5 },
    { player: 'B McCarthy', team: 'IRE', role: 'BOWL', bowlType: 'NONE', cp: 7 },
    { player: 'L Tucker', team: 'IRE', role: 'WK', bowlType: 'NONE', cp: 7.5 },
    { player: 'H Tector', team: 'IRE', role: 'BAT', bowlType: 'NONE', cp: 7.5 },
    { player: 'M Adair', team: 'IRE', role: 'BOWL', bowlType: 'NONE', cp: 8 },
    { player: 'C Campher', team: 'IRE', role: 'AR', bowlType: 'NONE', cp: 7 },
    { player: 'G Delany', team: 'IRE', role: 'AR', bowlType: 'NONE', cp: 7 },
    { player: 'G Dockrell', team: 'IRE', role: 'BAT', bowlType: 'NONE', cp: 6.5 },
    { player: 'P Stirling', team: 'IRE', role: 'BAT', bowlType: 'NONE', cp: 8 },
    { player: 'A Balbirnie', team: 'IRE', role: 'BAT', bowlType: 'NONE', cp: 8 },
];

const result = [];

const combinationsUtil = (arr, data, start, end, index, r) => {
    // console.log(data, start, end, index, r)
    if (index === r) {
        result.push(data.slice(0, r))
        // console.log(data.slice(0, r).join(','));
        // console.log(data.slice(0, r));
        return;
    }

    for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
        data[index] = arr[i];
        combinationsUtil(arr, data, i + 1, end, index + 1, r);
    }
}

const combinations = async (arr, n, r) => {
    const data = new Array(r);
    await combinationsUtil(arr, data, 0, n - 1, 0, r);

    const teamWithCreditLessThan90 = result.filter(element => {
        const creditPoint = element.reduce((acc, item) => {
            return acc + item.cp;
        }, 0);
        return creditPoint > 83 && creditPoint < 84.5;
    });

    // const has2PlayerWith9CP = teamWithCreditLessThan90.filter(element => {
    //     const count = element.reduce((acc, item) => {
    //         return acc + (item.cp == 9 ? 1 : 0);
    //     }, 0);
    //     return count == 2;
    // });

    // const has2PlayerWith85CP = has2PlayerWith9CP.filter(element => {
    //     const count = element.reduce((acc, item) => {
    //         return acc + (item.cp == 8.5 ? 1 : 0);
    //     }, 0);
    //     return count == 3;
    // });

    // const has2PlayerWith8CP = has2PlayerWith85CP.filter(element => {
    //     const count = element.reduce((acc, item) => {
    //         return acc + (item.cp == 8 ? 1 : 0);
    //     }, 0);
    //     return count == 1;
    // });

    // const has2PlayerWith75CP = has2PlayerWith8CP.filter(element => {
    //     const count = element.reduce((acc, item) => {
    //         return acc + (item.cp == 7.5 ? 1 : 0);
    //     }, 0);
    //     return count == 2;
    // });

    // const has2PlayerWith7CP = has2PlayerWith75CP.filter(element => {
    //     const count = element.reduce((acc, item) => {
    //         return acc + (item.cp == 7 ? 1 : 0);
    //     }, 0);
    //     return count == 2;
    // });

    // const has2PlayerWith65CP = has2PlayerWith7CP.filter(element => {
    //     const count = element.reduce((acc, item) => {
    //         return acc + (item.cp == 6.5 ? 1 : 0);
    //     }, 0);
    //     return count == 1;
    // });

    // const has4Bowlers = has2PlayerWith65CP.filter(element => {
    //     const count = element.reduce((acc, item) => {
    //         return acc + (item.role === 'BOWL' ? 1 : 0);
    //     }, 0);
    //     return count == 4;
    // });

    const hasAR = teamWithCreditLessThan90.filter(element => {
        const count = element.reduce((acc, item) => {
            return acc + (item.role === 'AR' ? 1 : 0);
        }, 0);
        return count == 2;
    });

    const hasBall = hasAR.filter(element => {
        const count = element.reduce((acc, item) => {
            return acc + (item.role === 'BOWL' ? 1 : 0);
        }, 0);
        return count == 5;
    });

    const has4FromTeam2 = hasBall.filter(element => {
        const count = element.reduce((acc, item) => {
            return acc + (item.team === 'IRE' ? 1 : 0);
        }, 0);
        return count == 4;
    });

    // const hasWK = hasOnly2AR.filter(element => {
    //     const count = element.reduce((acc, item) => {
    //         return acc + (item.role === 'WK' ? 1 : 0);
    //     }, 0);
    //     return count == 1;
    // });

    const hasRequiredPlayer = has4FromTeam2.filter(element => {
        const count = element.reduce((acc, item) => {
            return acc + (['M Rizwan', 'B Azam', 'P Stirling', 'G Delany', 'S Afridi'].includes(item.player) ? 1 : 0);
        }, 0);
        return count == 4;
    });

    const deleteBowlType = hasRequiredPlayer.map((element) => element = element.map(({ bowlType, ...rest }) => rest))

    const sortedTeam = deleteBowlType.map(element => element.sort((player1, player2) => {
        if (player1.cp > player2.cp) return -1
        if (player1.cp < player2.cp) return 1
        return 0
    }))

    console.log(sortedTeam);
}

const n = allPlayer.length;
const r = 11;
// console.log(`Combinations of ${r} elements from array [${allPlayer}]:`);
combinations(allPlayer, n, r);
