# Happy Hour — Garden Café Jundiaí

Landing page estática, responsiva e sem backend. O projeto mantém as artes originais do balanço, do brinde, do fundo e do logo Happy Hour em `assets/`.

## Direção e movimento

- Composição editorial cinematográfica em três cenas: abertura, brinde e reserva.
- Desktop e mobile têm posicionamento e escala próprios para mostrar o balanço e o drink por inteiro.
- O traço vermelho do logo original não foi editado.
- GSAP 3.13.0 com ScrollTrigger sincroniza parallax e movimentos sutis pelo scroll. A página continua utilizável se a CDN estiver indisponível.
- `prefers-reduced-motion` desliga as animações de movimento.
- Imagens locais: a landing não depende de serviço de backend.

## Publicar no GitHub Pages

1. Abra o repositório `site-proj/happy` no GitHub.
2. Envie `index.html`, `.nojekyll`, `README.md` e a pasta `assets/` para a raiz da branch `main`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha `main` e a pasta `/(root)` e salve.
6. Aguarde a publicação e acesse `https://site-proj.github.io/happy/`.

## Testar localmente

Abra `index.html` diretamente no navegador ou inicie um servidor estático dentro desta pasta:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.
