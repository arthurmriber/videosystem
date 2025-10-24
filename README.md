# Cortador de Vídeos - Cloudflare Pages

Sistema de criação e corte de vídeos integrado com Associated Press.

## Funcionalidades

- ✅ Busca na biblioteca de vídeos da AP
- ✅ Preview de vídeos com player customizado
- ✅ Corte de vídeos com precisão de milissegundos
- ✅ Tooltip visual ao arrastar handles
- ✅ Download automático do vídeo cortado

## Como fazer Deploy no Cloudflare Pages

### Passo 1: Criar conta no Cloudflare Pages

1. Acesse https://pages.cloudflare.com
2. Faça login ou crie uma conta gratuita
3. Conecte seu repositório GitHub (recomendado) ou faça upload manual

### Passo 2: Configurar o Projeto

**Opção A: Usando GitHub (Recomendado)**

1. Crie um repositório no GitHub
2. Faça push deste código para o repositório
3. No Cloudflare Pages, clique em "Create a project"
4. Conecte com seu GitHub e selecione o repositório
5. Configure:
   - **Framework preset**: None (ou HTML)
   - **Build command**: (deixe vazio)
   - **Build output directory**: /
   - **Root directory**: /

**Opção B: Upload Manual**

1. No Cloudflare Pages, clique em "Create a project"
2. Escolha "Upload assets"
3. Faça upload da pasta com o arquivo `index.html`
4. Clique em "Deploy site"

### Passo 3: Aguardar Deploy

- O Cloudflare Pages vai fazer o deploy automaticamente
- Você receberá uma URL como: `https://seu-projeto.pages.dev`
- O deploy leva cerca de 1-2 minutos

### Passo 4: Configurar Domínio Customizado (Opcional)

1. No projeto Cloudflare Pages, vá em "Custom domains"
2. Adicione seu domínio
3. Siga as instruções de DNS

## Como Funciona

### FFmpeg.wasm

O sistema usa **FFmpeg.wasm** para cortar vídeos diretamente no navegador:

- ✅ Não precisa de backend/servidor
- ✅ Funciona 100% no cliente
- ✅ Corta vídeos com precisão de milissegundos
- ✅ Download automático do resultado

### Processo de Corte

1. Usuário define início e fim do corte
2. FFmpeg.wasm baixa o vídeo
3. Processa o corte usando FFmpeg
4. Faz download do vídeo cortado (.mp4)

### Notas Importantes

- **Primeira execução**: FFmpeg.wasm pode demorar alguns segundos para carregar (~2-3MB)
- **Vídeos grandes**: Pode levar mais tempo para processar
- **Compatibilidade**: Funciona em navegadores modernos (Chrome, Firefox, Edge, Safari)

## Estrutura do Projeto

```
/
├── index.html          # Aplicação completa
└── README.md          # Este arquivo
```

## Tecnologias Utilizadas

- HTML5, CSS3, JavaScript vanilla
- Font Awesome (ícones)
- FFmpeg.wasm (processamento de vídeo)
- Associated Press API (vídeos jornalísticos)

## Testando Localmente

### Problema: Conteúdo Misto (HTTP/HTTPS)

FFmpeg.wasm requer HTTPS devido a políticas de segurança do navegador. Em `localhost` HTTP você pode ver este erro:

```
Erro de segurança: conteúdo em http://localhost:8000/ pode não carregar dados de https://unpkg.com/...
```

### Soluções para Localhost:

**Opção 1: Cloudflare Pages (Recomendado)**
- Deploy automático via GitHub
- HTTPS gratuito incluído
- Funciona perfeitamente

**Opção 2: Ngrok (Teste Local HTTPS)**
```bash
# Instale ngrok
# Depois inicie:
python -m http.server 8000
ngrok http 8000
# Use a URL HTTPS fornecida pelo ngrok
```

**Opção 3: Testar funcionalidades sem corte**
- Busca de vídeos funciona em HTTP
- Preview funciona em HTTP
- Apenas o corte precisa HTTPS

### Testando Funcionalidades Básicas

Você pode testar todas as funcionalidades EXCETO o corte de vídeo em localhost HTTP:

1. Buscar vídeos na biblioteca ✅
2. Visualizar detalhes ✅
3. Preview do vídeo ✅
4. Ajustar trim (tempo) ✅
5. Download cortado ⚠️ (precisa HTTPS)

## Licença

MIT

