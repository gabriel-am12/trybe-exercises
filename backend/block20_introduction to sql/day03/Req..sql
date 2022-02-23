USE PecasFornecedores;
-- ex.01
SELECT * FROM Pecas
WHERE name LIKE 'GR%';
-- ex.02
SELECT * FROM Fornecimentos 
WHERE peca = 2
ORDER BY Fornecedor;
-- ex.03
 