USE PecasFornecedores;
-- ex.01
SELECT * FROM Pecas
WHERE name LIKE 'GR%';
-- ex.02
SELECT * FROM Fornecimentos 
WHERE peca = 2
ORDER BY Fornecedor;
-- ex.03
SELECT peca, Preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%'; 
-- ex.04
SELECT * FROM Fornecedores 
WHERE name LIKE '%LTDA'
ORDER BY name DESC;
-- ex.05
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';
-- ex.06
SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15.00 AND 40.00
ORDER BY Preco;
-- ex.07
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';