function uniquePaths(m, n) {
    dp = Array(m).fill().map(() => Array(n).fill(0));
    
    for(let i = 0; i < m; i++) dp[i][0] = 1;
    for(let j = 0; j < n; j++) dp[0][j] = 1;
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
            console.log(i, j, dp);
        }
    }
    console.log(dp[m-1][n-1]);
}

uniquePaths(3,2);

// Combanitorial Method
// (m-n-2)!/ (m-1)! * (n-1)!