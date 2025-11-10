# Sistema de Design - Landing Page

## Paleta de Cores

### Cores Primárias
- **Primary 600** (`#0284c7`) - Cor principal dos botões e destaques
- **Primary 500** (`#0ea5e9`) - Variação mais clara
- **Primary 700** (`#0369a1`) - Variação mais escura para hover

### Cores Secundárias
- **Secondary 500** (`#eab308`) - Amarelo para CTAs alternativos
- **Secondary 600** (`#ca8a04`) - Variação mais escura

### Cores Neutras
- **Gray 50-900** - Escalas de cinza para textos e backgrounds

## Tipografia

### Fontes
- **Heading**: Poppins (títulos e headings)
- **Body**: Inter (textos e parágrafos)

### Tamanhos
- **Hero Title**: 5xl - 7xl (responsivo)
- **Section Title**: 4xl - 5xl
- **Card Title**: 2xl
- **Body**: base - xl

## Componentes Reutilizáveis

### Button
```svelte
<Button variant="primary|secondary|outline" size="sm|md|lg">
  Texto do Botão
</Button>
```

**Variantes:**
- `primary`: Botão azul sólido (cor primária)
- `secondary`: Botão amarelo sólido (cor secundária)
- `outline`: Botão com borda, fundo transparente

### Card
```svelte
<Card hover={true}>
  <!-- Conteúdo do card -->
</Card>
```

**Props:**
- `hover`: Ativa animação ao passar o mouse (padrão: true)

### Section
```svelte
<Section id="section-id" background="white|gray">
  <!-- Conteúdo da seção -->
</Section>
```

**Props:**
- `id`: ID para navegação/âncoras
- `background`: Cor de fundo ('white' ou 'gray')

### SectionTitle
```svelte
<SectionTitle
  title="Título da Seção"
  subtitle="Subtítulo opcional"
  align="center|left"
/>
```

## Espaçamentos

- **Section Padding**: 5rem vertical
- **Card Padding**: 1.5rem
- **Gap entre Cards**: 2rem

## Animações

Todas as animações usam `svelte-motion` (Framer Motion para Svelte):

- **Fade In**: Elementos aparecem com fade ao entrar na viewport
- **Slide In**: Elementos deslizam lateralmente ao aparecer
- **Hover Scale**: Botões crescem ao passar o mouse (1.05x)
- **Card Hover**: Cards sobem ao passar o mouse

## Classes Utilitárias Customizadas

### Botões
- `.btn-primary`: Botão primário azul
- `.btn-secondary`: Botão com borda (outline)

### Layout
- `.section`: Container de seção com padding
- `.container-custom`: Container centralizado (max-width: 7xl)

### Tipografia
- `.section-title`: Estilo padrão para títulos de seção
- `.section-subtitle`: Estilo padrão para subtítulos

### Cards
- `.card`: Card com sombra e bordas arredondadas

## Como Usar

1. **Importar componentes:**
```svelte
import { Button, Card, Section, SectionTitle } from '$lib/components';
```

2. **Importar tema (se necessário):**
```typescript
import { theme } from '$lib/config/theme';
```

3. **Usar classes do Tailwind:**
Todas as classes do Tailwind estão disponíveis, priorizando as cores customizadas (primary, secondary).

## Boas Práticas

- Sempre use os componentes ao invés de recriar estilos
- Mantenha consistência usando as cores do tema
- Use as classes utilitárias customizadas quando possível
- Adicione animações com `svelte-motion` para interatividade
- Mantenha o espaçamento consistente usando as variáveis do tema
