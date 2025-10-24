# Comandos Git Rápidos

## Upload inicial de código
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/arthurmriber/videosystem.git
git branch -M main
git push -u origin main
```

## Para cada alteração (após o upload inicial)
```bash
git add .
git commit -m "Descrição da sua alteração"
git push
```

## Exemplos de commits
```bash
git commit -m "Adiciona funcionalidade de busca"
git commit -m "Melhora UI do player de vídeo"
git commit -m "Corrige bug no corte de vídeo"
git commit -m "Atualiza estilos CSS"
```

## Verificar status
```bash
git status
```

## Ver histórico
```bash
git log
```

