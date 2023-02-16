SELECT trades.address
FROM trades
JOIN (
    SELECT 
        address, 
        SUM(
            CASE
                WHEN denom = 'usdc' THEN amount * 0.000001
                WHEN denom = 'swth' THEN amount * 0.00000005
                WHEN denom = 'tmz' THEN amount * 0.003
            END
        ) AS balance
    FROM balances
    GROUP BY address
) AS cumulative_balance
    ON trades.address = cumulative_balance.address
WHERE 
    trades.block_height > 730000 
    AND cumulative_balance.balance >= 500